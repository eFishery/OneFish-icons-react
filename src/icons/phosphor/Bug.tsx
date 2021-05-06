/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M167.92969,92a12,12,0,1,1-12-12A12,12,0,0,1,167.92969,92Zm-68-12a12,12,0,1,0,12,12A12,12,0,0,0,99.92969,80ZM252,128a8.00039,8.00039,0,0,1-8,8H216v8a87.78437,87.78437,0,0,1-3.24438,23.69629l23.16723,13.37549a8,8,0,1,1-8,13.85644l-20.96533-12.104a87.9757,87.9757,0,0,1-157.915,0l-20.96533,12.104a8,8,0,1,1-8-13.85644l23.16723-13.37549A87.78437,87.78437,0,0,1,40,144v-8H12a8,8,0,0,1,0-16H40v-8a87.787,87.787,0,0,1,3.24438-23.69629L20.07715,74.92822a8,8,0,0,1,8-13.85644L49.04248,73.17627a87.97531,87.97531,0,0,1,157.915,0l20.96533-12.10449a8,8,0,0,1,8,13.85644L212.75562,88.30371A87.787,87.787,0,0,1,216,112v8h28A8.00039,8.00039,0,0,1,252,128ZM136,144a8,8,0,0,0-16,0v64a8,8,0,0,0,16,0Zm64-32a72,72,0,0,0-144,0v8H200Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <circle cx="156" cy="92" r="12" />
    <circle cx="100" cy="92" r="12" />
    <line
      x1="128"
      y1="128"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="244"
      y1="128.00007"
      x2="12"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M208,144a80,80,0,0,1-160,0V112a80,80,0,0,1,160,0Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="231.92301"
      y1="188.00006"
      x2="203.18198"
      y2="171.40642"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="231.92308"
      y1="68.00006"
      x2="203.18193"
      y2="84.59378"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="24.07695"
      y1="68"
      x2="52.81817"
      y2="84.59375"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="24.07695"
      y1="188"
      x2="52.81789"
      y2="171.40641"
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

const Bug = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Bug.displayName = 'Bug';

export default Bug;
