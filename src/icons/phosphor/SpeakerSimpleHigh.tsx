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
    <path d="M155.50977,24.80957a7.993,7.993,0,0,0-8.42188.875L77.24414,79.99707h-45.25a16.01583,16.01583,0,0,0-16,16v64a16.01583,16.01583,0,0,0,16,16h45.25l69.84375,54.3125a7.99451,7.99451,0,0,0,12.90625-6.3125v-192A7.99374,7.99374,0,0,0,155.50977,24.80957Z"/>
    <path d="M191.99414,96a8.00039,8.00039,0,0,0-8,8v48a8,8,0,0,0,16,0V104A8.00039,8.00039,0,0,0,191.99414,96Z"/>
    <path d="M223.99414,80a8.00039,8.00039,0,0,0-8,8v80a8,8,0,0,0,16,0V88A8.00039,8.00039,0,0,0,223.99414,80Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="191.9707" y1="104" x2="191.9707" y2="152" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="223.9707" y1="88" x2="223.9707" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const SpeakerSimpleHigh = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

SpeakerSimpleHigh.displayName = "SpeakerSimpleHigh";

export default SpeakerSimpleHigh;
