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
    <path d="M147.314,136H208a8.0001,8.0001,0,0,0,5.65674-13.65723l-80-80a8.00182,8.00182,0,0,0-11.31348,0l-80,80A8.0001,8.0001,0,0,0,48,136h60.686L42.34326,202.34277A8.0001,8.0001,0,0,0,48,216H208a8.0001,8.0001,0,0,0,5.65674-13.65723Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <polyline points="48 208 128 128 208 208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="48 128 128 48 208 128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CaretDoubleUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

CaretDoubleUp.displayName = "CaretDoubleUp";

export default CaretDoubleUp;
