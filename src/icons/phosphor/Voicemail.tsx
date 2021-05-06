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
    <path d="M200,72a55.96339,55.96339,0,0,0-39.13867,96H95.13867A55.96225,55.96225,0,1,0,56,184H200a56,56,0,0,0,0-112ZM16,128a40,40,0,1,1,40,40A40.04584,40.04584,0,0,1,16,128Zm184,40a40,40,0,1,1,40-40A40.04584,40.04584,0,0,1,200,168Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="56" cy="128" r="48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="200" cy="128" r="48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="56" y1="176" x2="200" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Voicemail = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Voicemail.displayName = "Voicemail";

export default Voicemail;
