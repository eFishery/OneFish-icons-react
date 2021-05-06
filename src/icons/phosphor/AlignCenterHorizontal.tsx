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
    <path d="M224,152v40a16.01833,16.01833,0,0,1-16,16H136v15.99512a8,8,0,0,1-16,0V208H48a16.01833,16.01833,0,0,1-16-16V152a16.01833,16.01833,0,0,1,16-16h72V120H72a16.01833,16.01833,0,0,1-16-16V64A16.01833,16.01833,0,0,1,72,48h48V31.99512a8,8,0,1,1,16,0V48h48a16.01833,16.01833,0,0,1,16,16v40a16.01833,16.01833,0,0,1-16,16H136v16h72A16.01833,16.01833,0,0,1,224,152Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="128" y1="31.99512" x2="128" y2="55.99512" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="199.99512" x2="128" y2="223.99512" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="111.99512" x2="128" y2="143.99512" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="64" y="56" width="128" height="56" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="40" y="144" width="176" height="56" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const AlignCenterHorizontal = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

AlignCenterHorizontal.displayName = "AlignCenterHorizontal";

export default AlignCenterHorizontal;
