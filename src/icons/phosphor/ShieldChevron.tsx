/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M207.99951,32.00012h-160a16.01818,16.01818,0,0,0-16,16v58.66651c0,89.45312,75.82617,119.12451,91.02637,124.16406a15.48361,15.48361,0,0,0,9.94726.00049c15.2002-5.04,91.02637-34.71143,91.02637-124.16455V48.00012A16.01817,16.01817,0,0,0,207.99951,32.00012Zm-160,16h160v58.66651c0,17.68237-3.39453,32.69653-8.79639,45.4104L132.5874,105.44617a8.00131,8.00131,0,0,0-9.17578,0L56.79541,152.077c-5.40137-12.71387-8.7959-27.728-8.7959-45.4104Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M40,106.66667V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.66667c0,84.01533-71.306,111.85016-85.5438,116.57058a7.54755,7.54755,0,0,1-4.9124,0C111.306,218.51683,40,190.682,40,106.66667Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="202.402 164.082 128 112 53.597 164.082"
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

const ShieldChevron = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

ShieldChevron.displayName = 'ShieldChevron';

export default ShieldChevron;
