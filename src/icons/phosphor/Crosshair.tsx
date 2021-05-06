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
    <path d="M236,120H223.66406A96.15352,96.15352,0,0,0,136,32.33618V20a8,8,0,0,0-16,0V32.33618A96.15352,96.15352,0,0,0,32.33594,120H20a8,8,0,0,0,0,16H32.33594A96.15352,96.15352,0,0,0,120,223.66382V236a8,8,0,0,0,16,0V223.66382A96.15352,96.15352,0,0,0,223.66406,136H236a8,8,0,0,0,0-16Zm-40,16h11.59912A80.14164,80.14164,0,0,1,136,207.59912V196a8,8,0,0,0-16,0v11.59912A80.14164,80.14164,0,0,1,48.40088,136H60a8,8,0,0,0,0-16H48.40088A80.14164,80.14164,0,0,1,120,48.40088V60a8,8,0,0,0,16,0V48.40088A80.14164,80.14164,0,0,1,207.59912,120H196a8,8,0,0,0,0,16Z"/>
    <circle cx="128" cy="128" r="40"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="128" cy="128" r="88" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="20" x2="128" y2="60" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="20" y1="128" x2="60" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="236" x2="128" y2="196" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="236" y1="128" x2="196" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="128" r="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Crosshair = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Crosshair.displayName = "Crosshair";

export default Crosshair;
