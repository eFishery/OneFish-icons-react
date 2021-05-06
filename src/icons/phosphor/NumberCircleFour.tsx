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
    <path d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm28,152a8,8,0,0,1-16,0V152H100a7.99995,7.99995,0,0,1-7.54395-10.66211l23.998-68A7.99987,7.99987,0,1,1,131.542,78.66211L111.30664,136H140V112a8,8,0,0,1,16,0Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <polyline points="123.998 76 100 144 148 144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="148" y1="112" x2="148" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const NumberCircleFour = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

NumberCircleFour.displayName = "NumberCircleFour";

export default NumberCircleFour;
