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
    <path d="M219.31445,79.99963,176.001,36.68811a15.88944,15.88944,0,0,0-11.31446-4.68848h-60.687L104,32.0094v48h56a8,8,0,0,1,0,16H96a8.00039,8.00039,0,0,1-8-8v-56l.00049-.00977H48a16.01833,16.01833,0,0,0-16,16v160a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V91.31409A15.898,15.898,0,0,0,219.31445,79.99963ZM128,180a24,24,0,1,1,24-24A24.02675,24.02675,0,0,1,128,180Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M216,91.31371V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.68629a8,8,0,0,1,5.65686,2.34315l43.3137,43.3137A8,8,0,0,1,216,91.31371Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128.00586" cy="156.00903" r="28" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="160 96.009 96 96.009 96 40.009" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const FloppyDisk = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

FloppyDisk.displayName = "FloppyDisk";

export default FloppyDisk;
