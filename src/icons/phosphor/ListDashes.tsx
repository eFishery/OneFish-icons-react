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
    <path d="M88,64a8.00008,8.00008,0,0,1,8-8H216a8,8,0,0,1,0,16H96A8.00008,8.00008,0,0,1,88,64Zm128,56H96.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Zm0,64H96.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16ZM56,56H40a8,8,0,0,0,0,16H56a8,8,0,0,0,0-16Zm0,64H40.00586a8,8,0,1,0,0,16H56a8,8,0,0,0,0-16Zm0,64H40.00586a8,8,0,1,0,0,16H56a8,8,0,0,0,0-16Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="96" y1="64" x2="216" y2="64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="96.00614" y1="128" x2="216" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="96.00614" y1="192" x2="216" y2="192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="40" y1="64" x2="56" y2="64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="40.00614" y1="128" x2="56" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="40.00614" y1="192" x2="56" y2="192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ListDashes = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

ListDashes.displayName = "ListDashes";

export default ListDashes;
