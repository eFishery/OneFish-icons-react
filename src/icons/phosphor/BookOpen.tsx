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
    <path d="M96,208a24.0275,24.0275,0,0,1,24,24,8,8,0,0,0,16,0,24.0275,24.0275,0,0,1,24-24h64a16.01833,16.01833,0,0,0,16-16V64a16.01833,16.01833,0,0,0-16-16H176a40.04552,40.04552,0,0,0-40,40v80a8,8,0,0,1-16,0V88A40.04552,40.04552,0,0,0,80,48H32A16.01833,16.01833,0,0,0,16,64V192a16.01833,16.01833,0,0,0,16,16Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M128,88a32,32,0,0,1,32-32h64a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160a32,32,0,0,0-32,32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M24,192a8,8,0,0,0,8,8H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H32a8,8,0,0,0-8,8Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const BookOpen = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

BookOpen.displayName = "BookOpen";

export default BookOpen;
