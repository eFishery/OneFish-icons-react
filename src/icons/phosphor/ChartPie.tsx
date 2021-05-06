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
    <path d="M218.27124,76.39893c-.06738-.13331-.12878-.26807-.20435-.39893-.102-.17676-.21545-.34229-.32849-.50781A103.97483,103.97483,0,0,0,37.72876,179.60107c.06738.1333.12878.26807.20435.39893.07153.124.15856.23242.23559.35107A103.97546,103.97546,0,0,0,218.27124,76.39893Zm-18.40454.87158L136,114.14355V40.36768A88.02766,88.02766,0,0,1,199.8667,77.27051ZM128,216a87.95493,87.95493,0,0,1-71.8667-37.27051L207.88574,91.11572A87.9798,87.9798,0,0,1,128,216Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="128" x2="128" y2="32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="211.13844" y1="80" x2="44.86156" y2="176" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ChartPie = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

ChartPie.displayName = "ChartPie";

export default ChartPie;
