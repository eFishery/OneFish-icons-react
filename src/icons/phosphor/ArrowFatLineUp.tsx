/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M231.39062,123.06152A8,8,0,0,1,224,128H184v56a8.00039,8.00039,0,0,1-8,8H80a8.00039,8.00039,0,0,1-8-8V128H32a8.00065,8.00065,0,0,1-5.65723-13.65723l96-96a8.003,8.003,0,0,1,11.31446,0l96,96A8.002,8.002,0,0,1,231.39062,123.06152ZM176,208H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <polygon
      points="32 120 128 24 224 120 176 120 176 184 80 184 80 120 32 120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="216"
      x2="80"
      y2="216"
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

const ArrowFatLineUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

ArrowFatLineUp.displayName = 'ArrowFatLineUp';

export default ArrowFatLineUp;
