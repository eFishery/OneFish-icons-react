/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <path d="M135.99707,65.376V39.99988a8,8,0,0,0-16,0V65.376a23.995,23.995,0,0,0,0,45.2478v105.3761a8,8,0,0,0,16,0V110.62378a23.995,23.995,0,0,0,0-45.2478Z" />
      <path d="M223.99707,167.99988a24.03744,24.03744,0,0,0-16-22.6239l.001-105.3761a8,8,0,1,0-16,0l-.001,105.3761a23.995,23.995,0,0,0,0,45.2478l.001,25.3761a8,8,0,0,0,16,0l-.001-25.37622A24.03728,24.03728,0,0,0,223.99707,167.99988Z" />
      <path d="M63.99707,113.376l-.00049-73.3761a8,8,0,0,0-16,0l.00049,73.3761a23.995,23.995,0,0,0,0,45.2478l-.00049,57.3761a8,8,0,1,0,16,0l.00049-57.3761a23.995,23.995,0,0,0,0-45.2478Z" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="128.00098"
      y1="108"
      x2="128.0011"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128.0011"
      y1="40"
      x2="128.00098"
      y2="68"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="128.00098"
      cy="88"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200.00098"
      y1="188"
      x2="200.00181"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200.00181"
      y1="40"
      x2="200.00098"
      y2="148"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="200.00098"
      cy="168"
      r="20"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="56.00098"
      y1="156"
      x2="56.00039"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="56.00039"
      y1="40"
      x2="56.00098"
      y2="116"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle
      cx="56.00098"
      cy="136"
      r="20"
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

const Sliders = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Sliders.displayName = 'Sliders';

export default Sliders;
