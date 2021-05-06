/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M215.07227,144.95117a8.00019,8.00019,0,0,1-4.14161-15.45508l22.95557-6.15088A112.20282,112.20282,0,0,0,136,48.28271V72a8,8,0,0,1-16,0V48.29443c-45.14648,3.23975-83.01074,33.69385-97.582,75.13233l22.65137,6.06933a8.0002,8.0002,0,1,1-4.14161,15.45508L18.18945,138.8584A114.064,114.064,0,0,0,16,161.12891V184a16.01833,16.01833,0,0,0,16,16H87.22314L165.48389,98.00879a8.00009,8.00009,0,0,1,12.69384,9.74023L107.39062,200H224a16.01833,16.01833,0,0,0,16-16V160a113.2326,113.2326,0,0,0-1.99658-21.19336Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M24,184V161.12886C24,103.65,70.15361,56.19953,127.63214,56.00066A104,104,0,0,1,232,160v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,184Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="56"
      x2="128"
      y2="88"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="27.54371"
      y1="133.08282"
      x2="58.45334"
      y2="141.36503"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="228.45629"
      y1="133.08282"
      x2="197.54666"
      y2="141.36503"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="103.44553"
      y1="192.00001"
      x2="171.83082"
      y2="102.87856"
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

const Gauge = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Gauge.displayName = 'Gauge';

export default Gauge;
