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
    <path d="M216,40.00586H40a16.01833,16.01833,0,0,0-16,16v144a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16v-144A16.01833,16.01833,0,0,0,216,40.00586Zm-148,56a12,12,0,1,1,12-12A12,12,0,0,1,68,96.00586Zm40,0a12,12,0,1,1,12-12A12,12,0,0,1,108,96.00586Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="32" y="48.00586" width="192" height="160" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <circle cx="68" cy="84.00586" r="12"/>
  <circle cx="108" cy="84.00586" r="12"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const AppWindow = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

AppWindow.displayName = "AppWindow";

export default AppWindow;
