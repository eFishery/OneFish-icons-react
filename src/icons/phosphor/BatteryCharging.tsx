/* GENERATED FILE */
import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../../lib";
import IconBase, { RenderFunction } from "../../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set("fill", () => (
  <>
    <g>
    <path d="M248,88a8.00008,8.00008,0,0,0-8,8v64a8,8,0,0,0,16,0V96A8.00008,8.00008,0,0,0,248,88Z"/>
    <path d="M200,47.99805H48a24.02624,24.02624,0,0,0-24,24v112a24.02624,24.02624,0,0,0,24,24H200a24.02625,24.02625,0,0,0,24-24v-112A24.02624,24.02624,0,0,0,200,47.99805ZM147.42187,130.9668l-16,40a7.99361,7.99361,0,1,1-14.84375-5.9375l11.60938-29.03125H108a7.99271,7.99271,0,0,1-7.42188-10.96875l16-40a7.99361,7.99361,0,1,1,14.84375,5.9375L119.8125,119.99805H140a7.9927,7.9927,0,0,1,7.42187,10.96875Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="248" y1="96" x2="248" y2="160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="52" y="36" width="144" height="184" rx="16" transform="translate(252 4) rotate(90)" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <polyline points="124 168 140 128 108 128 124 88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const BatteryCharging = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

BatteryCharging.displayName = "BatteryCharging";

export default BatteryCharging;
