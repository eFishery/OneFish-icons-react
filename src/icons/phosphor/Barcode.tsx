/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <path d="M224,40H184a8,8,0,0,0,0,16h32V88a8,8,0,0,0,16,0V48A8.00039,8.00039,0,0,0,224,40Z" />
      <path d="M72,200H40V168a8,8,0,0,0-16,0v40a8.00039,8.00039,0,0,0,8,8H72a8,8,0,0,0,0-16Z" />
      <path d="M224,160a8.00039,8.00039,0,0,0-8,8v32H184a8,8,0,0,0,0,16h40a8.00039,8.00039,0,0,0,8-8V168A8.00039,8.00039,0,0,0,224,160Z" />
      <path d="M32,96a8.00039,8.00039,0,0,0,8-8V56H72a8,8,0,0,0,0-16H32a8.00039,8.00039,0,0,0-8,8V88A8.00039,8.00039,0,0,0,32,96Z" />
      <path d="M80,80a8.00039,8.00039,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8.00039,8.00039,0,0,0,80,80Z" />
      <path d="M184,168V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0Z" />
      <path d="M144,80a8.00039,8.00039,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8.00039,8.00039,0,0,0,144,80Z" />
      <path d="M112,80a8.00039,8.00039,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8.00039,8.00039,0,0,0,112,80Z" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <polyline
      points="184 48 224 48 224 88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="72 208 32 208 32 168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="224 168 224 208 184 208"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="32 88 32 48 72 48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="80"
      y1="88"
      x2="80"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="88"
      x2="176"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="144"
      y1="88"
      x2="144"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="112"
      y1="88"
      x2="112"
      y2="168"
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

const Barcode = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Barcode.displayName = 'Barcode';

export default Barcode;
