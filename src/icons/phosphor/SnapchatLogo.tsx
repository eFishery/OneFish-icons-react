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
    <path d="M242.95264,194.51565c-7.17285,6.73242-17.44434,7.418-26.50684,8.02343-5.77881.38575-11.75391.78418-15.24658,2.707-3.37012,1.85546-6.84522,6.61914-10.20557,11.22558-5.40674,7.41113-11.53418,15.81152-21.2373,18.29395-9.356,2.39648-18.584-1.90625-26.72608-5.70118C137.688,226.57424,132.16357,224,128,224c-4.16309,0-9.6875,2.57422-15.02979,5.06445-6.51074,3.03321-13.71728,6.39161-21.126,6.39161a22.48462,22.48462,0,0,1-5.59961-.69043c-9.70361-2.48243-15.83154-10.88282-21.23877-18.29493-3.36035-4.60546-6.835-9.36914-10.20459-11.2246-3.49268-1.92286-9.46826-2.32129-15.24658-2.707-9.0625-.60546-19.334-1.291-26.50684-8.02343a7.99944,7.99944,0,0,1,2.085-13.07911c.27149-.13085,12.46192-6.085,24.44629-21.32324a107.03319,107.03319,0,0,0,17.35156-32.72558l-19.90136-7.96a7.99977,7.99977,0,0,1,5.9414-14.85547L61.023,111.793A163.22264,163.22264,0,0,0,64,80a64,64,0,0,1,128,0,163.22264,163.22264,0,0,0,2.977,31.793l18.05176-7.2207a8,8,0,0,1,5.94238,14.85547l-19.90137,7.96093a107.023,107.023,0,0,0,17.35157,32.72461c12.05957,15.334,24.32763,21.2666,24.45019,21.3252a8.021,8.021,0,0,1,2.08106,13.07715Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M18.52262,188.68274S72,163.9473,72,80a56,56,0,0,1,112,0c0,83.94728,53.47772,108.6824,53.47772,108.6824-9.25514,8.68693-28.93167,3.38673-40.13691,9.55547-11.03868,6.077-17.07266,25.58078-29.56764,28.77765C155.6908,230.10684,141.04586,216,128,216s-27.6905,14.10686-39.77275,11.01563C75.73218,223.81879,69.69808,204.315,58.65931,198.238,47.45415,192.06928,27.77771,197.36958,18.52262,188.68274Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="189.3256" y1="122.66978" x2="216" y2="112.00002" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="66.67601" y1="122.67043" x2="40" y2="112.00002" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const SnapchatLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

SnapchatLogo.displayName = "SnapchatLogo";

export default SnapchatLogo;
