/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M229.65674,141.65723l-96,96a8.00182,8.00182,0,0,1-11.31348,0l-96-96A8.0001,8.0001,0,0,1,32,128H72V104a8.00008,8.00008,0,0,1,8-8h96a8.00008,8.00008,0,0,1,8,8v24h40a8.0001,8.0001,0,0,1,5.65674,13.65723ZM184,40a8.00008,8.00008,0,0,0-8-8H80a8,8,0,0,0,0,16h96A8.00008,8.00008,0,0,0,184,40Zm0,32a8.00008,8.00008,0,0,0-8-8H80a8,8,0,0,0,0,16h96A8.00008,8.00008,0,0,0,184,72Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <polygon
      points="32 136 128 232 224 136 176 136 176 104 80 104 80 136 32 136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="40"
      x2="80"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="72"
      x2="80"
      y2="72"
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

const ArrowFatLinesDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

ArrowFatLinesDown.displayName = 'ArrowFatLinesDown';

export default ArrowFatLinesDown;
