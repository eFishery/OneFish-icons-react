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
    <path d="M238.72754,73.53516a15.90424,15.90424,0,0,0-16.70508-2.29981l-50.584,22.48242L141.98633,40.70312a15.999,15.999,0,0,0-27.97266,0L84.56055,93.7168,33.96875,71.23145A16.00031,16.00031,0,0,0,11.89551,89.51172l25.44531,108.333a15.83567,15.83567,0,0,0,7.4082,10.09179,16.15491,16.15491,0,0,0,12.49317,1.65137,265.89708,265.89708,0,0,1,141.46875-.01367,16.15265,16.15265,0,0,0,12.4873-1.65137,15.83531,15.83531,0,0,0,7.40821-10.084L244.0957,89.52051A15.90513,15.90513,0,0,0,238.72754,73.53516Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M45.12859,196.01674a8.01266,8.01266,0,0,0,9.97356,5.86223,273.90053,273.90053,0,0,1,145.746-.0138,8.01268,8.01268,0,0,0,9.97132-5.85941l25.48872-108.3169a8,8,0,0,0-11.03641-9.143L174.688,101.02754a8,8,0,0,1-10.24237-3.42535l-29.4524-53.01433a8,8,0,0,0-13.98652,0L91.55434,97.60219A8,8,0,0,1,81.312,101.02754L30.72054,78.54246a8,8,0,0,0-11.03717,9.13973Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CrownSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

CrownSimple.displayName = "CrownSimple";

export default CrownSimple;
