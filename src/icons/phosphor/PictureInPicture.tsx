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
    <path d="M216,48H40A16.01833,16.01833,0,0,0,24,64V192a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V64A16.01833,16.01833,0,0,0,216,48ZM40,64H216l.00439,56H144a16.01833,16.01833,0,0,0-16,16v56H40Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="32" y="56" width="192" height="144" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M136,200V136a8,8,0,0,1,8-8h80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const PictureInPicture = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

PictureInPicture.displayName = "PictureInPicture";

export default PictureInPicture;
