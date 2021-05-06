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
    <path d="M208,40H168a8,8,0,0,0,0,16h32V88a8,8,0,0,0,16,0V48A8.00008,8.00008,0,0,0,208,40Z"/>
    <path d="M88,200H56V168a8,8,0,0,0-16,0v40a8.00039,8.00039,0,0,0,8,8H88a8,8,0,0,0,0-16Z"/>
    <path d="M208,160a8.00039,8.00039,0,0,0-8,8v32H168a8,8,0,0,0,0,16h40a8.00039,8.00039,0,0,0,8-8V168A8.00039,8.00039,0,0,0,208,160Z"/>
    <path d="M88,40H48a8.00008,8.00008,0,0,0-8,8V88a8,8,0,0,0,16,0V56H88a8,8,0,0,0,0-16Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <polyline points="168 48 208 48 208 88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="88 208 48 208 48 168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="208 168 208 208 168 208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="48 88 48 48 88 48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CornersOut = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

CornersOut.displayName = "CornersOut";

export default CornersOut;
