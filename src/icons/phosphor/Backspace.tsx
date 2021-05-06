/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M215.99512,39.99805H68.52637a16.1162,16.1162,0,0,0-13.71875,7.76562L9.13574,123.88086a8.02459,8.02459,0,0,0,0,8.23437l45.67188,76.11719v.00781a16.10652,16.10652,0,0,0,13.71875,7.75782H215.99512a16.01583,16.01583,0,0,0,16-16v-144A16.01582,16.01582,0,0,0,215.99512,39.99805ZM165.65137,146.3418a7.99915,7.99915,0,1,1-11.3125,11.3125l-18.34375-18.34375L117.65137,157.6543a7.99915,7.99915,0,0,1-11.3125-11.3125l18.34375-18.34375L106.33887,109.6543a7.99915,7.99915,0,0,1,11.3125-11.3125l18.34375,18.34375L154.33887,98.3418a7.99915,7.99915,0,0,1,11.3125,11.3125l-18.34375,18.34375Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M61.66958,204.116,16,128l45.66958-76.116a8,8,0,0,1,6.85994-3.884H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H68.52952A8,8,0,0,1,61.66958,204.116Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="104.00005"
      x2="112"
      y2="152.00005"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="152.00005"
      x2="112"
      y2="104.00005"
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

const Backspace = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Backspace.displayName = 'Backspace';

export default Backspace;
