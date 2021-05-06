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
      d="M16.75 2.273a2.5 2.5 0 0 0-2.5 2.5v2.25h-.5a.75.75 0 0 0-.75.75v1.25h-.5v-.25a.75.75 0 0 0-.75-.75h-1a.75.75 0 0 0-.75.75v.25h-.5v-2.25a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0-.75.75v3a.754.754 0 0 0 .01.12A4.744 4.744 0 0 0 2 13.773c0 1.603.794 3.02 2.01 3.88a.779.779 0 0 0-.01.085v3.035h-.25a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2H8.5v-2.25H10v.25c0 .415.336.75.75.75h1a.75.75 0 0 0 .75-.75v-.25h6.25a.75.75 0 0 0 .75-.75v-1.25h2.25a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 0-.75-.75H19.5v-1.25a.75.75 0 0 0-.75-.75h-.25v-1.25a.75.75 0 0 0-.75-.75h-.313v-1.75h4.813v-3h-5.5zm-5 14.75h-1v-6.5h1v6.5zM7 18.523H5.5v1.5H7v-1.5zm1-11v1.5H5.5v-1.5H8zm6.5 1.5H17v-.5h-2.5v.5zm6.5 6h-1.5v-2.5H21v2.5zm-15.25-2.75a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm.5 1.5a.499.499 0 0 0-.5.5.5.5 0 0 0 .5.5h2a.5.5 0 1 0 0-1h-2z"
    />
  </>
));

pathsByWeight.set('regular', () => (
  <>
    <path d="M5.75 12.273a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zM5.75 14.273a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.25 7.023v-2.25a2.5 2.5 0 0 1 2.5-2.5h5.5v3h-4.813v1.75h.313a.75.75 0 0 1 .75.75v1.25h.25a.75.75 0 0 1 .75.75v1.25h2.25a.75.75 0 0 1 .75.75v4a.747.747 0 0 1-.199.51l-.027.027-.017.016a.755.755 0 0 1-.507.197H19.5v1.25a.75.75 0 0 1-.75.75H12.5v.25a.75.75 0 0 1-.75.75h-1a.748.748 0 0 1-.75-.75v-.25H8.5v2.25h13.25a1 1 0 0 1 0 2h-18a1 1 0 0 1 0-2H4v-3c0-.04.003-.08.01-.12A4.744 4.744 0 0 1 2 13.774c0-1.602.794-3.02 2.01-3.88a.762.762 0 0 1-.01-.12v-3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v2.25h.5v-.25a.747.747 0 0 1 .75-.75h1a.75.75 0 0 1 .75.75v.25h.5v-1.25a.75.75 0 0 1 .75-.75h.5zm1-2.25a1.5 1.5 0 0 1 1.5-1.5h4.5v1h-4.313a.5.5 0 0 0-.5.5v2.25H15.25v-2.25zM10 17.023H6.75a3.25 3.25 0 1 1 0-6.5H10v6.5zm2.5-6.5v6.5H18v-6.5h-5.5zm-5.5 8H5.5v1.5H7v-1.5zm1-11v1.5H5.5v-1.5H8zm9 1h-2.5v.5H17v-.5zm4 6.5h-1.5v-2.5H21v2.5z"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const PompaAir = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 24 24" renderPath={renderPath} />
));

PompaAir.displayName = 'PompaAir';

export default PompaAir;
