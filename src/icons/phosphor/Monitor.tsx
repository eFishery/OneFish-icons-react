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
    <rect x="24" y="40.0002" width="208" height="160" rx="24"/>
    <path d="M160,216.0002H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="32" y="48" width="192" height="144" rx="16" transform="translate(256 240) rotate(180)" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="160" y1="224" x2="96" y2="224" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Monitor = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Monitor.displayName = "Monitor";

export default Monitor;
