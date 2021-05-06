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
    <path d="M216,32V192a8.00039,8.00039,0,0,1-8,8H72a16.01833,16.01833,0,0,0-16,16H192a8,8,0,0,1,0,16H48a8.00039,8.00039,0,0,1-8-8V56A32.03667,32.03667,0,0,1,72,24H208A8.00039,8.00039,0,0,1,216,32Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M48,216a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="48 216 48 224 192 224" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Book = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Book.displayName = "Book";

export default Book;
