/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm36,72a12,12,0,1,1-12,12A12,12,0,0,1,164,96ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96Zm88.99756,82.24707a8.00032,8.00032,0,0,1-11.24463-1.24951L160,164.80615l-9.75293,12.19141a8.00025,8.00025,0,0,1-12.49414,0L128,164.80615l-9.75293,12.19141a8.00025,8.00025,0,0,1-12.49414,0L96,164.80615l-9.75293,12.19141a8.00009,8.00009,0,0,1-12.49414-9.99512l16-20a8.00025,8.00025,0,0,1,12.49414,0L112,159.19385l9.75293-12.19141a8.00025,8.00025,0,0,1,12.49414,0L144,159.19385l9.75293-12.19141a8.00025,8.00025,0,0,1,12.49414,0l16,20A8.00036,8.00036,0,0,1,180.99756,178.24707Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16" />
    <polyline
      points="80 172 96 152 112 172 128 152 144 172 160 152 176 172"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="92" cy="108" r="12" />
    <circle cx="164" cy="108" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const SmileyNervous = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

SmileyNervous.displayName = 'SmileyNervous';

export default SmileyNervous;
