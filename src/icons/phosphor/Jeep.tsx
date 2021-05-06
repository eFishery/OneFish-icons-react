/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M240,88H226.93848l-6.03809-42.26465A16.07879,16.07879,0,0,0,205.06152,32H50.93848A16.08053,16.08053,0,0,0,35.09863,45.7373L29.06128,88H16a8,8,0,0,0,0,16H28V208a16.01833,16.01833,0,0,0,16,16H68a16.01833,16.01833,0,0,0,16-16V184h20V128a8,8,0,0,1,16,0v56h16V128a8,8,0,0,1,16,0v56h20v24a16.01833,16.01833,0,0,0,16,16h24a16.01833,16.01833,0,0,0,16-16V104h12a8,8,0,0,0,0-16ZM72,144a12,12,0,1,1,12-12A12,12,0,0,1,72,144Zm112,0a12,12,0,1,1,12-12A12,12,0,0,1,184,144Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M220,176v32a8,8,0,0,1-8,8H188a8,8,0,0,1-8-8V176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M76,176v32a8,8,0,0,1-8,8H44a8,8,0,0,1-8-8V176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="16"
      y1="96"
      x2="240"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="144"
      y1="128"
      x2="144"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="112"
      y1="128"
      x2="112"
      y2="176"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M220,176H36V96.00005l7.01877-49.13142A8,8,0,0,1,50.93836,40H205.06164a8,8,0,0,1,7.91959,6.86863L220,96.00005Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="72" cy="132" r="12" />
    <circle cx="184" cy="132" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Jeep = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Jeep.displayName = 'Jeep';

export default Jeep;
