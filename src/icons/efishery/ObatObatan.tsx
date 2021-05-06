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
      d="M5.75 2.273A1.75 1.75 0 0 0 4 4.023v1c0 .699.409 1.301 1 1.582v1.191l-1.874 2.811a.75.75 0 0 0-.126.416v7.5a2.75 2.75 0 0 0 2.75 2.75h3.5c.14 0 .271-.038.383-.105a3.735 3.735 0 0 1-.476-1.395H5.75c-.69 0-1.25-.56-1.25-1.25h4.703a3.74 3.74 0 0 1 1.713-2.437l4.584-2.809v-2.254a.75.75 0 0 0-.126-.416L13.5 7.797V6.604c.591-.28 1-.883 1-1.582v-1a1.75 1.75 0 0 0-1.75-1.75h-7zm7.765 8.25h-8.53L6.374 8.44a.75.75 0 0 0 .126-.416v-.75H12v.75a.75.75 0 0 0 .126.416l1.39 2.084zM5.5 4.023a.25.25 0 0 1 .25-.25h7a.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25h-7a.25.25 0 0 1-.25-.25v-1zm3.75 9a.5.5 0 0 0-.5.5v1h-1.5a.5.5 0 0 0 0 1h1.5v1a.5.5 0 1 0 1 0v-1h1.5a.5.5 0 1 0 0-1h-1.5v-1a.5.5 0 0 0-.5-.5z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.318 20.851a3 3 0 0 1 .99-4.125l5.116-3.135a3 3 0 0 1 3.135 5.116l-5.116 3.135a3 3 0 0 1-4.125-.99zm6.503-.57-3-5 .858-.515 3 5-.858.515z"
    />
  </>
));

pathsByWeight.set('regular', () => (
  <>
    <path d="M8.75 13.523a.5.5 0 0 1 1 0v1h1.5a.5.5 0 0 1 0 1h-1.5v1a.5.5 0 1 1-1 0v-1h-1.5a.5.5 0 1 1 0-1h1.5v-1z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.75 2.273A1.75 1.75 0 0 0 4 4.023v1c0 .699.409 1.301 1 1.582v1.191l-1.874 2.811a.75.75 0 0 0-.126.416v7.5a2.75 2.75 0 0 0 2.75 2.75h3.946a3.75 3.75 0 0 0 5.139 1.21l5.116-3.136a3.75 3.75 0 1 0-3.919-6.395l-.532.326v-2.255a.75.75 0 0 0-.126-.416L13.5 7.797V6.604c.591-.28 1-.883 1-1.582v-1a1.75 1.75 0 0 0-1.75-1.75h-7zm3.454 16.25a3.755 3.755 0 0 0-.047 1.25H5.75c-.69 0-1.25-.56-1.25-1.25h4.704zm1.712-2.436a3.732 3.732 0 0 0-1.352 1.436H4.5v-6H14v2.675l-3.084 1.89zm2.6-5.564H4.984L6.374 8.44a.75.75 0 0 0 .126-.416v-.75H12v.75a.75.75 0 0 0 .126.416l1.39 2.084zM5.5 4.023a.25.25 0 0 1 .25-.25h7a.25.25 0 0 1 .25.25v1a.25.25 0 0 1-.25.25h-7a.25.25 0 0 1-.25-.25v-1zm6.2 13.343a2.25 2.25 0 1 0 2.351 3.837l2.43-1.489-2.316-3.858-2.465 1.51zm3.318-2.033 2.316 3.859 1.833-1.124a2.25 2.25 0 0 0-2.351-3.837l-1.798 1.102z"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ObatObatan = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 24 24" renderPath={renderPath} />
));

ObatObatan.displayName = 'ObatObatan';

export default ObatObatan;
