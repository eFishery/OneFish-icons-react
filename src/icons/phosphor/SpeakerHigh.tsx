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
    <path d="M224.56836,71.43935a8.00053,8.00053,0,0,0-11.31445,11.31446,63.99788,63.99788,0,0,1,0,90.50976A8.00053,8.00053,0,0,0,224.56836,184.578a80.00148,80.00148,0,0,0,0-113.13868Z"/>
    <path d="M155.51465,24.82217a7.99448,7.99448,0,0,0-8.42578.87207l-69.834,54.31445H32a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16H77.25488l69.834,54.31445A7.99958,7.99958,0,0,0,160,224.00869v-192A7.9997,7.9997,0,0,0,155.51465,24.82217ZM32,96.00869H71.9707v64H32Z"/>
    <path d="M184.96973,99.72549a7.99913,7.99913,0,0,0,.001,11.31347,23.99832,23.99832,0,0,1,0,33.93946,7.99983,7.99983,0,1,0,11.3125,11.31445,39.99719,39.99719,0,0,0,0-56.56836A7.99825,7.99825,0,0,0,184.96973,99.72549Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M218.88231,77.08831a72,72,0,0,1,0,101.82338" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M80,168H32a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H80l72-56V224Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="80" y1="88" x2="80" y2="168" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M190.59793,105.37258a32,32,0,0,1,0,45.25484" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const SpeakerHigh = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

SpeakerHigh.displayName = "SpeakerHigh";

export default SpeakerHigh;
