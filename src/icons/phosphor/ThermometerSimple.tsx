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
    <path d="M168,143.27441V48a40,40,0,0,0-80,0v95.27441a60,60,0,1,0,80,0ZM128,24a24.02718,24.02718,0,0,1,24,24V80H104V48A24.02718,24.02718,0,0,1,128,24Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M96,147.02548V48a32,32,0,0,1,64,0v99.02548l.00787-.01006a52,52,0,1,1-64.01574,0Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="188" r="20" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="168" x2="128" y2="88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ThermometerSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

ThermometerSimple.displayName = "ThermometerSimple";

export default ThermometerSimple;
