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
    <path fillRule="evenodd" clipRule="evenodd" d="M1 5.273a1 1 0 0 1 1-1h6a1 1 0 0 1 .25 1.97v2.78H9a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.667.746c-2.354.261-4.069-.113-5.214-.953-1.165-.854-1.619-2.1-1.619-3.293v-5.5H2a1 1 0 0 1-1-1zm10 2.25a.75.75 0 0 0-.75.75v8c0 .415.336.75.75.75h2a.75.75 0 0 0 .75-.75v-8a.75.75 0 0 0-.75-.75h-2zm4 2a.75.75 0 0 0-.75.75v5c0 .415.336.75.75.75h1.25v2.25H16a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-.25v-4.5c0-1.644-.702-2.744-1.624-3.408-.884-.637-1.923-.842-2.626-.842H15z"/>
  </>
));

pathsByWeight.set("regular", () => (
  <>
    <path fillRule="evenodd" clipRule="evenodd" d="M1 5.273a1 1 0 0 1 1-1h6a1 1 0 0 1 .25 1.97v2.78H9a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-.667.746c-2.354.261-4.069-.113-5.214-.953-1.165-.854-1.619-2.1-1.619-3.293v-5.5H2a1 1 0 0 1-1-1zm7.25 5.25H7.5a.75.75 0 0 1-.75-.75v-2.75h-3v4.75c0 .808.296 1.562 1.006 2.083.65.477 1.743.827 3.494.729v-4.062zM10.25 8.273a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-.75.75h-2a.75.75 0 0 1-.75-.75v-8zm1.5.75v6.5h.5v-6.5h-.5zM15 9.523a.75.75 0 0 0-.75.75v5c0 .415.336.75.75.75h1.25v2.25H16a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2h-.25v-4.5c0-1.644-.702-2.744-1.624-3.408-.884-.637-1.923-.842-2.626-.842H15zm.75 5v-3.5h1.75c.463 0 1.175.146 1.75.559.535.386 1 1.036 1 2.191v3.75h-2.5v-2.25a.75.75 0 0 0-.75-.75h-1.25z"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Pipa = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 24 24' renderPath={renderPath} />
));

Pipa.displayName = "Pipa";

export default Pipa;
