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
    <path d="M181.65674,122.34277l-80-80A8.0001,8.0001,0,0,0,88,48V208a8.00018,8.00018,0,0,0,13.65674,5.65723l80-80A8.00034,8.00034,0,0,0,181.65674,122.34277Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <polyline points="96 48 176 128 96 208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CaretRight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

CaretRight.displayName = "CaretRight";

export default CaretRight;
