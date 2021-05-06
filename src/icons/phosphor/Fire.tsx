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
    <path d="M197.12793,66.60449c-13.07471-20.82129-29.90967-38.67578-44.65332-53.39355a7.99863,7.99863,0,0,0-12.87451,2.22168L108.74951,80.21875,76.47363,58.70117a7.99925,7.99925,0,0,0-11.104,2.23438C45.88135,90.31348,36,116.915,36,140a92,92,0,0,0,184,0C220,115.12207,212.51855,91.11426,197.12793,66.60449Zm-9.8335,82.61621a59.69692,59.69692,0,0,1-50.07275,50.07422,8.11543,8.11543,0,0,1-1.231.09473,8.00055,8.00055,0,0,1-1.21142-15.90723,44.31739,44.31739,0,0,0,36.70263-36.70312,7.99993,7.99993,0,1,1,15.8125,2.4414Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M179.3884,148.00007a52.03842,52.03842,0,0,1-43.388,43.38828" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M72.03592,65.35733C56.59774,88.63059,44,115.21513,44,140a84,84,0,0,0,168,0c0-52-36-92-65.17642-121.12849l-.00087.00081L112,92,72.037,65.358Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Fire = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Fire.displayName = "Fire";

export default Fire;
