/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V200a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216,40ZM125.08643,175.74512a8.00256,8.00256,0,0,1-9.74219-5.75293,24.01011,24.01011,0,0,0-46.48779.00146,8.00008,8.00008,0,1,1-15.49512-3.98828,39.896,39.896,0,0,1,16.36023-23.16162,32.00008,32.00008,0,1,1,44.75793,0,39.89755,39.89755,0,0,1,16.35987,23.15918A8.00051,8.00051,0,0,1,125.08643,175.74512ZM192,152H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z" />
      <circle cx="92.10059" cy="120" r="16" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="152"
      y1="112"
      x2="192"
      y2="112"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="152"
      y1="144"
      x2="192"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="92.10043"
      cy="120"
      r="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M61.10869,167.99952a32.01032,32.01032,0,0,1,61.98292-.00215"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="32"
      y="48.00005"
      width="192"
      height="160"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const IdentificationCard = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

IdentificationCard.displayName = 'IdentificationCard';

export default IdentificationCard;
