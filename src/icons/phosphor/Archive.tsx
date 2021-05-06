/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M224,48H32A16.01833,16.01833,0,0,0,16,64V88a16.01833,16.01833,0,0,0,16,16v88a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V104a16.01833,16.01833,0,0,0,16-16V64A16.01833,16.01833,0,0,0,224,48Zm-72,96H104a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm72-56H32V64H224l.00977,24Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <rect
      x="24"
      y="56"
      width="208"
      height="40"
      rx="7.99999"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="136"
      x2="152"
      y2="136"
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

const Archive = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Archive.displayName = 'Archive';

export default Archive;
