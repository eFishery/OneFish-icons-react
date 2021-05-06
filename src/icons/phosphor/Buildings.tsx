/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <path d="M240,207.98316h-8.00586v-104a16.01833,16.01833,0,0,0-16-16h-64v-48a16.01833,16.01833,0,0,0-16-16h-96a16.01833,16.01833,0,0,0-16,16v168H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16Zm-120.00586-72a8.00009,8.00009,0,0,1-8,8h-32a8,8,0,0,1,0-16h32A8.00008,8.00008,0,0,1,119.99414,135.98316Zm-56-72h32a8,8,0,1,1,0,16h-32a8,8,0,0,1,0-16Zm0,104h32a8,8,0,1,1,0,16h-32a8,8,0,0,1,0-16Zm88-64h64v104h-64Z" />
      <path d="M191.99414,167.98316h-16a8,8,0,0,0,0,16h16a8,8,0,1,0,0-16Z" />
      <path d="M175.99414,143.98316h16a8,8,0,1,0,0-16h-16a8,8,0,0,0,0,16Z" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="16"
      y1="215.98316"
      x2="240"
      y2="215.98316"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M143.99414,215.98316v-176a8,8,0,0,0-8-8h-96a8,8,0,0,0-8,8v176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M223.99414,215.98316v-112a8,8,0,0,0-8-8h-72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="63.99414"
      y1="71.98316"
      x2="95.99414"
      y2="71.98316"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="79.99414"
      y1="135.98316"
      x2="111.99414"
      y2="135.98316"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="63.99414"
      y1="175.98316"
      x2="95.99414"
      y2="175.98316"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="175.99414"
      y1="175.98316"
      x2="191.99414"
      y2="175.98316"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="175.99414"
      y1="135.98316"
      x2="191.99414"
      y2="135.98316"
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

const Buildings = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Buildings.displayName = 'Buildings';

export default Buildings;
