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
    <path d="M204,36H52A16.01833,16.01833,0,0,0,36,52V204a16.01833,16.01833,0,0,0,16,16H204a16.01833,16.01833,0,0,0,16-16V52A16.01833,16.01833,0,0,0,204,36ZM52,52h76V204H52Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="44" y="44" width="168" height="168" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="128" y1="44" x2="128" y2="212" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="139.99414" y1="44" x2="212" y2="116.00586" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="127.99998" y1="88.00584" x2="212" y2="172.00586" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="127.99998" y1="144.00584" x2="195.99414" y2="212" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const SquareHalf = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

SquareHalf.displayName = "SquareHalf";

export default SquareHalf;
