/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M112.001,240a8.00547,8.00547,0,0,1-7.59082-10.53164L164.90043,47.99985H80A7.99993,7.99993,0,1,1,80,32h96a8,8,0,0,1,7.58984,10.52969l-64,191.99819A8.00469,8.00469,0,0,1,112.001,240Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <polyline
      points="80 40 176 40 112 232"
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

const NumberSeven = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

NumberSeven.displayName = 'NumberSeven';

export default NumberSeven;
