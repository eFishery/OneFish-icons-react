/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M216,96H176V56a7.99977,7.99977,0,0,0-8-8H48V40a8,8,0,0,0-16,0V216a8,8,0,0,0,16,0v-8h88a7.99977,7.99977,0,0,0,8-8V160h72a7.99977,7.99977,0,0,0,8-8V104A7.99977,7.99977,0,0,0,216,96ZM160,64V96H48V64ZM128,192H48V160h80Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="40"
      y1="216"
      x2="40"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="40 56 168 56 168 104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="40"
      y="104"
      width="176"
      height="48"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="136 152 136 200 40 200"
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

const ChartBarHorizontal = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

ChartBarHorizontal.displayName = 'ChartBarHorizontal';

export default ChartBarHorizontal;
