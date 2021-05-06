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
    <path d="M188.7998,169.6,133.334,128.00037,188.7998,86.40076a8.00048,8.00048,0,0,0,0-12.80078l-64-48A8.0003,8.0003,0,0,0,112,32.00037v79.99957L60.7998,73.6a8.00019,8.00019,0,0,0-9.5996,12.80078L106.666,128.00037,51.2002,169.6a8.00019,8.00019,0,0,0,9.5996,12.80078l51.2002-38.4v79.99958a8.00024,8.00024,0,0,0,12.7998,6.40039l64-48a8.00048,8.00048,0,0,0,0-12.80078ZM128,48.00037l42.667,32-42.667,32Zm0,160v-64l42.667,32Zm80-80a12,12,0,1,1-12-12A12.01344,12.01344,0,0,1,208,128.00037Zm-156,12a12,12,0,1,1,12-12A12.01344,12.01344,0,0,1,52,140.00037Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <polygon points="120 32 184 80 120 128 120 32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polygon points="120 128 184 176 120 224 120 128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="56" y1="80" x2="120" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="56" y1="176" x2="120" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="52" cy="128" r="12"/>
  <circle cx="196" cy="128" r="12"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const BluetoothConnected = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

BluetoothConnected.displayName = "BluetoothConnected";

export default BluetoothConnected;
