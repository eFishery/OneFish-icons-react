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
    <g>
    <path d="M120,128a8.00063,8.00063,0,0,0-2.68506-5.97949l-72-64a8.00018,8.00018,0,0,0-10.62988,11.959L99.9585,128,34.68506,186.02051a8.00018,8.00018,0,0,0,10.62988,11.959l72-64A8.00063,8.00063,0,0,0,120,128Z"/>
    <path d="M215.99414,184h-96a8,8,0,0,0,0,16h96a8,8,0,1,0,0-16Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <polyline points="40 64 112 128 40 192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="119.99414" y1="192" x2="215.99414" y2="192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Terminal = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Terminal.displayName = "Terminal";

export default Terminal;
