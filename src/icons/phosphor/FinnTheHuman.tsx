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
    <path d="M176,140a12,12,0,1,1-12-12A12.01343,12.01343,0,0,1,176,140ZM92,128a12,12,0,1,0,12,12A12.01343,12.01343,0,0,0,92,128ZM240,64v80a72.08124,72.08124,0,0,1-72,72H88a72.08124,72.08124,0,0,1-72-72V64a32.00221,32.00221,0,0,1,62.98779-8h98.02442A32.00221,32.00221,0,0,1,240,64Zm-40,72a31.99971,31.99971,0,0,0-32-32H88a32,32,0,0,0-32,32v8a32.00034,32.00034,0,0,0,32,32h80a32,32,0,0,0,32-32Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="56" y="104.00002" width="144" height="72" rx="32" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M24,64a24,24,0,0,1,48,0H184a24,24,0,0,1,48,0v80a64,64,0,0,1-64,64H88a64,64,0,0,1-64-64Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="92" cy="140" r="12"/>
  <circle cx="164" cy="140" r="12"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const FinnTheHuman = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

FinnTheHuman.displayName = "FinnTheHuman";

export default FinnTheHuman;
