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
    <path d="M246.86034,80.49665a15.72068,15.72068,0,0,0-6.209-10.91944C174.34325,19.50788,81.71141,19.49665,15.39061,69.54548a15.73529,15.73529,0,0,0-6.21142,10.936,16.27674,16.27674,0,0,0,3.76074,12.27393L115.85985,214.05768a15.95117,15.95117,0,0,0,12.17383,5.65528A15.77638,15.77638,0,0,0,140.081,214.127L243.12206,92.6822A16.16767,16.16767,0,0,0,246.86034,80.49665Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M58.97857,132.12064a98.75415,98.75415,0,0,1,138.02724,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M25.06379,98.17952a146.68225,146.68225,0,0,1,205.8568,0" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="200" r="12"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const WifiHigh = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

WifiHigh.displayName = "WifiHigh";

export default WifiHigh;
