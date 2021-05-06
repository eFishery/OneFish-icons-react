/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M216,64H175.99219V56a24.0275,24.0275,0,0,0-24-24h-48a24.0275,24.0275,0,0,0-24,24v8H40A16.01833,16.01833,0,0,0,24,80V208a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,216,64ZM95.99219,80h64V208h-64Zm0-24a8.00916,8.00916,0,0,1,8-8h48a8.00917,8.00917,0,0,1,8,8v8h-64Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <rect
      x="32"
      y="72"
      width="192"
      height="144"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M168,216V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V216"
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

const Suitcase = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Suitcase.displayName = 'Suitcase';

export default Suitcase;
