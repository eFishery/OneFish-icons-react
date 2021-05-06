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
    <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm36,136a7.99975,7.99975,0,0,1-12.4375,6.65625L108,137.61426V160a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0v22.38574l43.5625-29.042A7.99612,7.99612,0,0,1,164,96Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <polygon points="108 128 156 96 156 160 108 128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="100" y1="96" x2="100" y2="160" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const SkipBackCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

SkipBackCircle.displayName = "SkipBackCircle";

export default SkipBackCircle;
