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
    <path d="M128,24A104,104,0,1,0,232,128,104.11791,104.11791,0,0,0,128,24ZM40,128a88.11715,88.11715,0,0,1,80-87.63257V215.63257A88.11715,88.11715,0,0,1,40,128Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="32" x2="128" y2="224" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="127.99998" y1="48.00584" x2="222.85577" y2="142.86163" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128.00002" y1="104.00588" x2="206.81368" y2="182.81953" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128.00002" y1="160.00588" x2="177.97522" y2="209.98108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CircleHalf = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

CircleHalf.displayName = "CircleHalf";

export default CircleHalf;
