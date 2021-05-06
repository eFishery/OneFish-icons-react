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
    <path d="M168,224a8.00039,8.00039,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8.00039,8.00039,0,0,1,168,224Zm52.85352-32.00293A15.80079,15.80079,0,0,1,207.0166,200H48.9834a15.99886,15.99886,0,0,1-13.79688-24.06445C41.124,165.7207,48.20313,146.33594,48.20313,112v-8a79.89888,79.89888,0,0,1,79.79492-80c.2041,0,.40625.001.61035.002,43.66894.32422,79.19629,36.61719,79.19629,80.90235V112c0,34.33789,7.07519,53.72363,13.00976,63.93945A15.87,15.87,0,0,1,220.85352,191.99707ZM156,144a8.00039,8.00039,0,0,0-8-8H125.08008l29.06543-34.87891A7.99925,7.99925,0,0,0,148,88H108a8,8,0,0,0,0,16h22.91992l-29.06543,34.87891A7.99925,7.99925,0,0,0,108,152h40A8.00039,8.00039,0,0,0,156,144Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="96" y1="224" x2="160" y2="224" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M56.20305,104A71.899,71.899,0,0,1,128.5484,32.002c39.58967.29432,71.25651,33.20133,71.25651,72.90185V112c0,35.81563,7.49325,56.59893,14.093,67.95814A7.999,7.999,0,0,1,207.01628,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="108 96 148 96 108 144 148 144" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const BellSimpleZ = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

BellSimpleZ.displayName = "BellSimpleZ";

export default BellSimpleZ;
