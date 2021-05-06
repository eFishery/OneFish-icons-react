/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M223.51465,47.51465H32.48535a16.99025,16.99025,0,0,0-16.9707,16.9707v127.0293a16.99025,16.99025,0,0,0,16.9707,16.9707h191.0293a16.99025,16.99025,0,0,0,16.9707-16.9707V64.48535A16.99025,16.99025,0,0,0,223.51465,47.51465ZM64,168H56a8,8,0,0,1,0-16h8a8,8,0,0,1,0,16Zm96,0H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm40,0h-8a8,8,0,0,1,0-16h8a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16H200a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16H200a8,8,0,0,1,0,16Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <rect
      x="24"
      y="56"
      width="208"
      height="144"
      rx="8.48528"
      strokeWidth="16.97056"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="56"
      y1="128"
      x2="200"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="56"
      y1="96"
      x2="200"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="56"
      y1="160"
      x2="64"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="96"
      y1="160"
      x2="160"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="192"
      y1="160"
      x2="200"
      y2="160"
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

const Keyboard = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Keyboard.displayName = 'Keyboard';

export default Keyboard;
