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
    <path d="M139.31348,128l66.34326-66.34326a7.99984,7.99984,0,0,0-11.31348-11.31348L128,116.68652,61.65674,50.34326A7.99984,7.99984,0,0,0,50.34326,61.65674L116.68652,128,50.34326,194.34326a7.99984,7.99984,0,1,0,11.31348,11.31348L128,139.31348l66.34326,66.34326a7.99984,7.99984,0,0,0,11.31348-11.31348Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="200" y1="56" x2="56" y2="200" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="200" y1="200" x2="56" y2="56" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const X = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

X.displayName = "X";

export default X;
