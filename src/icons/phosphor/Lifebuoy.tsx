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
    <path d="M202.16064,200.833a103.80643,103.80643,0,0,0,0-145.666,7.39654,7.39654,0,0,0-1.32666-1.32666,103.80639,103.80639,0,0,0-145.668,0A7.39654,7.39654,0,0,0,53.83936,55.167a103.80643,103.80643,0,0,0,0,145.666,8.09893,8.09893,0,0,0,.62158.70605,8.01767,8.01767,0,0,0,.70556.6211,103.80643,103.80643,0,0,0,145.667,0,8.01767,8.01767,0,0,0,.70556-.6211A8.09893,8.09893,0,0,0,202.16064,200.833ZM96,128a32,32,0,1,1,32,32A32.03667,32.03667,0,0,1,96,128Zm88.28076-67.59521L155.7876,88.898a47.83822,47.83822,0,0,0-55.5752,0L71.71924,60.40479a87.81956,87.81956,0,0,1,112.56152,0ZM71.71924,195.59521l28.49316-28.49316a47.83822,47.83822,0,0,0,55.5752,0l28.49316,28.49316a87.81956,87.81956,0,0,1-112.56152,0Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="128" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="99.71573" y1="99.71573" x2="60.11775" y2="60.11775" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="156.28427" y1="99.71573" x2="195.88225" y2="60.11775" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="156.28427" y1="156.28427" x2="195.88225" y2="195.88225" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="99.71573" y1="156.28427" x2="60.11775" y2="195.88225" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Lifebuoy = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Lifebuoy.displayName = "Lifebuoy";

export default Lifebuoy;
