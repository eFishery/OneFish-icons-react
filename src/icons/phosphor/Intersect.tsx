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
    <path d="M174.63477,81.36523a79.99168,79.99168,0,1,0-93.26954,93.26954,79.99168,79.99168,0,1,0,93.26954-93.26954ZM32,96A64.00385,64.00385,0,0,1,157.98779,80.05127,80.06522,80.06522,0,0,0,80.051,157.98779,64.1144,64.1144,0,0,1,32,96ZM160,224a64.11421,64.11421,0,0,1-61.98779-48.05127A80.06522,80.06522,0,0,0,175.949,98.01221,64.00389,64.00389,0,0,1,160,224Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="96" cy="96" r="72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="160" cy="160" r="72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="122.51701" y1="98.51701" x2="157.48457" y2="133.48457" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="98.51562" y1="122.51562" x2="133.48323" y2="157.48323" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Intersect = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Intersect.displayName = "Intersect";

export default Intersect;
