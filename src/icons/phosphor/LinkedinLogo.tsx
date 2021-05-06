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
    <path d="M208,32H48A16.01833,16.01833,0,0,0,32,48V208a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,208,32ZM96,176.00094a8,8,0,0,1-16,0v-64a8,8,0,0,1,16,0Zm-8-84a12,12,0,1,1,12-12A12,12,0,0,1,88,92.00094Zm96,84a8,8,0,0,1-16,0v-36a20,20,0,1,0-40,0v36a8,8,0,0,1-16,0v-64a7.99729,7.99729,0,0,1,15.79492-1.77856A35.98123,35.98123,0,0,1,184,140.00094Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="120" y1="112.00094" x2="120" y2="176.00094" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="112.00094" x2="88" y2="176.00094" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M120,140.00094a28,28,0,1,1,56,0v36" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="88" cy="79.99998" r="12"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const LinkedinLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

LinkedinLogo.displayName = "LinkedinLogo";

export default LinkedinLogo;
