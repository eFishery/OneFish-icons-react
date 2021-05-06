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
    <circle cx="128" cy="128" r="68"/>
    <path d="M128,44a7.99993,7.99993,0,0,0,8-8V28a8,8,0,0,0-16,0v8A7.99993,7.99993,0,0,0,128,44Z"/>
    <path d="M57.28906,68.603A8,8,0,1,0,68.603,57.28955l-5.65674-5.657A7.99983,7.99983,0,1,0,51.63281,62.946Z"/>
    <path d="M36,120H28a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"/>
    <path d="M57.28955,187.397l-5.65674,5.65674a7.99984,7.99984,0,1,0,11.31348,11.31348l5.65674-5.65674A7.99984,7.99984,0,0,0,57.28955,187.397Z"/>
    <path d="M128,212a7.99977,7.99977,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A7.99977,7.99977,0,0,0,128,212Z"/>
    <path d="M198.71045,187.397A7.99984,7.99984,0,0,0,187.397,198.71045l5.65674,5.65674a7.99984,7.99984,0,0,0,11.31348-11.31348Z"/>
    <path d="M228,120h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"/>
    <path d="M193.05371,70.94629a7.977,7.977,0,0,0,5.65723-2.34326l5.65625-5.657a7.99983,7.99983,0,1,0-11.31348-11.31347l-5.65674,5.657a7.99988,7.99988,0,0,0,5.65674,13.65674Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="128" cy="128" r="60" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="36" x2="128" y2="28" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="62.94618" y1="62.94618" x2="57.28932" y2="57.28932" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="36" y1="128" x2="28" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="62.94618" y1="193.05382" x2="57.28932" y2="198.71068" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="220" x2="128" y2="228" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="193.05382" y1="193.05382" x2="198.71068" y2="198.71068" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="220" y1="128" x2="228" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="193.05382" y1="62.94618" x2="198.71068" y2="57.28932" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const SunDim = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

SunDim.displayName = "SunDim";

export default SunDim;
