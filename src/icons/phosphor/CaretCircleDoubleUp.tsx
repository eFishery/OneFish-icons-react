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
    <path d="M201.53906,201.53906a103.95314,103.95314,0,1,0-147.07812,0A104.12262,104.12262,0,0,0,201.53906,201.53906Zm-99.88281-83.88281a7.99915,7.99915,0,1,1-11.3125-11.3125l32-32a7.99708,7.99708,0,0,1,11.3125,0l32,32a7.99915,7.99915,0,0,1-11.3125,11.3125L128,91.3125Zm0,56a7.99915,7.99915,0,1,1-11.3125-11.3125l32-32a7.99708,7.99708,0,0,1,11.3125,0l32,32a7.99915,7.99915,0,0,1-11.3125,11.3125L128,147.3125Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="96 168 128 136 160 168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="96 112 128 80 160 112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CaretCircleDoubleUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

CaretCircleDoubleUp.displayName = "CaretCircleDoubleUp";

export default CaretCircleDoubleUp;
