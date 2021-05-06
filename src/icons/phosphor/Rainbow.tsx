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
    <path d="M184,168v16a8,8,0,0,1-16,0V168a40,40,0,0,0-80,0v16a8,8,0,0,1-16,0V168a56,56,0,0,1,112,0ZM128,80a88.09957,88.09957,0,0,0-88,88v16a8,8,0,0,0,16,0V168a72,72,0,0,1,144,0v16a8,8,0,0,0,16,0V168A88.09957,88.09957,0,0,0,128,80Zm0-32A120.13623,120.13623,0,0,0,8,168v16a8,8,0,0,0,16,0V168a104,104,0,0,1,208,0v16a8,8,0,0,0,16,0V168A120.13623,120.13623,0,0,0,128,48Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M176,184V168a48,48,0,0,0-96,0v16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M208,184V168a80,80,0,0,0-160,0v16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M240,184V168a112,112,0,0,0-224,0v16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Rainbow = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Rainbow.displayName = "Rainbow";

export default Rainbow;
