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
    <path d="M256,96.00012v64a8,8,0,1,1-16,0v-64a8,8,0,1,1,16,0Zm-32-24v112a24.0275,24.0275,0,0,1-24,24H48a24.0275,24.0275,0,0,1-24-24v-112a24.0275,24.0275,0,0,1,24-24H200A24.0275,24.0275,0,0,1,224,72.00012Zm-108,56a8,8,0,0,0,16,0v-40a8,8,0,1,0-16,0Zm20,36a12,12,0,1,0-12,12A12.01375,12.01375,0,0,0,136,164.00012Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="124" y1="88" x2="124" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="248" y1="96" x2="248" y2="160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="52" y="36" width="144" height="184" rx="16" transform="translate(252 4) rotate(90)" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <circle cx="124" cy="164" r="12"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const BatteryWarning = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

BatteryWarning.displayName = "BatteryWarning";

export default BatteryWarning;
