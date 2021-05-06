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
    <path d="M216.00781,40h-144a16.01818,16.01818,0,0,0-16,16V72h-16a16.01818,16.01818,0,0,0-16,16v23.84521c-.001.052-.00781.10254-.00781.15479s.00684.10278.00781.15479V200a16.01833,16.01833,0,0,0,16,16h144a16.01833,16.01833,0,0,0,16-16V184h16a16.01833,16.01833,0,0,0,16-16V56A16.01817,16.01817,0,0,0,216.00781,40Zm-32,48,.00147,16H40.00781V88Zm32,80h-16V88a16.01817,16.01817,0,0,0-16-16h-112V56h144Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="32.00781" y="80.00005" width="160" height="128" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M64.00781,80.00005v-24a8,8,0,0,1,8-8h144a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8h-24" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="32" y1="112" x2="192" y2="112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Browsers = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Browsers.displayName = "Browsers";

export default Browsers;
