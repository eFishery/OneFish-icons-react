/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M120,80V184a8.00008,8.00008,0,0,1-8,8H96v16h16a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H80V192H32A24.0275,24.0275,0,0,1,8,168V96A24.0275,24.0275,0,0,1,32,72h80A8.00008,8.00008,0,0,1,120,80ZM248,48V208a16.01833,16.01833,0,0,1-16,16H152a16.01833,16.01833,0,0,1-16-16V48a16.01833,16.01833,0,0,1,16-16h80A16.01833,16.01833,0,0,1,248,48ZM204,180a12,12,0,1,0-12,12A12.01343,12.01343,0,0,0,204,180Zm20-76a8.00008,8.00008,0,0,0-8-8H168a8,8,0,0,0,0,16h48A8.00008,8.00008,0,0,0,224,104Zm0-32a8.00008,8.00008,0,0,0-8-8H168a8,8,0,0,0,0,16h48A8.00008,8.00008,0,0,0,224,72Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M112,184H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80h80"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="112"
      y1="216"
      x2="64"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="208"
      y1="72"
      x2="176"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="208"
      y1="104"
      x2="176"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="144"
      y="40"
      width="96"
      height="176"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="88"
      y1="184"
      x2="88"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="192" cy="180" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const DesktopTower = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

DesktopTower.displayName = 'DesktopTower';

export default DesktopTower;
