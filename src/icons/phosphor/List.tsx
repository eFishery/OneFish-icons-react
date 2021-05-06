/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <path d="M215.999,120.00037h-176a8,8,0,0,0,0,16h176a8,8,0,0,0,0-16Z" />
      <path d="M39.999,72.00037h176a8,8,0,0,0,0-16h-176a8,8,0,1,0,0,16Z" />
      <path d="M215.999,184.00037h-176a8,8,0,0,0,0,16h176a8,8,0,0,0,0-16Z" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="40"
      y1="128"
      x2="216"
      y2="128"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="64"
      x2="216"
      y2="64"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="192"
      x2="216"
      y2="192"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const List = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

List.displayName = 'List';

export default List;
