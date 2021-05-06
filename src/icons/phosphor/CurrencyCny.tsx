/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M56,64a8.00008,8.00008,0,0,1,8-8H192a8,8,0,0,1,0,16H64A8.00008,8.00008,0,0,1,56,64ZM216,168a8.00039,8.00039,0,0,0-8,8v16H176a16.01833,16.01833,0,0,1-16-16V128h48a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16H96v8a56.0629,56.0629,0,0,1-56,56,8,8,0,0,0,0,16,72.08124,72.08124,0,0,0,72-72v-8h32v48a32.03667,32.03667,0,0,0,32,32h40a8.00039,8.00039,0,0,0,8-8V176A8.00039,8.00039,0,0,0,216,168Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="64"
      y1="64"
      x2="192"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="120"
      x2="208"
      y2="120"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M152,120v56a24,24,0,0,0,24,24h40V176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104,120v16a64,64,0,0,1-64,64"
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

const CurrencyCny = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

CurrencyCny.displayName = 'CurrencyCny';

export default CurrencyCny;
