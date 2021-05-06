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
    <path d="M245.65723,77.65674,215.9541,107.35938c-.79785,29.35644-12.00293,57.9873-31.02148,79.00781C162.65723,210.98682,131.90527,224,96,224c-34.91211,0-52.9082-17.59424-53.65723-18.34326a8.00012,8.00012,0,0,1,4.07911-13.49951c8.53808-1.7295,29.73144-8.46534,38.75-20.60547a92.9624,92.9624,0,0,1-25.34766-21.46631c-25.0918-30.46924-24.56006-68.75977-19.69531-95.5166a8.00018,8.00018,0,0,1,14.11816-3.56641C54.522,51.34424,80.81543,83.55713,120,94.08105V88.00293a48.31855,48.31855,0,0,1,48.6084-47.99951,48.11329,48.11329,0,0,1,40.96875,23.99609L240,64a8.0001,8.0001,0,0,1,5.65723,13.65674Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M48,200s40-8,48-32c0,0-64-24-48-112,0,0,32,40,80,48V88.00288a40.00668,40.00668,0,0,1,76.67148-16.00327L240,72l-32,32c0,56-40,112-112,112C64,216,48,200,48,200Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const TwitterLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

TwitterLogo.displayName = "TwitterLogo";

export default TwitterLogo;
