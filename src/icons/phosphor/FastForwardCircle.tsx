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
    <path d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24Zm68.4375,110.65625-48,32A8.00016,8.00016,0,0,1,136,160V128a7.99943,7.99943,0,0,1-3.5625,6.65625l-48,32A8.00016,8.00016,0,0,1,72,160V96a8.00016,8.00016,0,0,1,12.4375-6.65625l48,32A7.99943,7.99943,0,0,1,136,128V96a8.00016,8.00016,0,0,1,12.4375-6.65625l48,32a7.99959,7.99959,0,0,1,0,13.3125Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="80 160 128 128 80 96 80 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="144 160 192 128 144 96 144 160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const FastForwardCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

FastForwardCircle.displayName = "FastForwardCircle";

export default FastForwardCircle;
