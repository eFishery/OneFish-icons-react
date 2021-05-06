/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <path d="M248,88.00781a7.9954,7.9954,0,0,0-8,8v64a8,8,0,0,0,16,0v-64A7.99541,7.99541,0,0,0,248,88.00781Z" />
      <path d="M200,48.00781H48a24.02624,24.02624,0,0,0-24,24v112a24.02624,24.02624,0,0,0,24,24H200a24.02624,24.02624,0,0,0,24-24v-112A24.02625,24.02625,0,0,0,200,48.00781Zm8,136a8.01042,8.01042,0,0,1-8,8H48a8.01042,8.01042,0,0,1-8-8v-112a8.01042,8.01042,0,0,1,8-8H200a8.01042,8.01042,0,0,1,8,8Z" />
      <rect x="56" y="80.00781" width="96" height="96" rx="8" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="248"
      y1="96"
      x2="248"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="52"
      y="36"
      width="144"
      height="184"
      rx="16"
      transform="translate(252 4) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="142.4"
      y1="168.00043"
      x2="142.4"
      y2="88.00043"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="105.6"
      y1="168.00043"
      x2="105.6"
      y2="88.00043"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="68.8"
      y1="168.00043"
      x2="68.8"
      y2="88.00043"
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

const BatteryHigh = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

BatteryHigh.displayName = 'BatteryHigh';

export default BatteryHigh;
