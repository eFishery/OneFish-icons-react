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
    <path d="M224,216a7.99977,7.99977,0,0,1-8,8H40a8,8,0,0,1,0-16H216A7.99977,7.99977,0,0,1,224,216Zm-96-24a72.0814,72.0814,0,0,0,72-72V56a8,8,0,0,0-16,0v64a56,56,0,0,1-112,0V56a8,8,0,0,0-16,0v64A72.0814,72.0814,0,0,0,128,192Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="40" y1="216" x2="216" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M64,56v64a64,64,0,0,0,128,0V56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const TextUnderline = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

TextUnderline.displayName = "TextUnderline";

export default TextUnderline;
