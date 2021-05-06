/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <path d="M211.30223,79.99421,229.645,61.65143A8.00018,8.00018,0,1,0,218.33153,50.337L199.98827,68.68024,181.645,50.337a8.00018,8.00018,0,1,0-11.31348,11.31445L188.6743,79.99421,170.33153,98.337A8.00018,8.00018,0,0,0,181.645,109.65143l18.34326-18.34326,18.34326,18.34326A8.00018,8.00018,0,0,0,229.645,98.337Z" />
      <path d="M199.98827,113.93561l-7.03113,7.03125a24.00024,24.00024,0,0,1-33.93933-33.9436l7.02905-7.029-7.0299-7.03a24.03027,24.03027,0,0,1,4.60974-37.55127A187.51454,187.51454,0,0,0,15.39061,69.54548a15.73529,15.73529,0,0,0-6.21142,10.936,16.27674,16.27674,0,0,0,3.76074,12.27393L115.85985,214.05768a15.95117,15.95117,0,0,0,12.17383,5.65528A15.77638,15.77638,0,0,0,140.081,214.127l74.647-87.97925a23.97614,23.97614,0,0,1-7.71021-5.18262Z" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="224"
      y1="56"
      x2="176"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="224"
      y1="104"
      x2="176"
      y2="56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M25.06379,98.17952A145.90174,145.90174,0,0,1,127.99219,56.0029a148.757,148.757,0,0,1,16.01524.86162"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M58.97857,132.12064a98.11506,98.11506,0,0,1,69.01362-28.11774,99.87589,99.87589,0,0,1,16.02985,1.28855"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="200" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const WifiX = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

WifiX.displayName = 'WifiX';

export default WifiX;
