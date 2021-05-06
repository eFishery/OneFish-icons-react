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
    <path d="M232,128A104,104,0,1,0,128,232,104.12041,104.12041,0,0,0,232,128ZM116,80a12,12,0,1,1,12,12A12.0006,12.0006,0,0,1,116,80Zm0,48a12,12,0,1,1,12,12A12.0006,12.0006,0,0,1,116,128Zm0,48a12,12,0,1,1,12,12A12.0006,12.0006,0,0,1,116,176Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <circle cx="128" cy="128" r="12"/>
  <circle cx="128" cy="80" r="12"/>
  <circle cx="128" cy="176" r="12"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const DotsThreeCircleVertical = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

DotsThreeCircleVertical.displayName = "DotsThreeCircleVertical";

export default DotsThreeCircleVertical;
