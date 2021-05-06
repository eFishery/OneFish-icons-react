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
    <path d="M215.99512,71.99805H130.65625L102.917,51.19336a16.07363,16.07363,0,0,0-9.57812-3.19531H39.99512a16.01581,16.01581,0,0,0-16,16v136a16.01582,16.01582,0,0,0,16,16h176a16.01583,16.01583,0,0,0,16-16v-112A16.01582,16.01582,0,0,0,215.99512,71.99805Zm-176,24v-32H93.33887l21.32617,15.999-21.3418,16.001ZM151.99707,156h-16v16a8,8,0,0,1-16,0V156h-16a8,8,0,0,1,0-16h16V124a8,8,0,0,1,16,0v16h16a8,8,0,0,1,0,16Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M128,80h88a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H40a8.02352,8.02352,0,0,1-8-8V104" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M93.33333,104H32V64a8,8,0,0,1,8-8H93.33333a8,8,0,0,1,4.8,1.6L128,80,98.13333,102.4A8,8,0,0,1,93.33333,104Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="103.99707" y1="148" x2="151.99707" y2="148" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="127.99707" y1="124" x2="127.99707" y2="172" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const FolderNotchPlus = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

FolderNotchPlus.displayName = "FolderNotchPlus";

export default FolderNotchPlus;
