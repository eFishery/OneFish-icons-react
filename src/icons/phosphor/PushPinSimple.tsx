/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M224,176a8.00008,8.00008,0,0,1-8,8H200.02393l-.0337.00146L199.95752,184H136v56a8,8,0,0,1-16,0V184H56.04248l-.03271.00146L55.97607,184H40a8,8,0,0,1,0-16h9.28857L70.46484,48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16h-6.46484l21.17627,120H216A8.00008,8.00008,0,0,1,224,176Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="128"
      y1="176"
      x2="128"
      y2="240"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="64"
      y1="40"
      x2="192"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="40"
      y1="176"
      x2="216"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="56"
      y1="176"
      x2="80"
      y2="40"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="176"
      y1="40"
      x2="200"
      y2="176"
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

const PushPinSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

PushPinSimple.displayName = 'PushPinSimple';

export default PushPinSimple;
