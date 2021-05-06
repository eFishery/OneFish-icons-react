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
    <path d="M229.82422,90.17578c-56.14551-56.14355-147.501-56.14648-203.64844.001a56.07211,56.07211,0,0,0-4.69043,73.87695,16.03254,16.03254,0,0,0,18.55078,4.99707L87.35059,150.125a15.94917,15.94917,0,0,0,9.74609-11.71875l5.90527-29.51172a76.51611,76.51611,0,0,1,49.67676-.10937v.00195l6.21094,29.73828a15.963,15.963,0,0,0,9.7207,11.584l47.35254,18.9414a16.03618,16.03618,0,0,0,18.55273-4.99805A56.07343,56.07343,0,0,0,229.82422,90.17578Z"/>
    <path d="M216,192H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M155.371,101.25063a84.3478,84.3478,0,0,0-55.10429.12547,7.92755,7.92755,0,0,0-5.1169,5.95455l-5.89824,29.5076a8,8,0,0,1-4.87369,5.85972L37.06532,161.623a7.97345,7.97345,0,0,1-9.2595-2.47378,48.00881,48.00881,0,0,1,4.02766-63.31573,136,136,0,0,1,192.333,0,48.00881,48.00881,0,0,1,4.02766,63.31573,7.97345,7.97345,0,0,1-9.2595,2.47378l-47.35377-18.94151a8,8,0,0,1-4.85991-5.79231L160.51024,107.151A7.9287,7.9287,0,0,0,155.371,101.25063Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="40" y1="200" x2="216" y2="200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const PhoneDisconnect = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

PhoneDisconnect.displayName = "PhoneDisconnect";

export default PhoneDisconnect;
