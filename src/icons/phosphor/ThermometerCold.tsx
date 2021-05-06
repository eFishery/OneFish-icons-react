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
    <path d="M244.90576,77.71973l-19.96167,6.48632,12.33716,16.98047a8,8,0,1,1-12.94434,9.4043L212,93.61035l-12.33691,16.98047a7.99995,7.99995,0,0,1-12.94434-9.4043l12.33716-16.98047-19.96167-6.48632a8,8,0,1,1,4.94433-15.2168L204,68.98877V48a8,8,0,0,1,16,0V68.98877l19.96143-6.48584a8,8,0,1,1,4.94433,15.2168ZM180,188A60,60,0,1,1,80,143.27441V48a40,40,0,0,1,80,0v95.27441A59.61666,59.61666,0,0,1,180,188ZM96,48v56h48V48a24,24,0,0,0-48,0Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="120" cy="188" r="20" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="120" y1="168" x2="120" y2="120" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="212" y1="48" x2="212" y2="80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="181.56619" y1="70.11146" x2="212" y2="80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="193.19087" y1="105.88854" x2="212" y2="80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="230.80913" y1="105.88854" x2="212" y2="80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="242.43381" y1="70.11146" x2="212" y2="80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M88,147.02548V48a32,32,0,0,1,64,0v99.02548l.00787-.01006a52,52,0,1,1-64.01574,0Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ThermometerCold = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

ThermometerCold.displayName = "ThermometerCold";

export default ThermometerCold;
