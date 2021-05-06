/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M4.5 10.273v-.5H6v.5H4.5zM16.5 10.523v-.75H19v.75h-2.5zM16.5 11.523v3.75H19v-3.75h-2.5zM11.25 13.773a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM6.25 13.773a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 8.023c0-.966.784-1.75 1.75-1.75h18c.966 0 1.75.784 1.75 1.75v9a1.75 1.75 0 0 1-1.75 1.75h-18A1.75 1.75 0 0 1 1 17.023v-9zm2.75.25a.75.75 0 0 0-.75.75v2c0 .415.336.75.75.75h3a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 0-.75-.75h-3zm12 0a.75.75 0 0 0-.75.75v7c0 .415.336.75.75.75h4a.75.75 0 0 0 .75-.75v-7a.75.75 0 0 0-.75-.75h-4zm-1.5 3.75a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm.5 1.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-5.75-1a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0zm-5 0a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0z"
    />
  </>
));

pathsByWeight.set('regular', () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 9.023a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v7a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-7zm1.5 2.5v3.75H19v-3.75h-2.5zm0-1H19v-.75h-2.5v.75zM3.75 8.273a.75.75 0 0 0-.75.75v2c0 .415.336.75.75.75h3a.75.75 0 0 0 .75-.75v-2a.75.75 0 0 0-.75-.75h-3zm.75 2v-.5H6v.5H4.5z"
    />
    <path d="M14.75 11.523a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM14.75 13.523a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM14.25 16.023a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 14.523a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0zm2.25-.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5zM6.25 12.273a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5zm-.75 2.25a.75.75 0 1 1 1.5 0 .75.75 0 0 1-1.5 0z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 8.023c0-.966.784-1.75 1.75-1.75h18c.966 0 1.75.784 1.75 1.75v9a1.75 1.75 0 0 1-1.75 1.75h-18A1.75 1.75 0 0 1 1 17.023v-9zm1.75-.25a.25.25 0 0 0-.25.25v9c0 .139.112.25.25.25h18a.25.25 0 0 0 .25-.25v-9a.25.25 0 0 0-.25-.25h-18z"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Cobox = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 24 24" renderPath={renderPath} />
));

Cobox.displayName = 'Cobox';

export default Cobox;
