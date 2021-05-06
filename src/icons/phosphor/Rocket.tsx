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
    <path d="M144,216H112a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Z"/>
    <path d="M219.62891,143.85889l-30.23658-36.28418a124.52267,124.52267,0,0,0-7.98022-34.8833c-11.61719-30.21192-32.15625-49.999-43.36523-59.10547a16.07708,16.07708,0,0,0-20.07813-.0669C106.61328,22.61621,85.81055,42.38867,74.07617,72.605A122.76188,122.76188,0,0,0,65.979,108.32861L36.37109,143.85889A16.10066,16.10066,0,0,0,33.043,157.57275l12.36328,55.63282a15.98523,15.98523,0,0,0,25.61328,9.023L98.80566,200h58.38868l27.78515,22.22852a15.91184,15.91184,0,0,0,9.96485,3.51709,16.0905,16.0905,0,0,0,5.34668-.91944,15.90581,15.90581,0,0,0,10.30273-11.62012L222.957,157.57373A16.102,16.102,0,0,0,219.62891,143.85889Zm-158.60352,65.876-12.36328-55.6333,17.92651-21.5122q3.40906,28.0371,19.14038,57.38281ZM128,108a12,12,0,1,1,12-12A12,12,0,0,1,128,108Zm66.97461,101.73486-24.74976-19.7998q15.53064-29.55175,18.74341-57.87695l18.36963,22.04345Z"/>
  </g>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="144" y1="224" x2="112" y2="224" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M122.97053,19.76275C103.97814,34.97686,40.45429,95.77187,96,192h64c54.39078-96.16-8.20388-156.9371-26.9971-172.20489A7.98387,7.98387,0,0,0,122.97053,19.76275Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M73.86661,111.36007,42.51644,148.98028a8,8,0,0,0-1.66373,6.85692l12.36292,55.63314a8,8,0,0,0,12.80706,4.51151L96,192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M181.53142,110.63771l31.95214,38.34257a8,8,0,0,1,1.66373,6.85692l-12.36292,55.63314a8,8,0,0,1-12.80706,4.51151L160,192" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="128" cy="96" r="12"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Rocket = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Rocket.displayName = "Rocket";

export default Rocket;
