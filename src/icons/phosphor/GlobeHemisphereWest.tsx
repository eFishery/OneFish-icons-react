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
    <path d="M221.59668,173.31348A103.97882,103.97882,0,0,0,154.84473,27.51953c-.18018-.05615-.36231-.10449-.5459-.14795A103.90813,103.90813,0,0,0,60.3916,49.041a7.94439,7.94439,0,0,0-1.33545,1.168A103.94993,103.94993,0,0,0,128,232c.73584,0,1.46875-.0127,2.20117-.02783.01807,0,.03613.00244.05371.00244.03516,0,.06885-.00391.10352-.0044A104.12933,104.12933,0,0,0,220.96387,174.585l.01465-.02148A7.967,7.967,0,0,0,221.59668,173.31348ZM216,128a87.57766,87.57766,0,0,1-5.53125,30.70654L164.06836,130.168a15.90244,15.90244,0,0,0-6.24365-2.22656l-22.81836-3.07618a16.10781,16.10781,0,0,0-15.32178,6.81446h-8.543l-3.80469-7.86035A16.00216,16.00216,0,0,0,96.295,115.14608l-6.5655-1.41073,2.51745-5.97658a8,8,0,0,1,7.37265-4.89451H115.6543a16.02745,16.02745,0,0,0,7.73437-1.99414l12.24317-6.76074a16.03672,16.03672,0,0,0,2.99609-2.1377l26.91064-24.33789a15.90675,15.90675,0,0,0,4.4336-16.96289A88.07506,88.07506,0,0,1,216,128ZM40,128a87.46223,87.46223,0,0,1,9.46094-39.665l10.42334,27.82031a15.93042,15.93042,0,0,0,11.6206,10.02735l5.5127,1.18506.04541.00976,12.05371,2.591a8,8,0,0,1,5.51942,4.33553l2.10451,4.34726a16.00022,16.00022,0,0,0,14.40146,9.02849H112.251l-7.69532,17.26758a15.98365,15.98365,0,0,0,2.86622,17.375l16.05,17.36021a8,8,0,0,1,1.98025,6.95l-1.791,9.25958A88.10889,88.10889,0,0,1,40,128Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="128" cy="128" r="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M214.16458,170.37222l-54.28632-33.38846a7.99993,7.99993,0,0,0-3.12236-1.114l-22.81867-3.07595a8,8,0,0,0-8.37592,4.67178l-13.69878,30.73831a8,8,0,0,0,1.433,8.68736l18.79995,20.33464a8,8,0,0,1,1.98022,6.9502l-3.8294,19.79638" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M64.95216,55.60635,56.00794,76.75607a8,8,0,0,0-.12321,5.92293l11.49086,30.66819a8,8,0,0,0,5.81037,5.01448l21.42993,4.60592a8,8,0,0,1,5.5197,4.3358l3.80564,7.862a8,8,0,0,0,7.20075,4.51442h13.43256" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M152.45823,35.14852l9.33366,16.7184a8,8,0,0,1-1.6191,9.83314L133.26192,86.0376a8.00033,8.00033,0,0,1-1.49868,1.06968l-12.24176,6.76034a8,8,0,0,1-3.86737.9969H94.30873a8,8,0,0,0-7.37259,4.89437l-8.32721,19.76833" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const GlobeHemisphereWest = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

GlobeHemisphereWest.displayName = "GlobeHemisphereWest";

export default GlobeHemisphereWest;
