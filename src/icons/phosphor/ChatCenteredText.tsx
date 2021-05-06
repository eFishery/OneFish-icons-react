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
    <path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V183.999a16.01833,16.01833,0,0,0,16,16L99.46973,200l14.81054,24.68262a16.00024,16.00024,0,0,0,27.43946,0L156.5293,200H215.999A16.01853,16.01853,0,0,0,232,184V56A16.01833,16.01833,0,0,0,216,40ZM160,143.999H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="96.00049" y1="103.99951" x2="160.00049" y2="103.99951" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="96.00049" y1="135.99951" x2="160.00049" y2="135.99951" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M149.66907,195.88358l-14.80961,24.68269a8,8,0,0,1-13.71989,0l-14.80964-24.68272a8,8,0,0,0-6.85994-3.884H39.99951a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8l-59.47039-.00041A8,8,0,0,0,149.66907,195.88358Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ChatCenteredText = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

ChatCenteredText.displayName = "ChatCenteredText";

export default ChatCenteredText;
