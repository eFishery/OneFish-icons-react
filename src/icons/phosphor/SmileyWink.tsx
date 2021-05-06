/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24ZM92,96a12,12,0,1,1-12,12A12,12,0,0,1,92,96ZM176.50293,156.002a56.02857,56.02857,0,0,1-97.00586.00147,8.00024,8.00024,0,0,1,13.84961-8.0127,40.1954,40.1954,0,0,0,19.08594,16.86573,39.95953,39.95953,0,0,0,43.85156-8.57618,40.182,40.182,0,0,0,6.36914-8.29,8,8,0,0,1,13.84961,8.01172ZM180,116H148a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Z" />
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
    <path
      d="M169.57812,151.99627a48.02731,48.02731,0,0,1-83.15624.00073"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="92" cy="108" r="12" />
    <line
      x1="152"
      y1="108"
      x2="176"
      y2="108"
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

const SmileyWink = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

SmileyWink.displayName = 'SmileyWink';

export default SmileyWink;
