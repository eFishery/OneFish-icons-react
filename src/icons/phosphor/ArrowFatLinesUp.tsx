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
    <path d="M231.39111,123.06152A8.00015,8.00015,0,0,1,224,128H184v24a8.00008,8.00008,0,0,1-8,8H80a8.00008,8.00008,0,0,1-8-8V128H32a8.0001,8.0001,0,0,1-5.65674-13.65723l96-96a8.00182,8.00182,0,0,1,11.31348,0l96,96A8.00061,8.00061,0,0,1,231.39111,123.06152ZM176,208H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0-32H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <polygon points="32 120 128 24 224 120 176 120 176 152 80 152 80 120 32 120" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="176" y1="216" x2="80" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="176" y1="184" x2="80" y2="184" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ArrowFatLinesUp = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

ArrowFatLinesUp.displayName = "ArrowFatLinesUp";

export default ArrowFatLinesUp;
