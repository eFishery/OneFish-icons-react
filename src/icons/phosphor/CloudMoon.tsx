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
    <path d="M156,72a76.16623,76.16623,0,0,0-12.356,1.012A71.97744,71.97744,0,0,0,88.16846,9.8252a7.9997,7.9997,0,0,0-9.58741,9.58691A56.33865,56.33865,0,0,1,80,32,56.06322,56.06322,0,0,1,24,88a56.39592,56.39592,0,0,1-12.59082-1.418,8.00013,8.00013,0,0,0-9.585,9.58789A72.18778,72.18778,0,0,0,34.11353,141.2312,51.96571,51.96571,0,0,0,76,224h80a76,76,0,0,0,0-152ZM21.36816,103.95215Q22.68287,104.0005,24,104A72.08124,72.08124,0,0,0,96,32q0-1.3374-.04932-2.67285a55.64963,55.64963,0,0,1,31.98267,48.05249A76.41925,76.41925,0,0,0,85.03711,120.7832,52.31117,52.31117,0,0,0,76,120a51.69716,51.69716,0,0,0-30.02808,9.58643A56.254,56.254,0,0,1,21.36816,103.95215Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M88,148a68,68,0,1,1,68,68H76a44,44,0,1,1,14.30583-85.62208" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M46.99,138.92889A64.12919,64.12919,0,0,1,9.6218,94.37955l.00023-.001A64.0566,64.0566,0,0,0,86.37854,17.622l.00084-.00019A64.02478,64.02478,0,0,1,136,80q0,1.51431-.06961,3.01174" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CloudMoon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

CloudMoon.displayName = "CloudMoon";

export default CloudMoon;
