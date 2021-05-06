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
    <path d="M198.12305,28.53186a15.95339,15.95339,0,0,0-17.4375,3.46826L16.001,196.68616a15.99933,15.99933,0,0,0,11.3125,27.314H192a16.018,16.018,0,0,0,16-16V43.3136A15.95222,15.95222,0,0,0,198.12305,28.53186Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="160" y1="64" x2="160" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M200,43.31371V208a8,8,0,0,1-8,8H27.31371a8,8,0,0,1-5.65686-13.65685l164.6863-164.6863A8,8,0,0,1,200,43.31371Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="120" y1="104" x2="120" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="80" y1="144" x2="80" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CellSignalFull = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

CellSignalFull.displayName = "CellSignalFull";

export default CellSignalFull;
