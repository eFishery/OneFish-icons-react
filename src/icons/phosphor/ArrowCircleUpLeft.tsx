/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm33.65625,137.65625a7.99708,7.99708,0,0,1-11.3125,0L108,119.3125V148a8,8,0,0,1-16,0V100a8.02752,8.02752,0,0,1,8-8h48a8,8,0,0,1,0,16H119.3125l42.34375,42.34375A7.99708,7.99708,0,0,1,161.65625,161.65625Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16" />
    <polyline
      points="148 100 100 100 100 148"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="156"
      y1="156"
      x2="100"
      y2="100"
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

const ArrowCircleUpLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

ArrowCircleUpLeft.displayName = 'ArrowCircleUpLeft';

export default ArrowCircleUpLeft;
