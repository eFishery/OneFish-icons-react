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
    <path d="M192,24H64A16.01833,16.01833,0,0,0,48,40V216a16.01833,16.01833,0,0,0,16,16H192a16.01833,16.01833,0,0,0,16-16V40A16.01833,16.01833,0,0,0,192,24ZM128,192a12,12,0,1,1,12-12A12.01343,12.01343,0,0,1,128,192Zm32-80H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="160" y1="72" x2="96" y2="72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="160" y1="104" x2="96" y2="104" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="32" y="56" width="192" height="144" rx="8" transform="translate(256 0) rotate(90)" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <circle cx="128" cy="180" r="12"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ComputerTower = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

ComputerTower.displayName = "ComputerTower";

export default ComputerTower;
