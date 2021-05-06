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
    <path d="M188.29883,43.31128a8.00224,8.00224,0,0,0-1.35889-.94751,103.67838,103.67838,0,1,0,1.35889.94751ZM128,152a24,24,0,1,1,24-24A24.0275,24.0275,0,0,1,128,152Zm88-24c0,2.47168-.10791,4.91833-.30859,7.339l-47.71875-8.41419a39.84182,39.84182,0,0,0-10.95777-26.41552l27.77808-39.671A87.83762,87.83762,0,0,1,216,128Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="128" r="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="224" y1="128" x2="160" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="195.88225" y1="60.11775" x2="150.62742" y2="105.37258" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Disc = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Disc.displayName = "Disc";

export default Disc;
