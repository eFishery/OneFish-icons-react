/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M232,64V48a16.01833,16.01833,0,0,0-16-16H40A16.01833,16.01833,0,0,0,24,48V64A16.01833,16.01833,0,0,0,40,80v96H32a8,8,0,0,0,0,16h88v17.37622a24,24,0,1,0,16,0V192h88a8,8,0,0,0,0-16h-8V80A16.01833,16.01833,0,0,0,232,64ZM128,240a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,128,240ZM40,48H216l.00977,16H40Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="48"
      y1="184"
      x2="48"
      y2="72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="208"
      y1="72"
      x2="208"
      y2="184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <rect
      x="32"
      y="40"
      width="192"
      height="32"
      rx="8"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="128"
      y1="184"
      x2="128"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128"
      cy="232"
      r="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="184"
      x2="224"
      y2="184"
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

const ProjectorScreen = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

ProjectorScreen.displayName = 'ProjectorScreen';

export default ProjectorScreen;
