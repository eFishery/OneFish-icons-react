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
    <path d="M205.65674,61.65674l-144,144a7.99984,7.99984,0,0,1-11.31348-11.31348l144-144a7.99984,7.99984,0,0,1,11.31348,11.31348ZM50.54443,101.45581A36.0403,36.0403,0,1,1,76,111.98315,35.76294,35.76294,0,0,1,50.54443,101.45581ZM56,76A20,20,0,1,0,90.14209,61.85791v-.00024A20,20,0,0,0,56,76ZM216,180a36.00012,36.00012,0,1,1-10.54443-25.45581A35.76281,35.76281,0,0,1,216,180Zm-16,0a20.00016,20.00016,0,1,0-5.85791,14.14209A19.86721,19.86721,0,0,0,200,180Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="200" y1="56" x2="56" y2="200" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="76" cy="76" r="28" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  <circle cx="180" cy="180" r="28" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Percent = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Percent.displayName = "Percent";

export default Percent;
