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
    <path d="M215.99414,199.99963a8,8,0,0,1-16,0c0-79.40234-64.59814-144-144-144a8,8,0,0,1,0-16C144.21826,39.99963,215.99414,111.775,215.99414,199.99963Zm-160-88a8,8,0,1,0,0,16,72.08124,72.08124,0,0,1,72,72,8,8,0,0,0,16,0A88.09957,88.09957,0,0,0,55.99414,111.99963Zm0,76a12,12,0,1,0,12,12A12.01344,12.01344,0,0,0,55.99414,187.99963Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M56,48A152,152,0,0,1,208,200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M56,120a80,80,0,0,1,80,80" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="56" cy="200" r="12"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const RssSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

RssSimple.displayName = "RssSimple";

export default RssSimple;
