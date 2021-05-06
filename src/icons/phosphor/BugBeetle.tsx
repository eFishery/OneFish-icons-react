/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M50.416,33.7959A7.99956,7.99956,0,0,1,61.44336,22.2041L80.10742,39.959a79.84411,79.84411,0,0,1,95.70777-.05908L194.416,22.2041a7.99956,7.99956,0,1,1,11.02734,11.5918L187.63013,50.74268A79.69432,79.69432,0,0,1,207.59912,96H48.40088A79.69482,79.69482,0,0,1,68.30664,50.81543ZM32,96a8,8,0,0,0,0,16H48V96Zm176,56c0,2.7002-.13843,5.36816-.40088,8H224a8,8,0,0,1,0,16H204.31714a80.00273,80.00273,0,0,1-152.63428,0H32a8,8,0,0,1,0-16H48.40088C48.13843,157.36816,48,154.7002,48,152v-8H32a8,8,0,0,1,0-16H48V112H208v16h16a8,8,0,0,1,0,16H208Zm-72-16a8,8,0,0,0-16,0v64a8,8,0,0,0,16,0Zm96-32a8.00039,8.00039,0,0,0-8-8H208v16h16A8.00039,8.00039,0,0,0,232,104Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <rect
      x="56"
      y="32"
      width="144"
      height="192"
      rx="71.99993"
      strokeWidth="16"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="200"
      y1="136"
      x2="224"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="136"
      x2="56"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="168"
      x2="57.78445"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="104"
      x2="224"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="136"
      x2="128"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="198.21531"
      y1="168"
      x2="224"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="55.92969"
      y1="28"
      x2="79.69497"
      y2="50.6085"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="199.92969"
      y1="28"
      x2="176.23303"
      y2="50.54341"
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

const BugBeetle = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

BugBeetle.displayName = 'BugBeetle';

export default BugBeetle;
