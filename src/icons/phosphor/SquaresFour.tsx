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
    <rect x="40" y="40" width="80" height="80" rx="8"/>
    <rect x="136" y="40" width="80" height="80" rx="8"/>
    <rect x="40" y="136" width="80" height="80" rx="8"/>
    <rect x="136" y="136" width="80" height="80" rx="8"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="48" y="48" width="64" height="64" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="144" y="48" width="64" height="64" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="48" y="144" width="64" height="64" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="144" y="144" width="64" height="64" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const SquaresFour = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

SquaresFour.displayName = "SquaresFour";

export default SquaresFour;
