/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M72,104h32v48H72ZM232,56V216a7.99951,7.99951,0,0,1-11.57812,7.15527L192,208.94434l-28.42188,14.21093a8.00049,8.00049,0,0,1-7.15624,0L128,208.94434,99.57812,223.15527a7.99634,7.99634,0,0,1-7.15624,0L64,208.94434,35.57812,223.15527A7.99951,7.99951,0,0,1,24,216V56A16.01833,16.01833,0,0,1,40,40H216A16.01833,16.01833,0,0,1,232,56ZM120,96a8.00039,8.00039,0,0,0-8-8H64a8.00039,8.00039,0,0,0-8,8v64a8.00039,8.00039,0,0,0,8,8h48a8.00039,8.00039,0,0,0,8-8Zm80,48a8.00039,8.00039,0,0,0-8-8H144a8,8,0,0,0,0,16h48A8.00039,8.00039,0,0,0,200,144Zm0-32a8.00039,8.00039,0,0,0-8-8H144a8,8,0,0,0,0,16h48A8.00039,8.00039,0,0,0,200,112Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M32,216V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V216l-32-16-32,16-32-16L96,216,64,200Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="144"
      y1="112"
      x2="192"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="144"
      y1="144"
      x2="192"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="64"
      y="96"
      width="48"
      height="64"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const NewspaperClipping = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

NewspaperClipping.displayName = 'NewspaperClipping';

export default NewspaperClipping;
