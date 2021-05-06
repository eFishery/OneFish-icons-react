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
    <path d="M116,72v88a48.05436,48.05436,0,0,1-48,48,8,8,0,0,1,0-16,32.036,32.036,0,0,0,32-32v-8H40a16.01833,16.01833,0,0,1-16-16V72A16.01833,16.01833,0,0,1,40,56h60A16.01833,16.01833,0,0,1,116,72ZM216,56H156a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16h60v8a32.036,32.036,0,0,1-32,32,8,8,0,0,0,0,16,48.05436,48.05436,0,0,0,48-48V72A16.01833,16.01833,0,0,0,216,56Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M108,144H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M224,144H156a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Quotes = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Quotes.displayName = "Quotes";

export default Quotes;
