/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M168,224.00024a8.00039,8.00039,0,0,1-8,8H96a8,8,0,1,1,0-16h64A8.0004,8.0004,0,0,1,168,224.00024Zm64-160v112a24.0275,24.0275,0,0,1-24,24H48a24.0275,24.0275,0,0,1-24-24v-112a24.0275,24.0275,0,0,1,24-24H208A24.0275,24.0275,0,0,1,232,64.00024ZM168,120a8.02148,8.02148,0,0,0-3.5625-6.65625l-48-32A7.99612,7.99612,0,0,0,104,88v64a7.99975,7.99975,0,0,0,12.4375,6.65625l48-32A8.02151,8.02151,0,0,0,168,120Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <rect
      x="32"
      y="48"
      width="192"
      height="144"
      rx="16"
      transform="translate(256 240) rotate(180)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="160"
      y1="224"
      x2="96"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polygon
      points="160 120 112 88 112 152 160 120"
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

const MonitorPlay = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

MonitorPlay.displayName = 'MonitorPlay';

export default MonitorPlay;
