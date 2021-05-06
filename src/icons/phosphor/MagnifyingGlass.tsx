/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M175.99609,116a60,60,0,1,1-60-60A60.06812,60.06812,0,0,1,175.99609,116Zm53.65137,113.65771a8.0006,8.0006,0,0,1-11.31445,0l-43.2229-43.2229a92.11513,92.11513,0,1,1,11.31445-11.31347l43.2229,43.2229A8,8,0,0,1,229.64746,229.65771ZM115.99609,192a76,76,0,1,0-76-76A76.08614,76.08614,0,0,0,115.99609,192Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <circle
      cx="116"
      cy="116"
      r="84"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="175.39356"
      y1="175.40039"
      x2="223.99414"
      y2="224.00098"
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

const MagnifyingGlass = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

MagnifyingGlass.displayName = 'MagnifyingGlass';

export default MagnifyingGlass;
