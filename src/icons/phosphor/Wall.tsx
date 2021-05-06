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
    <path d="M136,92h96V56a8.00008,8.00008,0,0,0-8-8H136Z"/>
    <rect x="184" y="108" width="48" height="44"/>
    <rect x="88" y="108" width="80" height="44"/>
    <rect x="24" y="108" width="48" height="44"/>
    <path d="M136,168v40h88a8.00008,8.00008,0,0,0,8-8V168Z"/>
    <path d="M120,92V48H32a8.00008,8.00008,0,0,0-8,8V92Z"/>
    <path d="M120,168H24v32a8.00008,8.00008,0,0,0,8,8h88Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="128" y1="104" x2="128" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="80" y1="152" x2="80" y2="104" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="176" y1="152" x2="176" y2="104" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="200" x2="128" y2="152" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="32" y1="104" x2="224" y2="104" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="32" y1="152" x2="224" y2="152" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="32" y="56" width="192" height="144" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Wall = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Wall.displayName = "Wall";

export default Wall;
