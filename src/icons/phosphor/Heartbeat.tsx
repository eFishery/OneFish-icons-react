/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M176,32a59.85506,59.85506,0,0,0-48,23.95947A60.02029,60.02029,0,0,0,20,92a85.2156,85.2156,0,0,0,4.92969,28H67.71875l13.625-20.4375a7.99959,7.99959,0,0,1,13.3125,0L120,137.57764l9.34375-14.01514A7.99943,7.99943,0,0,1,136,120h24a8,8,0,0,1,0,16H140.28125l-13.625,20.4375a7.99959,7.99959,0,0,1-13.3125,0L88,118.42236,78.65625,132.4375A7.99943,7.99943,0,0,1,72,136H31.98389c26.65088,49.81006,88.77392,85.11328,92.10693,86.98a8.00089,8.00089,0,0,0,7.81836,0,317.34027,317.34027,0,0,0,51.44238-37.53369C218.28613,154.00488,236,122.56494,236,92A60.06812,60.06812,0,0,0,176,32Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <polyline
      points="32 128 72 128 88 104 120 152 136 128 160 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M28.11427,95.99348Q28.00077,94.004,28,92A52.00881,52.00881,0,0,1,128.00008,71.965l-.00019.00008A52.00881,52.00881,0,0,1,228,92c0,68-100,124-100,124s-39.94466-22.369-69.34251-55.99891"
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

const Heartbeat = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Heartbeat.displayName = 'Heartbeat';

export default Heartbeat;
