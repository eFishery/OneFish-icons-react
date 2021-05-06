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
    <path d="M213.91992,210.61865a8.00027,8.00027,0,0,1-11.83984,10.7627l-26.42334-29.06543c-2.45459,14.17285-9.88623,26.21582-15.37451,33.51123a15.96882,15.96882,0,0,1-11.64649,6.33056q-.5625.03955-1.124.03956a16.0039,16.0039,0,0,1-11.31934-4.69141L88,179.314,53.65723,213.65674a8.00018,8.00018,0,0,1-11.31446-11.31348L76.686,168,28.2959,119.60986a16.01339,16.01339,0,0,1,1.2832-23.78613c16.17676-13.05029,31.90967-16.16064,43.96-15.8374l-31.459-34.605a8.00027,8.00027,0,0,1,11.83984-10.7627ZM232,84.68652,171.31348,23.999A16.02162,16.02162,0,0,0,148.68555,24L110.71,61.97607a8.00034,8.00034,0,0,0-.26269,11.03809l68.57128,75.42871a8.00133,8.00133,0,0,0,5.7295,2.61621c.06347.00147.12695.00244.19043.00244a8.00139,8.00139,0,0,0,5.65722-2.34326L231.999,107.31445A15.99888,15.99888,0,0,0,232,84.68652Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="88" y1="168" x2="48" y2="208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="48" y1="40" x2="208" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M93.71428,90.28572,92,92S64.256,78.128,34.60125,102.05044a8.01406,8.01406,0,0,0-.64838,11.90243L141.84933,221.84933a7.99324,7.99324,0,0,0,12.04036-.83167c7.60268-10.10523,19.13532-29.87219,12.71834-50.549" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M184.9386,143.0614l41.40455-41.40455a8,8,0,0,0,0-11.3137l-60.6863-60.6863a8,8,0,0,0-11.3137,0l-37.976,37.976" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const PushPinSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

PushPinSlash.displayName = "PushPinSlash";

export default PushPinSlash;
