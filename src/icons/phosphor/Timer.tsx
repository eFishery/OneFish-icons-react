/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <path d="M104,16h48a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16Z" />
      <path d="M128,32a96,96,0,1,0,96,96A96.10874,96.10874,0,0,0,128,32Zm45.25488,62.05859-39.59765,39.59815a8.00018,8.00018,0,0,1-11.31446-11.31348l39.59815-39.59814a8,8,0,1,1,11.314,11.31347Z" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <circle cx="128" cy="128" r="88" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16" />
    <line
      x1="128"
      y1="128"
      x2="167.59798"
      y2="88.40202"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="8"
      x2="152"
      y2="8"
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

const Timer = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Timer.displayName = 'Timer';

export default Timer;
