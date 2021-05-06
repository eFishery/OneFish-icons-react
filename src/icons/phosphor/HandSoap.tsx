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
    <path d="M184,96.80469V88a32.03667,32.03667,0,0,0-32-32H136V32h32a8.00917,8.00917,0,0,1,8,8,8,8,0,0,0,16,0,24.0275,24.0275,0,0,0-24-24H104a8,8,0,0,0,0,16h16V56H104A32.03667,32.03667,0,0,0,72,88v8.80469A40.06815,40.06815,0,0,0,40,136v80a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16V136A40.06815,40.06815,0,0,0,184,96.80469ZM104,72h48a16.01833,16.01833,0,0,1,16,16v8H88V88A16.01833,16.01833,0,0,1,104,72Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M80,104h96a32,32,0,0,1,32,32v80a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136A32,32,0,0,1,80,104Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M80,104V88a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M184,40a16,16,0,0,0-16-16H104" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="24" x2="128" y2="64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const HandSoap = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

HandSoap.displayName = "HandSoap";

export default HandSoap;
