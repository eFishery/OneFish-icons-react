/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M200,40H160a16.01833,16.01833,0,0,0-16,16v88a16,16,0,0,1-32,0V56A16.01833,16.01833,0,0,0,96,40H56A16.01833,16.01833,0,0,0,40,56v88a87.99955,87.99955,0,0,0,87.99512,88c.22265,0,.44726-.001.6709-.00195,48.15625-.35743,87.334-40.28321,87.334-89.002V56A16.01833,16.01833,0,0,0,200,40Zm0,16V96H160V56ZM96,56V96H56V56Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="48"
      y1="96"
      x2="104"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="152"
      y1="96"
      x2="208"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M104,144a24,24,0,0,0,48,0V56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8v86.9957c0,44.11169-35.28293,80.675-79.39341,81.00205A80.00008,80.00008,0,0,1,48,144V56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8Z"
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

const MagnetStraight = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

MagnetStraight.displayName = 'MagnetStraight';

export default MagnetStraight;
