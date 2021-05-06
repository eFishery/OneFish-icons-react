/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M235.42676,138.83984A16.02871,16.02871,0,0,1,223.66553,144H136v56a16,16,0,0,0,32,0,8,8,0,0,1,16,0,32,32,0,0,1-64,0V144H32.33447a16.02123,16.02123,0,0,1-15.94775-17.37012,112.00665,112.00665,0,0,1,223.22656,0A16.11107,16.11107,0,0,1,235.42676,138.83984Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M176,200a24,24,0,0,1-48,0V136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M32.33457,136a8.021,8.021,0,0,1-7.97506-8.70945,104.00633,104.00633,0,0,1,207.281,0A8.021,8.021,0,0,1,223.66543,136Z"
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

const UmbrellaSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

UmbrellaSimple.displayName = 'UmbrellaSimple';

export default UmbrellaSimple;
