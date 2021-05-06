/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M208,120H147.31348l66.34326-66.34326A7.99981,7.99981,0,0,0,208,40H48a7.99981,7.99981,0,0,0-5.65674,13.65674L108.68652,120H48a7.99981,7.99981,0,0,0-5.65674,13.65674l80,80.00049a8.00063,8.00063,0,0,0,11.31348,0l80-80.00049A7.99981,7.99981,0,0,0,208,120Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <polyline
      points="208 128 128 208 48 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="208 48 128 128 48 48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CaretDoubleDown = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

CaretDoubleDown.displayName = 'CaretDoubleDown';

export default CaretDoubleDown;
