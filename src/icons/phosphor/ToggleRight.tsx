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
    <path d="M176,56H80a72,72,0,0,0,0,144h96a72,72,0,0,0,0-144Zm0,112a40,40,0,1,1,40-40A40.00006,40.00006,0,0,1,176,168Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="16.00006" y="64" width="223.99987" height="128" rx="63.99994" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <circle cx="176" cy="128" r="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ToggleRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

ToggleRight.displayName = "ToggleRight";

export default ToggleRight;
