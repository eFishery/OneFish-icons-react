/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.75 2.273A4.75 4.75 0 0 0 7 7.023c0 .415.336.75.75.75H8v2.25a3.75 3.75 0 1 0 7.5 0v-2.25h2.25a.75.75 0 0 0 0-1.5h-1.309a4.751 4.751 0 0 0-4.691-4zm2.25 5.5v2.25a2.25 2.25 0 1 1-4.5 0v-2.25H14z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.25 13.273a.75.75 0 0 0-.668.41l-.003.006-.023.04a3.347 3.347 0 0 1-.617.734c-.454.404-1.159.81-2.189.81s-1.735-.406-2.19-.81a3.348 3.348 0 0 1-.616-.734 1.305 1.305 0 0 1-.023-.04l-.003-.006a.75.75 0 0 0-.668-.41h-.5A3.75 3.75 0 0 0 4 17.023v4c0 .415.336.75.75.75h14a.75.75 0 0 0 .75-.75v-4a3.75 3.75 0 0 0-3.75-3.75h-.5zM11 16.72v3.553h1.5V16.72a5.162 5.162 0 0 1-1.5 0z"
    />
  </>
));

pathsByWeight.set('regular', () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.75 14.773a2.25 2.25 0 0 0-2.25 2.25v3.25H18v-3.25a2.25 2.25 0 0 0-2.25-2.25h-.086a4.85 4.85 0 0 1-.728.811c-.67.596-1.716 1.19-3.186 1.19s-2.515-.594-3.186-1.19a4.845 4.845 0 0 1-.728-.81H7.75zm1.17-1.086v-.001l-.001-.002c0 .001 0 .002.002.003zm5.662-.004a.75.75 0 0 1 .668-.41h.5a3.75 3.75 0 0 1 3.75 3.75v4a.75.75 0 0 1-.75.75h-14a.75.75 0 0 1-.75-.75v-4a3.75 3.75 0 0 1 3.75-3.75h.5c.282 0 .541.16.669.411l.002.005.023.04a3.348 3.348 0 0 0 .617.734c.454.404 1.159.81 2.189.81s1.735-.406 2.19-.81a3.347 3.347 0 0 0 .616-.734l.023-.04.002-.006zm-.003.004.002-.004v.003l-.002.001zm-5.66-.004z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.441 6.273A4.751 4.751 0 0 0 7 7.023c0 .415.336.75.75.75H8v2.25a3.75 3.75 0 1 0 7.5 0v-2.25h2.25a.75.75 0 0 0 0-1.5h-1.309zm-7.854 0h6.326a3.251 3.251 0 0 0-6.326 0zM14 7.773H9.5v2.25a2.25 2.25 0 1 0 4.5 0v-2.25zM11 21.023v-5h1.5v5H11z"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Petugas = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 24 24" renderPath={renderPath} />
));

Petugas.displayName = 'Petugas';

export default Petugas;
