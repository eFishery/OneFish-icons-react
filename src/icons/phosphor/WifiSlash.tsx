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
    <path d="M53.86491,34.61787A8.0029,8.0029,0,0,0,42.01886,45.38155l4.63294,5.093A185.51021,185.51021,0,0,0,15.31272,69.55151,15.73558,15.73558,0,0,0,9.097,80.48806a16.27045,16.27045,0,0,0,3.76351,12.27248L115.78283,213.99217a16.0416,16.0416,0,0,0,12.24131,5.6836,15.86724,15.86724,0,0,0,12.11428-5.61329l26.70577-31.4561,35.27175,38.77545a8.0029,8.0029,0,0,0,11.846-10.76369Z"/>
    <path d="M246.90336,80.50173a15.766,15.766,0,0,0-6.23425-10.95022,187.8405,187.8405,0,0,0-148.037-34.211A7.99849,7.99849,0,0,0,88.207,48.5798L181.6035,151.25965a8.00587,8.00587,0,0,0,5.923,2.61915c.04593,0,.09136,0,.13729-.001a8.007,8.007,0,0,0,5.967-2.82325l49.5227-58.33212A16.20333,16.20333,0,0,0,246.90336,80.50173Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="48" y1="40" x2="208" y2="216" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M107.12984,57.47077a148.358,148.358,0,0,1,20.86235-1.46787,145.90176,145.90176,0,0,1,102.9284,42.17662" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M25.06379,98.17952A145.88673,145.88673,0,0,1,72.42537,66.8671" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M152.11967,106.95874a97.88568,97.88568,0,0,1,44.88614,25.1619" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M58.97857,132.12064a97.89874,97.89874,0,0,1,49.03639-26.105" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M92.91969,166.06177a50.81565,50.81565,0,0,1,67.576-2.317" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="200" r="12"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const WifiSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

WifiSlash.displayName = "WifiSlash";

export default WifiSlash;
