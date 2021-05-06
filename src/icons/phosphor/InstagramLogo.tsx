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
    <circle cx="128" cy="128" r="32"/>
    <path d="M172,28H84A56.06353,56.06353,0,0,0,28,84v88a56.06353,56.06353,0,0,0,56,56h88a56.06353,56.06353,0,0,0,56-56V84A56.06353,56.06353,0,0,0,172,28ZM128,176a48,48,0,1,1,48-48A48.05436,48.05436,0,0,1,128,176Zm52-88a12,12,0,1,1,12-12A12,12,0,0,1,180,88Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="128" cy="128" r="40" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <rect x="36" y="36" width="184" height="184" rx="48" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <circle cx="180" cy="75.99998" r="12"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const InstagramLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

InstagramLogo.displayName = "InstagramLogo";

export default InstagramLogo;
