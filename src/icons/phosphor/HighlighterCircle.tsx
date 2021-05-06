/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M201.53906,54.46094A103.99994,103.99994,0,1,0,54.46094,201.53906,103.99994,103.99994,0,1,0,201.53906,54.46094ZM96,209.9989V152h64v57.9989a88.31824,88.31824,0,0,1-64,0Zm94.22461-19.77429A88.78305,88.78305,0,0,1,176,201.76886V152a16.01833,16.01833,0,0,0-16-16V72a8,8,0,0,0-11.57812-7.15527l-48,24A7.99967,7.99967,0,0,0,96,96v40a16.01833,16.01833,0,0,0-16,16v49.76886a88.78631,88.78631,0,0,1-14.22461-11.54425,88,88,0,1,1,124.44922,0Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="104 144 104 96 152 72 152 144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M168,215.29789V152a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v63.29789"
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

const HighlighterCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

HighlighterCircle.displayName = 'HighlighterCircle';

export default HighlighterCircle;
