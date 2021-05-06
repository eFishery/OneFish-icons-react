/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M224,48H32A16.01833,16.01833,0,0,0,16,64V96.73633c-.00049.03906-.00586.07715-.00586.11621s.00537.07715.00586.11621V192a16.01833,16.01833,0,0,0,16,16H224a16.01833,16.01833,0,0,0,16-16V64A16.01833,16.01833,0,0,0,224,48ZM135.99414,176h-16a8,8,0,0,1,0-16h16a8,8,0,1,1,0,16Zm64,0h-32a8,8,0,0,1,0-16h32a8,8,0,1,1,0,16ZM32,88.85254V64H224l.002,24.85254Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <rect
      x="24"
      y="56"
      width="208"
      height="144"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="167.99414"
      y1="168"
      x2="199.99414"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="119.99414"
      y1="168"
      x2="135.99414"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="23.99414"
      y1="96.85228"
      x2="231.99412"
      y2="96.85228"
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

const CreditCard = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

CreditCard.displayName = 'CreditCard';

export default CreditCard;
