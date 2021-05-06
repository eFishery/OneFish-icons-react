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
    <path d="M221.13184,128A31.97762,31.97762,0,0,0,184,76.30522V56a31.97939,31.97939,0,0,0-56-21.132A31.97768,31.97768,0,0,0,76.30518,72H56a31.97928,31.97928,0,0,0-21.13184,56A31.97763,31.97763,0,0,0,72,179.69487V200a31.97939,31.97939,0,0,0,56,21.132A31.97768,31.97768,0,0,0,179.69482,184H200a31.97928,31.97928,0,0,0,21.13184-56ZM88,56a16,16,0,0,1,32,0V72H104A16.01833,16.01833,0,0,1,88,56ZM40,104A16.01833,16.01833,0,0,1,56,88h48a16.01833,16.01833,0,0,1,16,16v16H56A16.01833,16.01833,0,0,1,40,104Zm128,96a16,16,0,0,1-32,0V184h16A16.01833,16.01833,0,0,1,168,200Zm32-32H152a16.01833,16.01833,0,0,1-16-16V136h64a16,16,0,0,1,0,32Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M80,56.00005h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V80a24,24,0,0,1,24-24Z" transform="translate(184.00005 24.00003) rotate(90)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M128,80H104a24,24,0,0,1-24-24V56a24,24,0,0,1,24-24h0a24,24,0,0,1,24,24Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M152,32.00007h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V56a24,24,0,0,1,24-24Z" transform="translate(304 160.00011) rotate(180)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M176,128V104a24,24,0,0,1,24-24h0a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M176,104.00005h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V128a24,24,0,0,1,24-24Z" transform="translate(23.99995 328.00003) rotate(-90)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M128,176h24a24,24,0,0,1,24,24v0a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M104,128h24a0,0,0,0,1,0,0v72a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24V152a24,24,0,0,1,24-24Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M80,128v24a24,24,0,0,1-24,24h0a24,24,0,0,1-24-24v0a24,24,0,0,1,24-24Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const SlackLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

SlackLogo.displayName = "SlackLogo";

export default SlackLogo;
