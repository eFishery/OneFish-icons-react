/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <path d="M215.99365,31.99414H71.98682a8,8,0,1,0,0,16H207.99365v136.001a8,8,0,0,0,16,0V39.99414A8.00008,8.00008,0,0,0,215.99365,31.99414Z" />
      <rect x="31.98682" y="63.99512" width="160.00586" height="160" rx="8" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <polyline
      points="215.993 183.995 215.993 39.994 71.986 39.994"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="39.98633"
      y="71.99512"
      width="144.00586"
      height="144"
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

const CopySimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

CopySimple.displayName = 'CopySimple';

export default CopySimple;
