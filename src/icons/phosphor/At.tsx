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
    <path d="M128,23.99121a104,104,0,1,0,93.78125,148.9364A49.2519,49.2519,0,0,1,204,175.99121c-18.28711,0-28.52441-8.00488-33.8916-14.7207a39.57375,39.57375,0,0,1-3.37793-4.96948A48.00646,48.00646,0,1,1,160,92.2522v-4.261a8,8,0,0,1,16,0v40c0,14.59863,4.85742,32,28,32,22.3457,0,27.64258-16.22314,27.98047-30.4823.00732-.50574.01953-1.01037.01953-1.5177A104.11791,104.11791,0,0,0,128,23.99121Z"/>
    <circle cx="128" cy="127.99121" r="32"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="128.00293" cy="127.99512" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M181.08446,207.99724a96.00809,96.00809,0,1,1,42.91847-80.00212c0,22.09139-8,40-28,40s-28-17.90861-28-40v-40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const At = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

At.displayName = "At";

export default At;
