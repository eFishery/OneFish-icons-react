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
    <path d="M213.38184,221.91943a8.00088,8.00088,0,0,1-11.30176-.53808L168.09717,184H136v56a8,8,0,0,1-16,0V184H56.1543c-.04883.001-.09668.00146-.14453.00146-.04883,0-.09668-.00048-.14551-.00146H40a8,8,0,0,1,0-16h9.28809L66.2373,71.95459,42.08008,45.38135a8.00027,8.00027,0,0,1,11.83984-10.7627l75.21729,82.739,48.41943,53.261.002.00293,36.36133,39.99707A8.00084,8.00084,0,0,1,213.38184,221.91943Zm-22.88672-60.85254a8,8,0,0,0,13.79785-6.77148L185.53516,48H192a8,8,0,0,0,0-16H91.19922a8.00042,8.00042,0,0,0-7.94043,7.54443c-.01367.24073-.0166.48194-.00879.72217a7.97263,7.97263,0,0,0,2.09863,5.13916Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="91.24627" y1="40" x2="192" y2="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="176" x2="128" y2="240" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="48" y1="40" x2="208" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="176" y1="40" x2="196.41513" y2="155.68575" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="171.63638" y1="176" x2="40" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="56" y1="176" x2="74.79803" y2="69.47783" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const PushPinSimpleSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

PushPinSimpleSlash.displayName = "PushPinSimpleSlash";

export default PushPinSimpleSlash;
