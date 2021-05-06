/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <path d="M215.99951,163.99353H194.8291a27.99567,27.99567,0,0,0-53.65918,0H39.99951a8,8,0,0,0,0,16H141.16992a27.99567,27.99567,0,0,0,53.65918,0h21.17041a8,8,0,0,0,0-16Z" />
      <path d="M39.999,91.99255l37.1709.001a27.99567,27.99567,0,0,0,53.65918,0l85.17041-.001a8,8,0,0,0,0-16l-85.17041.001a27.99567,27.99567,0,0,0-53.65918,0L40,75.99255h-.00049a8,8,0,0,0-.00049,16Z" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="147.99951"
      y1="171.99353"
      x2="39.99951"
      y2="171.99365"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="215.99951"
      y1="171.99365"
      x2="187.99951"
      y2="171.99353"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="167.99951"
      cy="171.99353"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="83.99951"
      y1="83.99353"
      x2="39.99951"
      y2="83.99294"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="215.99951"
      y1="83.99294"
      x2="123.99951"
      y2="83.99353"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="103.99951"
      cy="83.99353"
      r="20"
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

const SlidersHorizontal = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

SlidersHorizontal.displayName = 'SlidersHorizontal';

export default SlidersHorizontal;
