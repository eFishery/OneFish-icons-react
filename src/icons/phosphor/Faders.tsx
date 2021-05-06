/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <path d="M128.001,111.99988a8.00008,8.00008,0,0,0-8,8v96a8,8,0,0,0,16,0v-96A8.00008,8.00008,0,0,0,128.001,111.99988Z" />
      <path d="M200.001,191.99988a7.99987,7.99987,0,0,0-8,8.00049l.001,16a8,8,0,0,0,16-.001l-.001-16A8,8,0,0,0,200.001,191.99988Z" />
      <path d="M224.001,159.99988h-16l.001-120a8,8,0,1,0-16,0l-.001,120h-16a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z" />
      <path d="M56.001,159.99988a8.00039,8.00039,0,0,0-8,8l-.00049,48a8,8,0,0,0,16,0l.00049-48A8.00009,8.00009,0,0,0,56.001,159.99988Z" />
      <path d="M80.001,127.99988h-16l-.00049-88a8,8,0,0,0-16,0l.00049,88h-16a8,8,0,0,0,0,16h48a8,8,0,1,0,0-16Z" />
      <path d="M152.001,79.99988h-16v-40a8,8,0,1,0-16,0v40h-16a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="128.00098"
      y1="120"
      x2="128.0011"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128.0011"
      y1="40"
      x2="128.00098"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200.00098"
      y1="200"
      x2="200.00181"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200.00181"
      y1="40"
      x2="200.00098"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="224.00098"
      y1="168"
      x2="176.00098"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="56.00098"
      y1="168"
      x2="56.00039"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="56.00039"
      y1="40"
      x2="56.00098"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32.00098"
      y1="136"
      x2="80.00098"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="152.00098"
      y1="88"
      x2="104.00098"
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

const Faders = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Faders.displayName = 'Faders';

export default Faders;
