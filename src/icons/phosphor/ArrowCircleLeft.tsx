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
    <path d="M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm40,112H107.3125l20.28125,20.28125a7.99915,7.99915,0,1,1-11.3125,11.3125L82.35352,133.666a8.02367,8.02367,0,0,1,0-11.332l33.92773-33.92773a7.99915,7.99915,0,0,1,11.3125,11.3125L107.3125,120H168a8,8,0,0,1,0,16Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <polyline points="121.941 161.941 88 128 121.941 94.059" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="128" x2="168" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ArrowCircleLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

ArrowCircleLeft.displayName = "ArrowCircleLeft";

export default ArrowCircleLeft;
