/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M230.24694,163.00293A8,8,0,0,1,223.99988,176H48v40a8,8,0,1,1-16,0V48a8.00039,8.00039,0,0,1,8-8H223.99988a8,8,0,0,1,6.24706,12.99707L186.245,108Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <polyline
      points="40 216 40 48 40 48 224 48 176 108 224 168 40 168"
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

const FlagBanner = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

FlagBanner.displayName = 'FlagBanner';

export default FlagBanner;
