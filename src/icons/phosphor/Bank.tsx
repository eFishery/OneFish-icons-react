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
    <path d="M248.00244,208a8.00039,8.00039,0,0,1-8,8h-224a8,8,0,0,1,0-16h224A8.00039,8.00039,0,0,1,248.00244,208ZM16.30518,98.17871a7.99868,7.99868,0,0,1,3.50488-8.99219l104-64a7.9998,7.9998,0,0,1,8.38476,0l104,64A8.0001,8.0001,0,0,1,232.00244,104h-24v64h16a8,8,0,0,1,0,16h-192a8,8,0,0,1,0-16h16V104h-24A7.999,7.999,0,0,1,16.30518,98.17871ZM144.00244,160a8,8,0,0,0,16,0V112a8,8,0,1,0-16,0Zm-48,0a8,8,0,0,0,16,0V112a8,8,0,0,0-16,0Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <polygon points="24.002 96 232.002 96 128.002 32 24.002 96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="56.00244" y1="96" x2="56.00244" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="104.00244" y1="96" x2="104.00244" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="152.00244" y1="96" x2="152.00244" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="200.00244" y1="96" x2="200.00244" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="32.00244" y1="176" x2="224.00244" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="16.00244" y1="208" x2="240.00244" y2="208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Bank = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Bank.displayName = "Bank";

export default Bank;
