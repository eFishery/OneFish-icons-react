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
    <path d="M199.99975,224h-49.4602a266.47606,266.47606,0,0,0,23.49731-23.75049c27.45215-31.5708,41.96289-64.853,41.96289-96.24951a88,88,0,0,0-176,0c0,31.39648,14.51075,64.67871,41.96289,96.24951A266.476,266.476,0,0,0,105.46,224H55.99975a8,8,0,0,0,0,16h144a8,8,0,0,0,0-16ZM128,72a32,32,0,1,1-32,32A31.99971,31.99971,0,0,1,128,72Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="56" y1="232" x2="200" y2="232" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="104" r="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M208,104c0,72-80,128-80,128S48,176,48,104a80,80,0,0,1,160,0Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const MapPinLine = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

MapPinLine.displayName = "MapPinLine";

export default MapPinLine;
