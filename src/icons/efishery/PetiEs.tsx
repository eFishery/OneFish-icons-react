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
      d="M7.75 1.273A2.75 2.75 0 0 0 5 4.023v5h13.5v-5a2.75 2.75 0 0 0-2.75-2.75h-8zm.5 3.75a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 1 0v-1a.5.5 0 0 0-.5-.5zM5 19.023v-9h13.5v9a2.75 2.75 0 0 1-2.75 2.75v.25a1 1 0 1 1-2 0v-.25h-4v.25a1 1 0 1 1-2 0v-.25A2.75 2.75 0 0 1 5 19.023zm2.75-5.5a.5.5 0 0 1 1 0v1a.5.5 0 1 1-1 0v-1z"
    />
  </>
));

pathsByWeight.set('regular', () => (
  <>
    <path d="M7.75 5.523a.5.5 0 0 1 1 0v1a.5.5 0 0 1-1 0v-1zM8.25 13.023a.5.5 0 0 0-.5.5v1a.5.5 0 1 0 1 0v-1a.5.5 0 0 0-.5-.5z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.75 1.273A2.75 2.75 0 0 0 5 4.023v15a2.75 2.75 0 0 0 2.75 2.75v.25a1 1 0 0 0 2 0v-.25h4v.25a1 1 0 0 0 2 0v-.25a2.75 2.75 0 0 0 2.75-2.75v-15a2.75 2.75 0 0 0-2.75-2.75h-8zM6.5 4.023c0-.69.56-1.25 1.25-1.25h8c.69 0 1.25.56 1.25 1.25v5H6.5v-5zm0 6v9c0 .69.56 1.25 1.25 1.25h8c.69 0 1.25-.56 1.25-1.25v-9H6.5z"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const PetiEs = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 24 24" renderPath={renderPath} />
));

PetiEs.displayName = 'PetiEs';

export default PetiEs;
