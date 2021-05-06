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
    <path d="M192,24H64A24.0275,24.0275,0,0,0,40,48V208a24.0275,24.0275,0,0,0,24,24H192a24.0275,24.0275,0,0,0,24-24V48A24.0275,24.0275,0,0,0,192,24ZM64,40H192a8.00917,8.00917,0,0,1,8,8v8H56V48A8.00917,8.00917,0,0,1,64,40ZM192,216H64a8.00917,8.00917,0,0,1-8-8v-8H200v8A8.00917,8.00917,0,0,1,192,216Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="32" y="48" width="192" height="160" rx="16" transform="translate(256) rotate(90)" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="48" y1="64" x2="208" y2="64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="48" y1="192" x2="208" y2="192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const DeviceTablet = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

DeviceTablet.displayName = "DeviceTablet";

export default DeviceTablet;
