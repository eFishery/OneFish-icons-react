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
    <path d="M221.97168,158.42676l-46.83789-20.07324a15.95139,15.95139,0,0,0-15.17871,1.39453l-25.043,16.69336A76.54083,76.54083,0,0,1,99.707,121.3916l.00195-.00195,16.63477-25.418a15.96924,15.96924,0,0,0,1.32031-15.06641L97.57227,34.02734a16.02839,16.02839,0,0,0-16.65235-9.583A56.07029,56.07029,0,0,0,32,80c0,79.40234,64.59766,144,144,144a56.07032,56.07032,0,0,0,55.55566-48.9209A16.03476,16.03476,0,0,0,221.97168,158.42676Z"/>
    <path d="M157.35156,47.72852a72.12078,72.12078,0,0,1,50.91992,50.91992,7.99975,7.99975,0,0,0,15.457-4.13086,88.16381,88.16381,0,0,0-62.2461-62.2461,7.99975,7.99975,0,0,0-4.13086,15.457Z"/>
    <path d="M149.06738,78.64551a40.06626,40.06626,0,0,1,28.28711,28.28711,7.99975,7.99975,0,0,0,15.457-4.13086,56.10589,56.10589,0,0,0-39.61328-39.61328,7.99975,7.99975,0,0,0-4.13086,15.457Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M159.41743,40A80.14832,80.14832,0,0,1,216,96.58261" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M151.13313,70.91728a48.089,48.089,0,0,1,33.94958,33.9496" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M92.47629,124.81528a84.34782,84.34782,0,0,0,39.05334,38.8759,7.92754,7.92754,0,0,0,7.8287-.59231L164.394,146.40453a8,8,0,0,1,7.58966-.69723l46.837,20.073A7.97345,7.97345,0,0,1,223.619,174.077,48.00882,48.00882,0,0,1,176,216,136,136,0,0,1,40,80,48.00882,48.00882,0,0,1,81.923,32.381a7.97345,7.97345,0,0,1,8.29668,4.79823L110.31019,84.0571a8,8,0,0,1-.65931,7.53226L93.01449,117.00909A7.9287,7.9287,0,0,0,92.47629,124.81528Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const PhoneCall = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

PhoneCall.displayName = "PhoneCall";

export default PhoneCall;
