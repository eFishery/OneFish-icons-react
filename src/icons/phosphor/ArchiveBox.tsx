/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M223.15527,68.42188l-16-32A7.99967,7.99967,0,0,0,200,32H56a7.99967,7.99967,0,0,0-7.15527,4.42188l-16,32A7.99934,7.99934,0,0,0,32,72V208a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V72A7.99934,7.99934,0,0,0,223.15527,68.42188Zm-55.55713,87.29394-33.94091,33.94141c-.0542.0542-.11426.10107-.16944.15332-.1333.126-.26611.25244-.4082.36914-.06689.05517-.13867.10254-.207.15527-.13916.10693-.27686.21484-.42285.313-.05616.0376-.11621.06885-.17334.105-.16358.104-.32813.207-.49951.29883-.04248.023-.08692.041-.12989.0625-.18945.09765-.38135.1914-.57959.27392-.02832.01221-.05859.02051-.0874.03223-.2124.08545-.42725.16455-.64844.23193-.02929.00928-.05957.01465-.08886.02295-.21973.064-.44141.12256-.668.168-.06543.01319-.13282.01856-.19873.03028-.19092.0332-.38184.06689-.57715.08593a7.89257,7.89257,0,0,1-1.59766,0c-.19531-.019-.38623-.05273-.57715-.08593-.06591-.01172-.1333-.01709-.19873-.03028-.22656-.04541-.44824-.104-.668-.168-.02929-.0083-.05957-.01367-.08886-.02295-.22168-.06738-.438-.14746-.65088-.23291-.02783-.01123-.05713-.01953-.085-.03125-.19824-.08252-.39014-.17627-.58008-.27392-.04248-.022-.08692-.03955-.1294-.0625-.17138-.0918-.33593-.19483-.49951-.29883-.05713-.03613-.11718-.06738-.17334-.105-.146-.09815-.28369-.20606-.42285-.313-.06836-.05273-.14014-.1001-.207-.15527-.13818-.11328-.26709-.23731-.39746-.35938-.05908-.05566-.12256-.10547-.18018-.16308L88.40186,155.71582a8.00035,8.00035,0,0,1,11.314-11.31445L120,164.686V104a8,8,0,0,1,16,0v60.686l20.28418-20.28467a8.00035,8.00035,0,0,1,11.314,11.31445ZM52.94434,64l8-16H195.05566l8,16Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M208,216H48a8,8,0,0,1-8-8V72L56,40H200l16,32V208A8,8,0,0,1,208,216Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="94.059 150.059 128 184 161.941 150.059"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="104"
      x2="128"
      y2="184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="72"
      x2="216"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ArchiveBox = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

ArchiveBox.displayName = 'ArchiveBox';

export default ArchiveBox;
