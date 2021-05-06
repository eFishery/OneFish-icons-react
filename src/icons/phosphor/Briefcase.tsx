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
    <path d="M216.00781,64H176V56a24.0275,24.0275,0,0,0-24-24H104A24.0275,24.0275,0,0,0,80,56v8H40.00781a16.01833,16.01833,0,0,0-16,16V208a16.01833,16.01833,0,0,0,16,16h176a16.01833,16.01833,0,0,0,16-16V80A16.01833,16.01833,0,0,0,216.00781,64ZM96,56a8.00917,8.00917,0,0,1,8-8h48a8.00917,8.00917,0,0,1,8,8v8H96ZM216.00781,80l.00318,41.606A184.00072,184.00072,0,0,1,128,144a184.00068,184.00068,0,0,1-87.99219-22.38428V80ZM108,120a8.00039,8.00039,0,0,1,8-8h24a8,8,0,0,1,0,16H116A8.00039,8.00039,0,0,1,108,120Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="32.00781" y="72.00005" width="192" height="144" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M168,72V56a16,16,0,0,0-16-16H104A16,16,0,0,0,88,56V72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M224.00806,126.30915A191.11647,191.11647,0,0,1,128,152a191.11667,191.11667,0,0,1-95.99345-25.68239" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="116" y1="120" x2="140" y2="120" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Briefcase = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Briefcase.displayName = "Briefcase";

export default Briefcase;
