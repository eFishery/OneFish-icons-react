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
    <path d="M120,200H72a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm64-16H160a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm-24,32H104a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16ZM156,16A76.13113,76.13113,0,0,0,85.03711,64.7832,52.0037,52.0037,0,1,0,76,168h80a76,76,0,0,0,0-152Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="120" y1="192" x2="72" y2="192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="184" y1="192" x2="160" y2="192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="160" y1="224" x2="104" y2="224" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M88,92a68,68,0,1,1,68,68H76A44,44,0,1,1,90.30583,74.37792" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CloudFog = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

CloudFog.displayName = "CloudFog";

export default CloudFog;
