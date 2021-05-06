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
      d="M7 6.023a4.75 4.75 0 1 1 9.5 0 .75.75 0 0 1-.75.75h-.25v2.25a3.75 3.75 0 1 1-7.5 0v-2.25h-.25a.75.75 0 0 1-.75-.75zm7 .75v1.5H9.5v-1.5H14z"
    />
    <path d="M7.75 13.773a2.25 2.25 0 0 0-2.25 2.25v3.25h5.75a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75v-4a3.75 3.75 0 0 1 3.75-3.75h.5a.75.75 0 0 1 .668.41l.003.006.023.04a3.348 3.348 0 0 0 .617.734c.454.404 1.159.81 2.189.81s1.735-.406 2.19-.81a3.347 3.347 0 0 0 .616-.734l.023-.04.002-.006a.75.75 0 0 1 .669-.41h.5a3.75 3.75 0 0 1 3.75 3.75v.5a.75.75 0 1 1-1.5 0v-.5a2.25 2.25 0 0 0-2.25-2.25h-.086a4.85 4.85 0 0 1-.728.811c-.67.596-1.716 1.19-3.186 1.19s-2.515-.594-3.186-1.19a4.845 4.845 0 0 1-.728-.81H7.75z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 16.023a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5v.636c1.233.34 2.25 1.294 2.25 2.614 0 1.667-1.62 2.75-3.25 2.75s-3.25-1.083-3.25-2.75c0-1.32 1.017-2.274 2.25-2.614v-.636a.75.75 0 0 1-.75-.75zm.274 3.344h.021c.389-.013.818.03 1.179.21.489.244.738.3.944.266.183-.03.418-.148.792-.494-.287-.32-.781-.576-1.46-.576-.691 0-1.191.265-1.476.594z"
    />
  </>
));

pathsByWeight.set('regular', () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.75 6.773H8v2.25a3.75 3.75 0 0 0 7.5 0v-2.25h.25a.75.75 0 0 0 .75-.75 4.75 4.75 0 1 0-9.5 0c0 .415.336.75.75.75zm.837-1.5h6.326a3.251 3.251 0 0 0-6.326 0zm5.413 3v-1.5H9.5v1.5H14zm-.128 1.5a2.251 2.251 0 0 1-4.244 0h4.244z"
    />
    <path d="M5.5 16.023a2.25 2.25 0 0 1 2.25-2.25h.086c.159.224.398.518.728.811.67.596 1.716 1.19 3.186 1.19s2.515-.594 3.186-1.19c.33-.293.569-.587.728-.81h.086a2.25 2.25 0 0 1 2.25 2.25v.5a.75.75 0 1 0 1.5 0v-.5a3.75 3.75 0 0 0-3.75-3.75h-.5a.75.75 0 0 0-.668.41l-.003.005-.023.04a3.347 3.347 0 0 1-.617.734c-.454.404-1.159.81-2.189.81s-1.735-.406-2.19-.81a3.348 3.348 0 0 1-.616-.734 1.305 1.305 0 0 1-.023-.04l-.003-.006a.75.75 0 0 0-.668-.41h-.5A3.75 3.75 0 0 0 4 16.023v4c0 .415.336.75.75.75h6.5a.75.75 0 1 0 0-1.5H5.5v-3.25z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 16.023a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5v.636c1.233.34 2.25 1.294 2.25 2.614 0 1.667-1.62 2.75-3.25 2.75s-3.25-1.083-3.25-2.75c0-1.32 1.017-2.274 2.25-2.614v-.636a.75.75 0 0 1-.75-.75zm.274 3.344h.021c.389-.012.819.03 1.179.21.489.244.738.3.944.266.184-.03.418-.148.792-.494-.287-.32-.78-.576-1.46-.576-.691 0-1.191.265-1.476.594zm3.073 1.149c-.248.16-.498.269-.765.313-.544.09-1.045-.103-1.555-.358-.146-.073-.383-.115-.701-.105-.08.002-.161.008-.244.016.203.452.776.891 1.668.891.803 0 1.348-.356 1.597-.757z"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const PetugasLab = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 24 24" renderPath={renderPath} />
));

PetugasLab.displayName = 'PetugasLab';

export default PetugasLab;
