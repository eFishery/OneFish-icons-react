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
    <path d="M200,32H163.73877a47.91437,47.91437,0,0,0-71.47754,0H56A16.01833,16.01833,0,0,0,40,48V216a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,200,32Zm-72,0a32.03667,32.03667,0,0,1,32,32H96A32.03667,32.03667,0,0,1,128,32Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M160.00194,40H200a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H95.99783" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M88,72V64a40,40,0,0,1,80,0v8Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Clipboard = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Clipboard.displayName = "Clipboard";

export default Clipboard;
