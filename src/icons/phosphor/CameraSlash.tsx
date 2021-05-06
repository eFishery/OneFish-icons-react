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
    <g>
    <path d="M39.37451,18.61865a8.00027,8.00027,0,0,0-11.83984,10.7627L51.7334,56H47.99951a24.0275,24.0275,0,0,0-24,24V192a24.0275,24.0275,0,0,0,24,24H197.188l19.4375,21.38135a8.00027,8.00027,0,0,0,11.83984-10.7627ZM128,168a35.97306,35.97306,0,0,1-27.86426-58.75781L148.02246,161.918A35.81152,35.81152,0,0,1,128,168Z"/>
    <path d="M207.99951,56H180.2749l-13.625-20.4375A7.99942,7.99942,0,0,0,159.99365,32h-64a7.99954,7.99954,0,0,0-6.65722,3.56348l-2.00782,3.01318a8.00079,8.00079,0,0,0,.73731,9.81787L218.07959,191.41016a8.0004,8.0004,0,0,0,13.91992-5.38135V80A24.0275,24.0275,0,0,0,207.99951,56Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="33.45455" y1="24" x2="222.54545" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M93.98553,43.01291,95.99414,40h64l16,24H208a16,16,0,0,1,16,16V186.02889" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M200.72725,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H69.8181" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M154.13957,156.75336a36.00072,36.00072,0,1,1-48.298-53.128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CameraSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

CameraSlash.displayName = "CameraSlash";

export default CameraSlash;
