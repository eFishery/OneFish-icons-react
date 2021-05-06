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
    <path d="M160.001,40A88.102,88.102,0,0,0,81.28809,88.6709l-.00538-.00049A87.46336,87.46336,0,0,0,71.98926,128a8,8,0,0,1-16,0,103.43674,103.43674,0,0,1,7.78-39.45264A63.99161,63.99161,0,0,0,72.001,216h88a88,88,0,0,0,0-176Zm37.65576,81.65674-48,48a7.99945,7.99945,0,0,1-11.31348,0l-24-24a7.99984,7.99984,0,0,1,11.31348-11.31348L144,152.68652l42.34326-42.34326a7.99984,7.99984,0,0,1,11.31348,11.31348Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.91924,97.74352" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="192 116 144 164 120 140" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CloudCheck = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

CloudCheck.displayName = "CloudCheck";

export default CloudCheck;
