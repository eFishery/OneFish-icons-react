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
    <path d="M256,204a28,28,0,0,1-56,0c0-23.042,21.42969-44.74365,22.34277-45.65625a7.99945,7.99945,0,0,1,11.31446,0C234.57031,159.25635,256,180.958,256,204ZM132.48535,124.49121a12.0001,12.0001,0,1,0-16.9707.00049A12.01451,12.01451,0,0,0,132.48535,124.49121Zm98.47949-1.00684a8.00033,8.00033,0,0,0-2.34277-5.65673L121.1377,10.34326a8.00122,8.00122,0,0,0-11.31446,0L69.73682,50.4292l40.949,40.949a27.99954,27.99954,0,1,1-11.31421,11.31372L58.42285,61.74316l-44.7666,44.76661a24.029,24.029,0,0,0,0,33.94091l84.85742,84.85694a23.99952,23.99952,0,0,0,33.94141,0l96.167-96.16651A8.00034,8.00034,0,0,0,230.96484,123.48437ZM43.51465,24.207A8.00018,8.00018,0,0,0,32.2002,35.52051L58.42285,61.74316l11.314-11.314Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M222.9646,123.48437,126.79808,219.6509a16,16,0,0,1-22.62741,0l-84.857-84.857a16,16,0,0,1,0-22.62742L115.48023,16Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="124" cy="116.00586" r="20" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M208,204c0-19.99414,20-40,20-40s20,20.00586,20,40a20,20,0,0,1-40,0Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="109.85786" y1="101.86372" x2="37.85786" y2="29.86372" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const PaintBucket = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

PaintBucket.displayName = "PaintBucket";

export default PaintBucket;
