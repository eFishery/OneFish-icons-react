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
    <path d="M5.5 8.023v2.5H9v-2.5H5.5z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M4.75 2.273a1 1 0 0 0-.969 1.25H1.75a.75.75 0 0 0-.75.75v12c0 .415.336.75.75.75h2v.5h-2a.75.75 0 0 0-.75.75v4c0 .415.336.75.75.75h20a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75h-2v-.5h2a.75.75 0 0 0 .75-.75v-12a.75.75 0 0 0-.75-.75h-2.032a1 1 0 1 0-1.936 0H5.718a1.002 1.002 0 0 0-.968-1.25zm13 14.75h-12v.5h12v-.5zm-6.25-12v8.25c0 .415.336.75.75.75h7a.75.75 0 0 0 .75-.75v-8.25h-1.5v7.5H13v-7.5h-1.5zM4 7.273a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1-.75-.75v-4zm.25 5.5a.5.5 0 0 0 0 1h6a.5.5 0 1 0 0-1h-6zm12.15-7.18a.75.75 0 0 1 .363.998l-.835 1.79h.822a.75.75 0 0 1 .637 1.146l-1.334 2.143a.75.75 0 0 1-1.273-.793l.62-.996h-.65a.75.75 0 0 1-.68-1.068l1.334-2.857a.75.75 0 0 1 .997-.362z"/>
  </>
));

pathsByWeight.set("regular", () => (
  <>
    <path d="M16.763 6.59a.75.75 0 1 0-1.36-.633L14.07 8.813a.749.749 0 0 0 .68 1.068h.65l-.62.996a.75.75 0 1 0 1.274.793l1.333-2.143a.75.75 0 0 0-.637-1.146h-.822l.835-1.79z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M4.75 6.523a.75.75 0 0 0-.75.75v4c0 .415.336.75.75.75h5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75h-5zm.75 4v-2.5H9v2.5H5.5z"/>
  <path d="M3.75 13.273a.5.5 0 0 1 .5-.5h6a.498.498 0 0 1 .5.5.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M3.75 3.273a1 1 0 1 1 1.969.25h12.063a1 1 0 1 1 1.936 0h2.032a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75h-2v.5h2a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-.75.75h-20a.75.75 0 0 1-.75-.75v-4a.747.747 0 0 1 .75-.75h2v-.5h-2a.749.749 0 0 1-.73-.574l-.008-.043A.755.755 0 0 1 1 16.274v-12a.75.75 0 0 1 .75-.75h2.031a1.03 1.03 0 0 1-.031-.25zm14 14.25v-.5h-12v.5h12zM13 5.023h5.5v7.5H13v-7.5zm-1.5 8.25v-8.25h-9v10.5H21v-10.5h-1v8.25a.75.75 0 0 1-.75.75h-7a.748.748 0 0 1-.75-.75zm-9 5.75v2.5H21v-2.5H2.5z"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Genset = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 24 24' renderPath={renderPath} />
));

Genset.displayName = "Genset";

export default Genset;
