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
    <path d="M175.98242,120.0094a8.00039,8.00039,0,0,0-8,8,230.70455,230.70455,0,0,1-17.333,88.15527,8.00032,8.00032,0,1,0,14.79883,6.084,246.6394,246.6394,0,0,0,18.53418-94.23926A8.00039,8.00039,0,0,0,175.98242,120.0094Z"/>
    <path d="M127.98242,88.0094a40.06442,40.06442,0,0,1,29.81445,13.333,8.00032,8.00032,0,1,0,11.92188-10.67188A56.00093,56.00093,0,0,0,71.98242,128.0094,136.088,136.088,0,0,1,55.00586,193.861a7.99993,7.99993,0,1,0,13.99219,7.75977A152.12935,152.12935,0,0,0,87.98242,128.0094,40.04583,40.04583,0,0,1,127.98242,88.0094Z"/>
    <path d="M69.31738,62.41467A7.99966,7.99966,0,1,0,58.64746,50.4928a104.15766,104.15766,0,0,0-34.665,77.5166,87.28655,87.28655,0,0,1-7.97558,36.66308,7.9997,7.9997,0,1,0,14.541,6.67383,103.15936,103.15936,0,0,0,9.43457-43.33691A88.1429,88.1429,0,0,1,69.31738,62.41467Z"/>
    <path d="M127.98242,24.0094a103.7636,103.7636,0,0,0-34.667,5.91992,8.00025,8.00025,0,0,0,5.332,15.08594,88.06652,88.06652,0,0,1,117.335,82.99414,281.58357,281.58357,0,0,1-6.93847,62.22851,8.00013,8.00013,0,1,0,15.60351,3.541,297.64323,297.64323,0,0,0,7.335-65.76953A104.11791,104.11791,0,0,0,127.98242,24.0094Z"/>
    <path d="M113.89844,200.73889a8.00188,8.00188,0,0,0-10.60742,3.93359c-1.92676,4.19727-4.044,8.38086-6.291,12.43555a7.99945,7.99945,0,1,0,13.99219,7.75781c2.44336-4.40625,4.74511-8.95507,6.83984-13.51953A7.999,7.999,0,0,0,113.89844,200.73889Z"/>
    <path d="M127.9707,120.00842a8.00039,8.00039,0,0,0-8,8,184.6862,184.6862,0,0,1-5.79687,46.00586,8.00008,8.00008,0,1,0,15.49512,3.98828,200.70138,200.70138,0,0,0,6.30175-49.99414A8.00039,8.00039,0,0,0,127.9707,120.00842Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M176.00586,128.009a239.296,239.296,0,0,1-17.934,91.1974" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M163.78085,96.006a48.00042,48.00042,0,0,0-83.775,32.003,143.35045,143.35045,0,0,1-17.98008,69.73221" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M96.00524,37.47183A96.06708,96.06708,0,0,1,224.00586,128.009a288.94587,288.94587,0,0,1-7.13641,63.99948" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M23.30117,168.00907a95.64559,95.64559,0,0,0,8.70469-40A95.76078,95.76078,0,0,1,64.00561,56.45385" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M110.58455,208.009q-3.04225,6.62844-6.56532,12.97841" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M127.99414,128.00842a192.34737,192.34737,0,0,1-6.0489,48.00023" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const FingerprintSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

FingerprintSimple.displayName = "FingerprintSimple";

export default FingerprintSimple;
