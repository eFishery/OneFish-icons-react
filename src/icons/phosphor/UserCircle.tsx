/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <circle cx="128" cy="120" r="44" />
      <path d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm65.75806,162.41016a79.70266,79.70266,0,0,0-24.43091-22.97461,59.83641,59.83641,0,0,1-82.6543,0A79.7048,79.7048,0,0,0,62.2417,186.41016a88.00015,88.00015,0,1,1,131.51636,0Z" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16" />
    <circle cx="128" cy="120" r="40" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16" />
    <path
      d="M63.79905,199.37405a72.02812,72.02812,0,0,1,128.40177-.00026"
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

const UserCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

UserCircle.displayName = 'UserCircle';

export default UserCircle;
