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
    <path d="M232,56H24A16.01833,16.01833,0,0,0,8,72V184a16.01833,16.01833,0,0,0,16,16H232a16.01833,16.01833,0,0,0,16-16V72A16.01833,16.01833,0,0,0,232,56ZM74.95947,184,24,140.32056V115.67944L74.95947,72H181.04053l50.96338,43.68262.002,24.63281L181.04053,184ZM168,128a40,40,0,1,1-40-40A40.04584,40.04584,0,0,1,168,128Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="16" y="64" width="224" height="128" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <circle cx="128" cy="128" r="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="176" y1="64" x2="240" y2="120" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="176" y1="192" x2="240" y2="136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="80" y1="64" x2="16" y2="120" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="80" y1="192" x2="16" y2="136" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Money = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Money.displayName = "Money";

export default Money;
