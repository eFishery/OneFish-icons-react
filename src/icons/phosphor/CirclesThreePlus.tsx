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
    <circle cx="76" cy="76" r="44"/>
    <circle cx="180" cy="76" r="44"/>
    <circle cx="76" cy="180" r="44"/>
    <path d="M208,172H188V152a8,8,0,0,0-16,0v20H152a8,8,0,0,0,0,16h20v20a8,8,0,0,0,16,0V188h20a8,8,0,0,0,0-16Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="76" cy="76" r="36" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="180" cy="76" r="36" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="76" cy="180" r="36" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="180" y1="152" x2="180" y2="208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="208" y1="180" x2="152" y2="180" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CirclesThreePlus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

CirclesThreePlus.displayName = "CirclesThreePlus";

export default CirclesThreePlus;
