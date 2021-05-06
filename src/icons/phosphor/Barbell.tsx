/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M248,120h-8V88a16.01833,16.01833,0,0,0-16-16H208V64a16.01833,16.01833,0,0,0-16-16H168a16.01833,16.01833,0,0,0-16,16v56H104V64A16.01833,16.01833,0,0,0,88,48H64A16.01833,16.01833,0,0,0,48,64v8H32A16.01833,16.01833,0,0,0,16,88v32H8a8,8,0,0,0,0,16h8v32a16.01833,16.01833,0,0,0,16,16H48v8a16.01833,16.01833,0,0,0,16,16H88a16.01833,16.01833,0,0,0,16-16V136h48v56a16.01833,16.01833,0,0,0,16,16h24a16.01833,16.01833,0,0,0,16-16v-8h16a16.01833,16.01833,0,0,0,16-16V136h8a8,8,0,0,0,0-16ZM32,168V88H48v80Zm192,0H208V88h16Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <rect
      x="56"
      y="56"
      width="40"
      height="144"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="160"
      y="56"
      width="40"
      height="144"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M200,80h24a8,8,0,0,1,8,8v80a8,8,0,0,1-8,8H200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56,176H32a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H56"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="128"
      x2="160"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="232"
      y1="128"
      x2="248"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="8"
      y1="128"
      x2="24"
      y2="128"
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

const Barbell = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Barbell.displayName = 'Barbell';

export default Barbell;
