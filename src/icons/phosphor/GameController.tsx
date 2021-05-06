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
    <path d="M247.45752,181.74316c-.00781-.04394-.01611-.08789-.02441-.13183L231.08252,97.18848c-.01221-.06348-.0321-.123-.0459-.186a60.08639,60.08639,0,0,0-59.01855-49.26221h-.02344L84.00439,48A59.86832,59.86832,0,0,0,24.90625,97.58887c-.0127.07226-.02441.14551-.03516.21777L8.57715,181.60547c-.00879.0459-.01709.0918-.02539.13769A36.00238,36.00238,0,0,0,69.45752,213.457q.21753-.2168.416-.44726l40.729-45.02442,34.84961-.13916,40.67139,45.14893q.20361.2373.42822.46191a36.00125,36.00125,0,0,0,60.90576-31.71387ZM104,116H96v8a8,8,0,0,1-16,0v-8H72a8,8,0,0,1,0-16h8V92a8,8,0,0,1,16,0v8h8a8,8,0,0,1,0,16Zm40-8a8.00008,8.00008,0,0,1,8-8h32a8,8,0,0,1,0,16H152A8.00008,8.00008,0,0,1,144,108Zm71.47754,99.69141a20.03371,20.03371,0,0,1-17.45606-5.39453l-31.11169-34.53614,5.10828-.02051a60.00525,60.00525,0,0,0,50.94067-28.34961l8.75269,45.19239A20.02155,20.02155,0,0,1,215.47754,207.69141Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="152" y1="108" x2="184" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="72" y1="108" x2="104" y2="108" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="92" x2="88" y2="124" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M172.01831,55.7398,84.00446,56A52.01509,52.01509,0,0,0,32.78594,98.96873l.00852.00156-16.3644,84.16289A28.00192,28.00192,0,0,0,63.80532,207.796l-.00165-.00173L107.03924,160l64.97907-.2602a52,52,0,0,0,0-104Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M223.22831,98.71009l16.351,84.42309A28.00192,28.00192,0,0,1,192.204,207.796l.00166-.00173L149,159.832" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const GameController = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

GameController.displayName = "GameController";

export default GameController;
