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
    <path d="M216,48H56A16.01833,16.01833,0,0,0,40,64V184a8,8,0,0,1-16,0V88A8,8,0,0,0,8,88v96.10645A24.02715,24.02715,0,0,0,32,208H208a24.0275,24.0275,0,0,0,24-24V64A16.01833,16.01833,0,0,0,216,48ZM176,152H96a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="96" y1="112" x2="176" y2="112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="96" y1="144" x2="176" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M32,200a16,16,0,0,0,16-16V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a16,16,0,0,1-16,16Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M32,200a16,16,0,0,1-16-16V88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Newspaper = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Newspaper.displayName = "Newspaper";

export default Newspaper;
