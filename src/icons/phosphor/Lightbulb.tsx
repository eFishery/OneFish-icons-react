/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M176.00244,232a8.00039,8.00039,0,0,1-8,8h-80a8,8,0,1,1,0-16h80A8.00039,8.00039,0,0,1,176.00244,232Zm40-128a87.54306,87.54306,0,0,1-33.6416,69.208,16.23078,16.23078,0,0,0-6.3584,12.76758V192a16.01833,16.01833,0,0,1-16,16h-64a16.01833,16.01833,0,0,1-16-16v-6.03125A16.01813,16.01813,0,0,0,73.773,173.30957a87.57621,87.57621,0,0,1-33.76953-68.81445c-.2627-47.66211,38.26367-87.34961,85.88183-88.47071A88.00123,88.00123,0,0,1,216.00244,104Zm-32.78808-9.39648a55.85,55.85,0,0,0-45.76465-45.708,7.99953,7.99953,0,1,0-2.6543,15.77734A39.83978,39.83978,0,0,1,167.439,97.27734a8.00261,8.00261,0,0,0,7.87793,6.66407,8.103,8.103,0,0,0,1.34668-.11329A8,8,0,0,0,183.21436,94.60352Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="88"
      y1="232"
      x2="168"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M78.7037,167.0114a79.86051,79.86051,0,0,1-30.70248-62.55993C47.76161,61.08915,82.72,25.04306,126.071,24.02272a80.00322,80.00322,0,0,1,51.34165,142.89737,24.288,24.288,0,0,0-9.4124,19.05581l-.00009,6.02422a8,8,0,0,1-8,7.99988H95.99984a8,8,0,0,1-8-7.99986l-.0001-6.0311A24.10047,24.10047,0,0,0,78.7037,167.0114Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M136.12232,56.784A47.923,47.923,0,0,1,175.327,95.94041"
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

const Lightbulb = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Lightbulb.displayName = 'Lightbulb';

export default Lightbulb;
