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
    <path d="M155.51465,24.81927a7.99655,7.99655,0,0,0-8.42578.87207l-69.834,54.31445H32a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16H77.25488l69.834,54.31446A7.99958,7.99958,0,0,0,160,224.00579v-192A7.9997,7.9997,0,0,0,155.51465,24.81927ZM32,96.00579H71.9707v64H32Z"/>
    <path d="M196.2832,99.72161a7.99984,7.99984,0,0,0-11.3125,11.31446,23.99831,23.99831,0,0,1,0,33.93945A7.99983,7.99983,0,1,0,196.2832,156.29a39.99719,39.99719,0,0,0,0-56.56836Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="80" y1="88" x2="80" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M190.59793,105.37258a32,32,0,0,1,0,45.25484" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const SpeakerLow = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

SpeakerLow.displayName = "SpeakerLow";

export default SpeakerLow;
