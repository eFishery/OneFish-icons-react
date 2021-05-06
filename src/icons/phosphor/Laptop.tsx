/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M232,168h-8V72a24.0275,24.0275,0,0,0-24-24H56A24.0275,24.0275,0,0,0,32,72v96H24a8.00008,8.00008,0,0,0-8,8v16a24.0275,24.0275,0,0,0,24,24H216a24.0275,24.0275,0,0,0,24-24V176A8.00008,8.00008,0,0,0,232,168ZM112,72h32a8,8,0,0,1,0,16H112a8,8,0,0,1,0-16ZM224,192a8.00917,8.00917,0,0,1-8,8H40a8.00917,8.00917,0,0,1-8-8v-8H224Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M40,176V72A16,16,0,0,1,56,56H200a16,16,0,0,1,16,16V176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M24,176H232a0,0,0,0,1,0,0v16a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V176A0,0,0,0,1,24,176Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="144"
      y1="88"
      x2="112"
      y2="88"
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

const Laptop = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Laptop.displayName = 'Laptop';

export default Laptop;
