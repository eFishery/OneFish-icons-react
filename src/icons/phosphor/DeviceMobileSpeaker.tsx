/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M176,16H80A24.0275,24.0275,0,0,0,56,40V216a24.0275,24.0275,0,0,0,24,24h96a24.0275,24.0275,0,0,0,24-24V40A24.0275,24.0275,0,0,0,176,16ZM160,64H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <rect
      x="24"
      y="64"
      width="208"
      height="128"
      rx="16"
      transform="translate(256) rotate(90)"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="96"
      y1="56"
      x2="160"
      y2="56"
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

const DeviceMobileSpeaker = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

DeviceMobileSpeaker.displayName = 'DeviceMobileSpeaker';

export default DeviceMobileSpeaker;
