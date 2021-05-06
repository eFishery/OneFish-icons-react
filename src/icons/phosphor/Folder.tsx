/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M215.99512,71.99805h-84.6875l-27.3125-27.3125a15.8907,15.8907,0,0,0-11.3125-4.6875H39.99512a16.01581,16.01581,0,0,0-16,16V200.61523a15.404,15.404,0,0,0,15.39062,15.38282h177.5a15.13062,15.13062,0,0,0,15.10938-15.10938V87.99805A16.01582,16.01582,0,0,0,215.99512,71.99805Zm-176-16h52.6875l16,16H39.99512Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M216.88889,208H39.38462A7.40633,7.40633,0,0,1,32,200.61538V80H216a8,8,0,0,1,8,8V200.88889A7.11111,7.11111,0,0,1,216.88889,208Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32,80V56a8,8,0,0,1,8-8H92.68629a8,8,0,0,1,5.65686,2.34315L128,80"
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

const Folder = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Folder.displayName = 'Folder';

export default Folder;
