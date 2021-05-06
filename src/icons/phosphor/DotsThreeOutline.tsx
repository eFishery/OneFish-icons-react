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
    <path d="M156,128a28,28,0,1,1-28-28A28.02769,28.02769,0,0,1,156,128ZM48,100a28,28,0,1,0,28,28A28.02769,28.02769,0,0,0,48,100Zm160,0a28,28,0,1,0,28,28A28.02769,28.02769,0,0,0,208,100Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="128" cy="128" r="24" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <circle cx="48" cy="128" r="24" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <circle cx="208" cy="128" r="24" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const DotsThreeOutline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

DotsThreeOutline.displayName = "DotsThreeOutline";

export default DotsThreeOutline;
