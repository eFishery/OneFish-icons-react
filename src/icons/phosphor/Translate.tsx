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
    <path d="M239.13184,212.42188l-56-112a8.0001,8.0001,0,0,0-14.31055,0L147.12378,143.817a88.01219,88.01219,0,0,1-47.15234-16.89991A103.63932,103.63932,0,0,0,127.67187,64h24.30469a8,8,0,0,0,0-16h-56V32a8,8,0,0,0-16,0V48h-56a8,8,0,0,0,0,16h87.63257a87.71326,87.71326,0,0,1-23.64038,52.34106A87.6285,87.6285,0,0,1,68.98682,85.332a7.99985,7.99985,0,1,0-15.083,5.33789A103.55961,103.55961,0,0,0,75.9856,126.93945,87.52745,87.52745,0,0,1,23.97656,144a8,8,0,0,0,0,16,103.48476,103.48476,0,0,0,64.01331-22.09045A104.14165,104.14165,0,0,0,139.43115,159.202l-26.60986,53.21985a8.00006,8.00006,0,0,0,14.31055,7.15625L140.9209,192h70.11133l13.78906,27.57813a8.00006,8.00006,0,0,0,14.31055-7.15625ZM148.9209,176l27.05566-54.11133L203.03223,176Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <polyline points="232 216 176 104 120 216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="136" y1="184" x2="216" y2="184" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="88" y1="32" x2="88" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="24" y1="56" x2="152" y2="56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M120,56a96,96,0,0,1-96,96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M61.46882,88.00088a96.03987,96.03987,0,0,0,90.52532,63.9658" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Translate = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Translate.displayName = "Translate";

export default Translate;
