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
    <path d="M224,64H154.667l-27.7334-20.7998A16.10323,16.10323,0,0,0,117.333,40H72A16.01833,16.01833,0,0,0,56,56V72H40A16.01833,16.01833,0,0,0,24,88V200a16.01833,16.01833,0,0,0,16,16H192.88867A15.12831,15.12831,0,0,0,208,200.88867V184h16.88867A15.12831,15.12831,0,0,0,240,168.88867V80A16.01833,16.01833,0,0,0,224,64Zm0,104H208V112a16.01833,16.01833,0,0,0-16-16H122.667L94.93359,75.2002A16.10323,16.10323,0,0,0,85.333,72H72V56h45.333l27.7334,20.7998A16.10323,16.10323,0,0,0,154.667,80H224Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M200,112v88.88889A7.11111,7.11111,0,0,1,192.88889,208H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H192A8,8,0,0,1,200,112Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M64,80V56a8,8,0,0,1,8-8h45.33333a8,8,0,0,1,4.8,1.6l27.73334,20.8a8,8,0,0,0,4.8,1.6H224a8,8,0,0,1,8,8v88.88889A7.11111,7.11111,0,0,1,224.88889,176H200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Folders = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Folders.displayName = "Folders";

export default Folders;
