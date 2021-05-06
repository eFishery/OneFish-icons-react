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
    <path d="M208,32H48A16.01833,16.01833,0,0,0,32,48V208a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,208,32ZM80,208H48V48H80Zm96-56H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="112" y1="112" x2="176" y2="112" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="112" y1="144" x2="176" y2="144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="80" y1="40" x2="80" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Notebook = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Notebook.displayName = "Notebook";

export default Notebook;
