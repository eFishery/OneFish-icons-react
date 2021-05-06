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
    <path d="M200,32.00586H184v-8a8,8,0,1,0-16,0v8H136v-8a8,8,0,1,0-16,0v8H88v-8a8,8,0,0,0-16,0v8H56a16.01833,16.01833,0,0,0-16,16v152a32.03667,32.03667,0,0,0,32,32H184a32.03667,32.03667,0,0,0,32-32v-152A16.01833,16.01833,0,0,0,200,32.00586Zm-40,136H96a8,8,0,1,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,1,1,0-16h64a8,8,0,0,1,0,16Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="96" y1="128.00586" x2="160" y2="128.00586" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="96" y1="160.00586" x2="160" y2="160.00586" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M56,40.00586H200a8,8,0,0,1,8,8v152a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24v-152A8,8,0,0,1,56,40.00586Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="80" y1="24.00586" x2="80" y2="56.00586" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="24.00586" x2="128" y2="56.00586" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="176" y1="24.00586" x2="176" y2="56.00586" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Notepad = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Notepad.displayName = "Notepad";

export default Notepad;
