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
    <path d="M208.00293,32h-160a16.01833,16.01833,0,0,0-16,16V159.88379c-.00049.03906-.00586.07715-.00586.11621s.00537.07715.00586.11621V208a16.01833,16.01833,0,0,0,16,16h160a16.01833,16.01833,0,0,0,16-16V48A16.01833,16.01833,0,0,0,208.00293,32Zm0,176h-160V168l28.68066-.001,19.31446,19.31641A15.89834,15.89834,0,0,0,107.31055,192h41.373a15.89606,15.89606,0,0,0,11.31348-4.68652L179.31055,168h28.6997l.00245,40Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="40" y="40" width="176" height="176" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <path d="M39.99414,160H76.68043a8,8,0,0,1,5.65686,2.34315l19.3137,19.3137A8,8,0,0,0,107.30785,184h41.37258a8,8,0,0,0,5.65686-2.34315l19.3137-19.3137A8,8,0,0,1,179.30785,160h36.68629" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Tray = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Tray.displayName = "Tray";

export default Tray;
