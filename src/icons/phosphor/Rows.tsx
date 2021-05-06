/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M224,152v40a16.01833,16.01833,0,0,1-16,16H48a16.01833,16.01833,0,0,1-16-16V152a16.01833,16.01833,0,0,1,16-16H208A16.01833,16.01833,0,0,1,224,152ZM208,48H48A16.01833,16.01833,0,0,0,32,64v40a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V64A16.01833,16.01833,0,0,0,208,48Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <rect
      x="40"
      y="144"
      width="176"
      height="56"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="40"
      y="56"
      width="176"
      height="56"
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

const Rows = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Rows.displayName = 'Rows';

export default Rows;
