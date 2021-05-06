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
    <path d="M173.793,51.48242a220.94852,220.94852,0,0,0-41.67676-34.34277,8.00334,8.00334,0,0,0-8.23242,0A220.94852,220.94852,0,0,0,82.207,51.48242C54.59473,80.47559,40,112.4668,40,144a88,88,0,0,0,176,0C216,112.4668,201.40527,80.47559,173.793,51.48242ZM96,184c0-27.67285,22.52637-47.27734,31.999-54.29688C137.48193,136.72949,160,156.332,160,184a32,32,0,0,1-64,0Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Flame = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Flame.displayName = "Flame";

export default Flame;
