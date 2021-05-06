/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25488,58.74512a7.97769,7.97769,0,0,0,5.65723-2.34278l22.62695-22.62695a8.00052,8.00052,0,1,0-11.31445-11.31445l-22.627,22.627a8,8,0,0,0,5.65722,13.65723ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.08789,47.59766a8.00052,8.00052,0,0,0-11.31445,11.31445l22.627,22.62695a8.00052,8.00052,0,1,0,11.31445-11.31445ZM128,184a8.00039,8.00039,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8.00039,8.00039,0,0,0,128,184ZM77.08789,167.59766l-22.62695,22.627a8.00052,8.00052,0,0,0,11.31445,11.31445l22.62695-22.62695a8.00052,8.00052,0,0,0-11.31445-11.31445ZM72,128a8.00039,8.00039,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8.00039,8.00039,0,0,0,72,128ZM65.77539,54.46094A8.00052,8.00052,0,0,0,54.46094,65.77539l22.627,22.62695A8.00052,8.00052,0,0,0,88.40234,77.08789Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="128"
      y1="32"
      x2="128"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="195.88225"
      y1="60.11775"
      x2="173.25483"
      y2="82.74517"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="224"
      y1="128"
      x2="192"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="195.88225"
      y1="195.88225"
      x2="173.25483"
      y2="173.25483"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="224"
      x2="128"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="60.11775"
      y1="195.88225"
      x2="82.74517"
      y2="173.25483"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="32"
      y1="128"
      x2="64"
      y2="128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="60.11775"
      y1="60.11775"
      x2="82.74517"
      y2="82.74517"
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

const Spinner = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Spinner.displayName = 'Spinner';

export default Spinner;
