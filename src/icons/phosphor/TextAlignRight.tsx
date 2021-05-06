/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <path d="M40,76H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z" />
      <path d="M216,100H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
      <path d="M216,140H40.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Z" />
      <path d="M216,180H88.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Z" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="40"
      y1="68"
      x2="216"
      y2="68"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88"
      y1="108"
      x2="216"
      y2="108"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40.00614"
      y1="148"
      x2="216"
      y2="148"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88.00614"
      y1="188"
      x2="216"
      y2="188"
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

const TextAlignRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

TextAlignRight.displayName = 'TextAlignRight';

export default TextAlignRight;
