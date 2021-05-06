/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M14.703 2.344a3.25 3.25 0 0 0-4.36 1.453l-4 8A3.25 3.25 0 0 0 9.178 16.5l-.632.948a3.25 3.25 0 0 0 5.408 3.605l4-6a3.25 3.25 0 0 0-2.704-5.052h-.741l1.648-3.297a3.25 3.25 0 0 0-1.454-4.36z" />
  </>
));

pathsByWeight.set('regular', () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.343 3.797a3.25 3.25 0 1 1 5.814 2.907l-1.648 3.297h.741a3.25 3.25 0 0 1 2.704 5.053l-4 6a3.25 3.25 0 0 1-4.507.9l.416-.623-.416.624a3.25 3.25 0 0 1-.901-4.507l.632-.948a3.25 3.25 0 0 1-2.835-4.703l4-8zm3.69-.112a1.75 1.75 0 0 0-2.348.783l-4 8a1.75 1.75 0 0 0 1.565 2.533h1.329a.75.75 0 0 1 .624 1.166l-1.41 2.113a1.75 1.75 0 1 0 2.913 1.941l4-6a1.75 1.75 0 0 0-1.456-2.72h-1.955a.75.75 0 0 1-.67-1.086l2.19-4.382a1.75 1.75 0 0 0-.782-2.348z"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Listrik = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 24 24" renderPath={renderPath} />
));

Listrik.displayName = 'Listrik';

export default Listrik;
