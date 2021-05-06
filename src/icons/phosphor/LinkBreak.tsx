/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M87.99951,72V48a8,8,0,1,1,16,0V72a8,8,0,0,1-16,0Zm72,104a8.00039,8.00039,0,0,0-8,8v24a8,8,0,0,0,16,0V184A8.00039,8.00039,0,0,0,159.99951,176Zm-112-72h24a8,8,0,0,0,0-16h-24a8,8,0,1,0,0,16Zm160,48h-24a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Zm-86.05859,27.31348L110.62744,190.627a32,32,0,0,1-45.25586-45.2539L76.686,134.05957a7.99983,7.99983,0,0,0-11.3125-11.31445L54.05811,134.05957a48.00041,48.00041,0,0,0,67.88378,67.88184l11.31348-11.31348a8.00052,8.00052,0,0,0-11.31445-11.31445ZM190.62744,65.37207a32.03762,32.03762,0,0,1,.001,45.25488L179.314,121.94043a7.99983,7.99983,0,1,0,11.3125,11.31445l11.31543-11.31445a48.0004,48.0004,0,1,0-67.88378-67.88184L122.74463,65.37207a8.00052,8.00052,0,0,0,11.31445,11.31445l11.31348-11.31347A32.035,32.035,0,0,1,190.62744,65.37207Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="95.99951"
      y1="72"
      x2="95.99951"
      y2="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="159.99951"
      y1="208"
      x2="159.99951"
      y2="184"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="71.99951"
      y1="96"
      x2="47.99951"
      y2="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="207.99951"
      y1="160"
      x2="183.99951"
      y2="160"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M71.02944,128.402,59.71573,139.71573a40,40,0,0,0,56.56854,56.56854L127.598,184.97056"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M184.97056,127.598l11.31371-11.31371a40,40,0,0,0-56.56854-56.56854L128.402,71.02944"
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

const LinkBreak = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

LinkBreak.displayName = 'LinkBreak';

export default LinkBreak;
