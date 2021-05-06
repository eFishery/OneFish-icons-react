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
    <path d="M77.74854,43.58691a8.00009,8.00009,0,0,1,14.78222-6.123l7.65332,18.47754a8.00009,8.00009,0,1,1-14.78222,6.123ZM21.46387,108.53027l18.47754,7.65332a7.99964,7.99964,0,1,0,6.123-14.78125L27.58691,93.749a7.99964,7.99964,0,1,0-6.123,14.78125ZM213,116.79492a7.97082,7.97082,0,0,0,3.05859-.61133l18.47754-7.65332a7.99964,7.99964,0,1,0-6.123-14.78125l-18.47754,7.65332A8.001,8.001,0,0,0,213,116.79492ZM160.14551,66.39355a7.99266,7.99266,0,0,0,10.45263-4.3291l7.65332-18.47754a8.00009,8.00009,0,0,0-14.78222-6.123l-7.65332,18.47754A7.99929,7.99929,0,0,0,160.14551,66.39355ZM240,152H195.52319a68,68,0,1,0-135.04638,0H16a8,8,0,0,0,0,16H185.81812l.02905.00195L185.87085,168H240a8,8,0,0,0,0-16Zm-32,40H48a8,8,0,0,0,0,16H208a8,8,0,0,0,0-16Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="92.79312" y1="59.00308" x2="85.13946" y2="40.52549" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="43.00308" y1="108.79312" x2="24.52549" y2="101.13946" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="212.99692" y1="108.79312" x2="231.47451" y2="101.13946" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="163.20688" y1="59.00308" x2="170.86054" y2="40.52549" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="240" y1="160" x2="16" y2="160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="208" y1="200" x2="48" y2="200" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M70.157,160.00035a60,60,0,1,1,115.686-.00008" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const SunHorizon = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

SunHorizon.displayName = "SunHorizon";

export default SunHorizon;
