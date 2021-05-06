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
    <path d="M12.248 2.463a.75.75 0 0 0-.996 0l-9 8a.75.75 0 1 0 .996 1.121l8.502-7.557 8.502 7.557a.75.75 0 0 0 .996-1.121l-9-8z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="m4.262 11.454 7-6a.75.75 0 0 1 .976 0l7 6a.75.75 0 0 1 .262.57v9.25h1.25a.75.75 0 0 1 0 1.5h-18a.75.75 0 1 1 0-1.5H4v-9.25a.75.75 0 0 1 .262-.57zM15 15.774v1.816a.498.498 0 0 0-.25-.067h-6a.498.498 0 0 0-.25.067v-1.817H15zm-2.25 2.75v1a.5.5 0 1 0 1 0v-1h.5v2h-2v-2h.5zm-3 1v-1h-.5v2h2v-2h-.5v1a.5.5 0 1 1-1 0zm5.25-5.25v-.5H8.5v.5H15z"/>
  </>
));

pathsByWeight.set("regular", () => (
  <>
    <path d="M12.248 2.463a.75.75 0 0 0-.996 0l-9 8a.75.75 0 1 0 .996 1.121l8.502-7.557 8.502 7.557a.75.75 0 0 0 .996-1.121l-9-8z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="m19.238 11.454-7-6a.75.75 0 0 0-.976 0l-7 6a.75.75 0 0 0-.262.57v9.25H2.75a.75.75 0 0 0 0 1.5h18a.75.75 0 1 0 0-1.5H19.5v-9.25a.75.75 0 0 0-.262-.57zM7 21.274H5.5v-8.906l6.25-5.357L18 12.368v8.905h-1.5v-8.25a.75.75 0 0 0-.75-.75h-8a.75.75 0 0 0-.75.75v8.25zm4.25-2.75h-.5v1a.5.5 0 1 1-1 0v-1h-.5v2h2v-2zm-2.5-1a.498.498 0 0 0-.25.066v-1.817H15v1.817a.498.498 0 0 0-.25-.067h-6zm4 1v1a.5.5 0 1 0 1 0v-1h.5v2h-2v-2h.5zm-4.25-4.25v-.5H15v.5H8.5z"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Gudang = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 24 24' renderPath={renderPath} />
));

Gudang.displayName = "Gudang";

export default Gudang;
