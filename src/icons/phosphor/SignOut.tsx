/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M221.65723,133.65625l-41.98828,42a8.00018,8.00018,0,0,1-11.31543-11.3125L196.68994,136H104a8,8,0,0,1,0-16h92.68994L168.35352,91.65625A8.00018,8.00018,0,0,1,179.669,80.34375l41.98828,42A7.99974,7.99974,0,0,1,221.65723,133.65625ZM104,208H48V48h56a8,8,0,0,0,0-16H48A16.01833,16.01833,0,0,0,32,48V208a16.01833,16.01833,0,0,0,16,16h56a8,8,0,0,0,0-16Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <polyline
      points="174.011 86 216 128 174.011 170"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="128"
      x2="215.97057"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56"
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

const SignOut = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

SignOut.displayName = 'SignOut';

export default SignOut;
