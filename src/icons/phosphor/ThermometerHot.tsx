/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M160,143.27441V48a40,40,0,0,0-80,0v95.27441a60,60,0,1,0,80,0ZM120,24a24.02718,24.02718,0,0,1,24,24v8H96V48A24.02718,24.02718,0,0,1,120,24Zm58.05908,61.65723a8.00034,8.00034,0,0,1,0-11.31446,27.99923,27.99923,0,0,1,39.59766,0,12.01214,12.01214,0,0,0,16.9707,0,8.00018,8.00018,0,0,1,11.31348,11.31446,27.99923,27.99923,0,0,1-39.59766,0,12.01214,12.01214,0,0,0-16.9707,0A8.00182,8.00182,0,0,1,178.05908,85.65723Zm67.88184,28.68554a8.00034,8.00034,0,0,1,0,11.31446,27.99923,27.99923,0,0,1-39.59766,0,12.01214,12.01214,0,0,0-16.9707,0,8.00018,8.00018,0,0,1-11.31348-11.31446,27.99923,27.99923,0,0,1,39.59766,0,12.01214,12.01214,0,0,0,16.9707,0A8.00182,8.00182,0,0,1,245.94092,114.34277Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <circle
      cx="120"
      cy="188"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="120"
      y1="168"
      x2="120"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M240.28427,80A20,20,0,0,1,212,80a20,20,0,0,0-28.28427,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M240.28427,120A20,20,0,0,1,212,120a20,20,0,0,0-28.28427,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M88,147.02548V48a32,32,0,0,1,64,0v99.02548l.00787-.01006a52,52,0,1,1-64.01574,0Z"
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

const ThermometerHot = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

ThermometerHot.displayName = 'ThermometerHot';

export default ThermometerHot;
