/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M200,24H56A16.01833,16.01833,0,0,0,40,40V216a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16V40A16.01833,16.01833,0,0,0,200,24ZM88,199.99219a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,88,199.99219Zm0-40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,88,159.99219Zm40,40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,128,199.99219Zm0-40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,128,159.99219Zm40,40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,168,199.99219Zm0-40a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,168,159.99219Zm16-56a7.99977,7.99977,0,0,1-8,8H80a7.99977,7.99977,0,0,1-8-8v-40a7.99977,7.99977,0,0,1,8-8h96a7.99977,7.99977,0,0,1,8,8Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <rect
      x="80"
      y="64"
      width="96"
      height="48"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <rect
      x="32"
      y="48"
      width="192"
      height="160"
      rx="8"
      transform="translate(256) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle cx="88" cy="148" r="12" />
    <circle cx="128" cy="148" r="12" />
    <circle cx="168" cy="148" r="12" />
    <circle cx="88" cy="188" r="12" />
    <circle cx="128" cy="188" r="12" />
    <circle cx="168" cy="188" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Calculator = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Calculator.displayName = 'Calculator';

export default Calculator;
