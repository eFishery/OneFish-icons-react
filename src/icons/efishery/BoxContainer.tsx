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
      d="M2 8.023c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v.455a1.75 1.75 0 0 1-1.74 1.75l-.058.386h.23a1.318 1.318 0 0 1 0 2.637h-.626l-.678 4.52a.75.75 0 0 1-.742.639H5.614a.75.75 0 0 1-.742-.639l-.678-4.52h-.626a1.318 1.318 0 0 1 0-2.637h.23l-.058-.386A1.75 1.75 0 0 1 2 8.478v-.455zm1.568 3.591h.38l.096.637h-.476a.318.318 0 1 1 0-.637zm15.888.637h.476a.318.318 0 1 0 0-.637h-.38l-.096.637zM8.955 10.228v1.295a2.795 2.795 0 1 0 5.59 0v-1.295h-1.5v1.295a1.295 1.295 0 1 1-2.59 0v-1.295h-1.5z"
    />
  </>
));

pathsByWeight.set('regular', () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 8.023c0-.966.784-1.75 1.75-1.75h16c.966 0 1.75.784 1.75 1.75v.455a1.75 1.75 0 0 1-1.74 1.75l-.058.385h.23a1.318 1.318 0 0 1 0 2.637h-.625l-.679 4.522a.75.75 0 0 1-.741.638H5.614a.75.75 0 0 1-.742-.638l-.678-4.522h-.625a1.318 1.318 0 1 1 0-2.637h.23l-.058-.385A1.75 1.75 0 0 1 2 8.478v-.455zm1.949 3.59h-.38a.318.318 0 1 0 0 .637h.475l-.095-.637zm15.982.637h-.474l.095-.637h.38a.318.318 0 1 1 0 .637zM3.75 7.773a.25.25 0 0 0-.25.25v.455c0 .138.112.25.25.25h16a.25.25 0 0 0 .25-.25v-.455a.25.25 0 0 0-.25-.25h-16zm1.508 2.456L6.26 16.91h10.98l1.003-6.681h-3.697v1.295a2.795 2.795 0 0 1-5.59 0v-1.295H5.257zm5.197 0v1.295a1.295 1.295 0 0 0 2.591 0v-1.295h-2.59z"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const BoxContainer = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 24 24" renderPath={renderPath} />
));

BoxContainer.displayName = 'BoxContainer';

export default BoxContainer;
