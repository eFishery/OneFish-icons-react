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
    <path d="M208,56H180.27539l-13.625-20.4375A7.99942,7.99942,0,0,0,159.99414,32h-64a7.99943,7.99943,0,0,0-6.65625,3.5625L75.71289,56H48A24.0275,24.0275,0,0,0,24,80V192a24.0275,24.0275,0,0,0,24,24H208a24.0275,24.0275,0,0,0,24-24V80A24.0275,24.0275,0,0,0,208,56Zm-44,76a36,36,0,1,1-36-36A36.04043,36.04043,0,0,1,164,132Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M208,208H48a16,16,0,0,1-16-16V80A16,16,0,0,1,48,64H79.99414l16-24h64l16,24H208a16,16,0,0,1,16,16V192A16,16,0,0,1,208,208Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="132" r="36" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Camera = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Camera.displayName = "Camera";

export default Camera;
