#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

const {
  EFISHERY_ASSETS_PATH,
  PHOSPHOR_ASSETS_PATH,
  EFISHERY_COMPONENTS_PATH,
  PHOSPHOR_COMPONENTS_PATH,
  ICONS_PATH,
  INDEX_PATH,
  INDEX_NAME,
} = require('./index');

let icons = {};
const weights = ['regular', 'fill'];

let passes = 0;
let fails = 0;

function readFile(folder, pathname, weight) {
  const file = fs.readFileSync(pathname);
  icons[folder][weight] = file
    .toString('utf-8')
    .replace(/^.*<\?xml.*/g, '')
    .replace(/<svg.*/g, '')
    .replace(/<\/svg>/g, '')
    .replace(/<rect width="25[\d,\.]+" height="25[\d,\.]+" fill="none".*\/>/g, '')
    .replace(/<title.*/, '')
    .replace(/"#0+"/g, '{color}')
    .replace(/fill\-rule/g, 'fillRule')
    .replace(/clip\-rule/g, 'clipRule')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-miterlimit/g, 'strokeMiterlimit');
}

function readFiles(ASSETS_PATH) {
  const folders = fs.readdirSync(ASSETS_PATH, 'utf-8');
  icons = {};

  folders.forEach(folder => {
    if (!fs.lstatSync(path.join(ASSETS_PATH, folder)).isDirectory()) return;
    icons[folder] = {};

    const files = fs.readdirSync(path.join(ASSETS_PATH, folder));
    files.forEach(filename => {
      const filepath = path.join(ASSETS_PATH, folder, filename);
      const weight = filename
        .split('.svg')[0]
        .split('-')
        .slice(-1)[0];
      switch (weight) {
        case 'fill':
          readFile(folder, filepath, weight);
          break;
        default:
          readFile(folder, filepath, 'regular');
          break;
      }
    });
  });
}

function checkFiles(icon) {
  const weightsPresent = Object.keys(icon);
  return weightsPresent.length >= 2 && weightsPresent.some(w => weights.includes(w));
}

function generateComponents(COMPONENTS_PATH) {
  const viewBox = COMPONENTS_PATH.includes('efishery') ? '0 0 24 24' : '0 0 256 256';

  if (fs.existsSync(COMPONENTS_PATH)) {
    fs.rmdirSync(COMPONENTS_PATH, { recursive: true });
  }
  fs.mkdirSync(COMPONENTS_PATH);

  for (let key in icons) {
    const icon = icons[key];
    const name = key
      .split('-')
      .map(substr => substr.replace(/^\w/, c => c.toUpperCase()))
      .join('');
    let componentString = `\
/* GENERATED FILE */
import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../../lib";
import IconBase, { RenderFunction } from "../../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();
`;

    if (!checkFiles(icon)) {
      fails += 1;
      console.error(`${chalk.inverse.red(' FAIL ')} ${name} is missing weights`);
      console.group();
      console.error(weights.filter(w => !Object.keys(icon).includes(w)));
      console.groupEnd();
      continue;
    }

    for (let weight in icon) {
      componentString += `
pathsByWeight.set("${weight}", (${
        // weight === "fill" && name !== "DropHalf" ? "" : "color: string"
        icon[weight].includes('{color}') ? 'color: string' : ''
      }) => (
  <>
    ${icon[weight].trim()}
  </>
));
`;
    }
    componentString += `
const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ${name} = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='${viewBox}' renderPath={renderPath} />
));

${name}.displayName = "${name}";

export default ${name};
`;
    try {
      fs.writeFileSync(path.join(COMPONENTS_PATH, `${name}.tsx`), componentString, {
        flag: 'w',
      });
      console.log(`${chalk.inverse.green(' DONE ')} ${name}`);
      passes += 1;
    } catch (err) {
      console.error(`${chalk.inverse.red(' FAIL ')} ${name} could not be saved`);
      console.group();
      console.error(err);
      console.groupEnd();
      fails += 1;
    }
  }
  // TODO: implement logging with async writeFile()
  if (passes > 0) console.log(chalk.green(`${passes} component${passes > 1 ? 's' : ''} generated`));
  if (fails > 0) console.log(chalk.red(`${fails} component${fails > 1 ? 's' : ''} failed`));
}

function generateExports(COMPONENTS_PATH) {
  let indexString = `\
/* GENERATED FILE */
export { Icon, IconProps, IconContext } from "lib";

`;
  for (let key in icons) {
    const name = key
      .split('-')
      .map(substr => substr.replace(/^\w/, c => c.toUpperCase()))
      .join('');
    indexString += `\
export { default as ${name} } from "./${name}";
`;
  }
  try {
    const componentIndexPath = path.join(COMPONENTS_PATH, INDEX_NAME);
    fs.writeFileSync(componentIndexPath, indexString, {
      flag: 'w',
    });
    console.log(chalk.green('Export success'));
  } catch (err) {
    console.error(chalk.red('Export failed'));
    console.group();
    console.error(err);
    console.groupEnd();
  }
}

function generateIndex() {
  const folders = fs.readdirSync(ICONS_PATH, 'utf-8');

  let indexString = `\
/* GENERATED FILE */
export { Icon, IconProps, IconContext } from "lib";

`;

  folders.forEach(folder => {
    if (!fs.lstatSync(path.join(ICONS_PATH, folder)).isDirectory()) return;
    if (!path.join(ICONS_PATH, folder, INDEX_NAME)) return;

    indexString += `\
export * from 'icons/${folder}';
`;
  });

  try {
    const componentIndexPath = path.join(INDEX_PATH, INDEX_NAME);
    fs.writeFileSync(componentIndexPath, indexString, {
      flag: 'w',
    });
    console.log(chalk.green('Export success'));
  } catch (err) {
    console.error(chalk.red('Export failed'));
    console.group();
    console.error(err);
    console.groupEnd();
  }
}

readFiles(EFISHERY_ASSETS_PATH);
generateComponents(EFISHERY_COMPONENTS_PATH);
generateExports(EFISHERY_COMPONENTS_PATH);

readFiles(PHOSPHOR_ASSETS_PATH);
generateComponents(PHOSPHOR_COMPONENTS_PATH);
generateExports(PHOSPHOR_COMPONENTS_PATH);

generateIndex();
