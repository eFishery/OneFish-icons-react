/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <circle cx="127.99414" cy="140" r="12" />
      <path d="M207.99414,80h-36V52a44,44,0,1,0-88,0V80h-36a16.01833,16.01833,0,0,0-16,16V208a16.01833,16.01833,0,0,0,16,16h160a16.01833,16.01833,0,0,0,16-16V96A16.01833,16.01833,0,0,0,207.99414,80Zm-72,86.82935V184a8,8,0,1,1-16,0V166.82935a28,28,0,1,1,16,0Zm20-86.82935h-56V52a28,28,0,1,1,56,0Z" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <circle
      cx="127.99414"
      cy="140"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="127.99414"
      y1="160"
      x2="127.99414"
      y2="184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="39.99414"
      y="88"
      width="176"
      height="128"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M91.99414,88V52a36,36,0,1,1,72,0V88"
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

const LockKey = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

LockKey.displayName = 'LockKey';

export default LockKey;
