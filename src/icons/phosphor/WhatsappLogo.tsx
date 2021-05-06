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
    <path d="M128.00049,24a104.0281,104.0281,0,0,0-91.189,154.041l-8.54687,29.915A15.99944,15.99944,0,0,0,48.044,227.73635l29.916-8.54688A104.00728,104.00728,0,1,0,128.00049,24ZM152.125,192c-.0293.02344-.084,0-.126,0A87.99949,87.99949,0,0,1,64,103.876,36.01385,36.01385,0,0,1,100,68,14.92643,14.92643,0,0,1,112.93066,75.503l11.69092,20.46094a16.01674,16.01674,0,0,1-.17187,16.16992l-7.11084,11.85156a40.03607,40.03607,0,0,0,14.67627,14.67676l11.85107-7.11133a16.01883,16.01883,0,0,1,16.17041-.17285l20.45947,11.69141A14.9238,14.9238,0,0,1,188,156,36.01427,36.01427,0,0,1,152.125,192Z"/>
    <path d="M136.4502,154.6592a7.99584,7.99584,0,0,1-7.397.43652,56.03179,56.03179,0,0,1-28.14892-28.14843,7.99972,7.99972,0,0,1,.43652-7.39746l9.38867-15.64844L99.36328,84.00979A19.99027,19.99027,0,0,0,80,103.89748,72.00036,72.00036,0,0,0,152,176h.10254a19.99027,19.99027,0,0,0,19.88769-19.36328l-19.8916-11.36621Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M45.429,176.99811A95.95978,95.95978,0,1,1,79.00277,210.5717l.00023-.001L45.84643,220.044a8,8,0,0,1-9.89-9.89l9.47331-33.15657Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M152.11369,183.99992a80,80,0,0,1-80.11361-80.11361A27.97622,27.97622,0,0,1,100,76h0a6.89265,6.89265,0,0,1,5.98451,3.47295l11.69105,20.45931a8,8,0,0,1-.086,8.08508l-9.38907,15.64844h0a48.18239,48.18239,0,0,0,24.13373,24.13373l0,0,15.64841-9.389a8,8,0,0,1,8.08508-.086l20.45931,11.691A6.89265,6.89265,0,0,1,180,156v0A28.081,28.081,0,0,1,152.11369,183.99992Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const WhatsappLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

WhatsappLogo.displayName = "WhatsappLogo";

export default WhatsappLogo;
