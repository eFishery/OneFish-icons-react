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
    <path d="M208,40H48A16.01833,16.01833,0,0,0,32,56v48a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,208,40ZM180.00049,92a12,12,0,1,1,12-12A12,12,0,0,1,180.00049,92Z"/>
    <path d="M208,136H48a16.01833,16.01833,0,0,0-16,16v48a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V152A16.01833,16.01833,0,0,0,208,136Zm-27.99951,52a12,12,0,1,1,12-12A12,12,0,0,1,180.00049,188Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="40" y="144" width="176" height="64" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <rect x="40" y="48" width="176" height="64" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <circle cx="180" cy="80" r="12"/>
  <circle cx="180" cy="176" r="12"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const HardDrives = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

HardDrives.displayName = "HardDrives";

export default HardDrives;
