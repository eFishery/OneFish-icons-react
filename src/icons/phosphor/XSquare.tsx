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
    <path d="M208.00146,32h-160a16.01582,16.01582,0,0,0-16,16V208a16.01583,16.01583,0,0,0,16,16h160a16.01582,16.01582,0,0,0,16-16V48A16.01581,16.01581,0,0,0,208.00146,32ZM165.65771,154.34375a7.99915,7.99915,0,1,1-11.3125,11.3125L128.00146,139.3125l-26.34375,26.34375a7.99915,7.99915,0,0,1-11.3125-11.3125L116.689,128,90.34521,101.65625a7.99915,7.99915,0,0,1,11.3125-11.3125l26.34375,26.34375,26.34375-26.34375a7.99915,7.99915,0,0,1,11.3125,11.3125L139.314,128Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="160" y1="96" x2="96" y2="160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="160" y1="160" x2="96" y2="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const XSquare = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

XSquare.displayName = "XSquare";

export default XSquare;
