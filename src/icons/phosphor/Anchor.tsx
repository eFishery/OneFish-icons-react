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
    <path d="M216,136a8.00039,8.00039,0,0,0-8,8,40.04584,40.04584,0,0,1-40,40,47.79539,47.79539,0,0,0-32,12.27148V120h32a8,8,0,0,0,0-16H136V78.8291a28,28,0,1,0-16,0V104H88a8,8,0,0,0,0,16h32v76.27148A47.79539,47.79539,0,0,0,88,184a40.04584,40.04584,0,0,1-40-40,8,8,0,0,0-16,0,56.0629,56.0629,0,0,0,56,56,32.03667,32.03667,0,0,1,32,32,8,8,0,0,0,16,0,32.03667,32.03667,0,0,1,32-32,56.0629,56.0629,0,0,0,56-56A8.00039,8.00039,0,0,0,216,136ZM116,52a12,12,0,1,1,12,12A12.01312,12.01312,0,0,1,116,52Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="128" y1="232" x2="128" y2="72" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="52" r="20" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="112" x2="168" y2="112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M40,144a48,48,0,0,0,48,48,40,40,0,0,1,40,40,40,40,0,0,1,40-40,48,48,0,0,0,48-48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Anchor = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Anchor.displayName = "Anchor";

export default Anchor;
