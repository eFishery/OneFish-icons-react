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
    <path d="M229.64746,218.34033l-43.2229-43.22284a92.11133,92.11133,0,1,0-11.31445,11.31342l43.2229,43.2229a8.00018,8.00018,0,1,0,11.31445-11.31348ZM147.99609,124h-24v24a8,8,0,0,1-16,0V124h-24a8,8,0,1,1,0-16h24V84a8,8,0,0,1,16,0v24h24a8,8,0,0,1,0,16Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="84" y1="116" x2="148" y2="116" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="116" y1="84" x2="116" y2="148" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="116" cy="115.99609" r="84" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="175.39356" y1="175.39649" x2="223.99414" y2="223.99707" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const MagnifyingGlassPlus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

MagnifyingGlassPlus.displayName = "MagnifyingGlassPlus";

export default MagnifyingGlassPlus;
