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
    <rect x="24.00781" y="72" width="176" height="144" rx="16"/>
    <path d="M216.00781,40h-152a8,8,0,0,0,0,16h152V176a8,8,0,0,0,16,0V56A16.01833,16.01833,0,0,0,216.00781,40Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="32.00781" y="80.00005" width="160" height="128" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M64.00781,48.00005h152a8,8,0,0,1,8,8V176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Cards = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Cards.displayName = "Cards";

export default Cards;
