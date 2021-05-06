/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M80,64a8.00008,8.00008,0,0,1,8-8H216a8,8,0,0,1,0,16H88A8.00008,8.00008,0,0,1,80,64Zm136,56H88.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16Zm0,64H88.00586a8,8,0,1,0,0,16H216a8,8,0,0,0,0-16ZM44,116a12,12,0,1,0,12,12A12.01343,12.01343,0,0,0,44,116Zm0-64A12,12,0,1,0,56,64,12.01343,12.01343,0,0,0,44,52Zm0,128a12,12,0,1,0,12,12A12.01343,12.01343,0,0,0,44,180Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="88"
      y1="64"
      x2="216"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88.00614"
      y1="128"
      x2="216"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="88.00614"
      y1="192"
      x2="216"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="44" cy="64" r="12" />
    <circle cx="44" cy="128" r="12" />
    <circle cx="44" cy="192" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ListBullets = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

ListBullets.displayName = 'ListBullets';

export default ListBullets;
