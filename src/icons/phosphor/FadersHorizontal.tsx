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
    <path d="M135.999,163.99353h-96a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"/>
    <path d="M215.999,163.99353h-40v-16a8,8,0,0,0-16,0v48a8,8,0,0,0,16,0v-16h40a8,8,0,0,0,0-16Z"/>
    <path d="M39.999,91.99255l32,.001a8,8,0,0,0,0-16l-32-.001a8,8,0,0,0,0,16Z"/>
    <path d="M103.999,115.99353a8.00039,8.00039,0,0,0,8-8v-16l104-.001a8,8,0,1,0,0-16l-104,.001v-16a8,8,0,1,0-16,0v48A8.00039,8.00039,0,0,0,103.999,115.99353Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="135.99902" y1="171.99304" x2="39.99902" y2="171.99317" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="215.99902" y1="171.99317" x2="167.99902" y2="171.99304" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="71.99902" y1="83.99304" x2="39.99902" y2="83.99246" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="215.99902" y1="83.99246" x2="103.99902" y2="83.99304" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="103.99902" y1="59.99304" x2="103.99902" y2="107.99304" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="167.99902" y1="195.99304" x2="167.99902" y2="147.99304" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const FadersHorizontal = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

FadersHorizontal.displayName = "FadersHorizontal";

export default FadersHorizontal;
