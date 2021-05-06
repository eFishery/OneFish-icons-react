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
    <path fillRule="evenodd" clipRule="evenodd" d="M14.52 3.273h-1v.472l-4.001 2a.5.5 0 0 0-.5-.472h-4a.5.5 0 0 0 0 1h.5v2h-1.5v1h.564l.977 1.303a.498.498 0 0 0 .46.697.5.5 0 0 0 .46-.696l.978-1.304h.562v-1h-1.5v-2h1.296l3.846 4.125-1.65 4.125H9.27v-1.25a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.75.75v1.25H1.75a.75.75 0 0 0-.542 1.27l5.27 5.5a.75.75 0 0 0 .542.23h13.5a.75.75 0 0 0 .724-.552l1.5-5.5a.75.75 0 0 0-.724-.948h-.75v-4.25a.75.75 0 0 0-.75-.75v-1.75a.5.5 0 1 0-1 0h-1a.5.5 0 1 0-1 0h-1a.5.5 0 1 0-1 0v1.75h-1v-6.25zm2 5.5v.75h1v-.75h-1zm2 0v.75h1v-.75h-1zM5.77 10.022l-.562-.749h.562v.749zm.5.002.563-.75H6.27v.75zM9.31 6.41l4.21-2.105v5.22h-1c-.091 0-.18.016-.262.046L9.31 6.41zm11.728 9.614-1.09 4H7.34l-3.833-4h17.531zm-5.518-3.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </>
));

pathsByWeight.set("regular", () => (
  <>
    <path d="M14.52 13.773a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM18.52 12.773a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M14.52 3.273h-1v.472l-4.001 2a.5.5 0 0 0-.5-.472h-4a.5.5 0 0 0 0 1h.5v2h-1.5v1h.564l.977 1.303a.498.498 0 0 0 .46.697.5.5 0 0 0 .46-.696l.978-1.304h.562v-1h-1.5v-2h1.296l3.846 4.125-1.65 4.125H9.27v-1.25a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0-.75.75v1.25H1.75a.75.75 0 0 0-.542 1.27l5.27 5.5a.75.75 0 0 0 .542.23h13.5a.75.75 0 0 0 .724-.552l1.5-5.5a.75.75 0 0 0-.724-.948h-.75v-4.25a.75.75 0 0 0-.75-.75v-1.75a.5.5 0 1 0-1 0h-1a.5.5 0 1 0-1 0h-1a.5.5 0 1 0-1 0v1.75h-1v-6.25zm2 5.5v.75h1v-.75h-1zm2 0v.75h1v-.75h-1zM5.77 10.022l-.562-.749h.562v.749zm.5.002.563-.75H6.27v.75zM9.31 6.41l4.21-2.105v5.22h-1c-.091 0-.18.016-.262.046L9.31 6.41zm-5.803 9.614h17.531l-1.09 4H7.34l-3.833-4zm4.263-2v.5h-3.5v-.5h3.5zm3.857.5h8.143v-3.5h-6.743l-1.4 3.5z"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Perahu = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 24 24' renderPath={renderPath} />
));

Perahu.displayName = "Perahu";

export default Perahu;
