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
    <path d="M148,24H108A64.07239,64.07239,0,0,0,44,88v80a64.07239,64.07239,0,0,0,64,64h40a64.07239,64.07239,0,0,0,64-64V88A64.07239,64.07239,0,0,0,148,24Zm48,64v16H136V40h12A48.05468,48.05468,0,0,1,196,88ZM108,40h12v64H60V88A48.05468,48.05468,0,0,1,108,40Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="52" y="32" width="152" height="192" rx="56" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="52" y1="112" x2="204" y2="112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="112" x2="128.00007" y2="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Mouse = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Mouse.displayName = "Mouse";

export default Mouse;
