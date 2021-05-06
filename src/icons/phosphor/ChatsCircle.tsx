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
    <path d="M230.53955,189.7666A80.01439,80.01439,0,0,0,169.56543,72.58691a80.00141,80.00141,0,1,0-144.105,69.17969l-6.18457,21.6499a13.99955,13.99955,0,0,0,17.30566,17.30909l21.65235-6.186a79.84121,79.84121,0,0,0,28.18994,8.88367,80.03721,80.03721,0,0,0,111.34326,39.11584l21.65137,6.18653A14.00007,14.00007,0,0,0,236.7251,211.418Zm-15.4873-5.10791a8.00114,8.00114,0,0,0-.81641,6.28711l6.11621,21.40625-21.40625-6.11572a8.00193,8.00193,0,0,0-6.28613.8164,64.03376,64.03376,0,0,1-88.33985-23.48608,79.90524,79.90524,0,0,0,70.37549-93.85889,64.02222,64.02222,0,0,1,40.35694,94.95093Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M34.0714,140.74858a71.96979,71.96979,0,1,1,25.18031,25.1802l.00017-.00075-24.86742,7.105a6,6,0,0,1-7.41747-7.41747l7.105-24.86742Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M92.059,175.89247a72.04349,72.04349,0,0,0,104.68926,38.03631l-.00017-.00075,24.86742,7.105a6,6,0,0,0,7.41747-7.41747l-7.105-24.86742.00057.00046A72.01951,72.01951,0,0,0,163.93781,80.10585" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ChatsCircle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

ChatsCircle.displayName = "ChatsCircle";

export default ChatsCircle;
