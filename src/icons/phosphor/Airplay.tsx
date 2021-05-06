/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <path d="M134.07666,154.794a8.0003,8.0003,0,0,0-12.14844-.00049l-48.00293,56A8,8,0,0,0,79.99951,224h96a8.00032,8.00032,0,0,0,6.07422-13.20605Z" />
      <path d="M208.00244,40H47.99951a24.0275,24.0275,0,0,0-24,24V176a24.0275,24.0275,0,0,0,24,24h14.104l47.67919-55.62231a24.00045,24.00045,0,0,1,36.44239.0039L193.895,200h14.10742a24.0275,24.0275,0,0,0,24-24V64A24.0275,24.0275,0,0,0,208.00244,40Z" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <polygon
      points="128.002 160 176 216 80 216 128.002 160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M64,192H48a16,16,0,0,1-16-16V64A16,16,0,0,1,48,48H208a16,16,0,0,1,16,16V176a16,16,0,0,1-16,16H192"
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

const Airplay = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Airplay.displayName = 'Airplay';

export default Airplay;
