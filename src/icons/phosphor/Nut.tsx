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
    <path d="M219.87207,66.73877l-84-47.478a16.08529,16.08529,0,0,0-15.74609,0l-84,47.478a16.0253,16.0253,0,0,0-8.127,13.92871v94.665a16.0253,16.0253,0,0,0,8.127,13.92871l84,47.478a16.08113,16.08113,0,0,0,15.74609,0l84-47.478a16.02529,16.02529,0,0,0,8.12695-13.92871v-94.665A16.02529,16.02529,0,0,0,219.87207,66.73877ZM127.999,164a36,36,0,1,1,36-36A36.04074,36.04074,0,0,1,127.999,164Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M220,175.33228V80.66772a8,8,0,0,0-4.06354-6.9645l-84-47.47826a8,8,0,0,0-7.87292,0l-84,47.47826A8,8,0,0,0,36,80.66772v94.66456a8,8,0,0,0,4.06354,6.96451l84,47.47826a8,8,0,0,0,7.87292,0l84-47.47826A8,8,0,0,0,220,175.33228Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="128" r="36" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Nut = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Nut.displayName = "Nut";

export default Nut;
