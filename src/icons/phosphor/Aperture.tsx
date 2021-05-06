/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M232,128A103.99994,103.99994,0,0,0,54.46094,54.46094,103.99951,103.99951,0,0,0,127.97,231.99951c.01,0,.0199.00244.03.00244.02148,0,.04321-.00244.0647-.00293A103.99851,103.99851,0,0,0,232,128ZM49.17554,88.91992l51.21631,9.35059L46.65076,161.53613A88.43277,88.43277,0,0,1,49.17554,88.91992Zm160.17383,5.54395a88.43282,88.43282,0,0,1-2.52491,72.61621l-51.21631-9.35059Zm-8.079-15.2041-33.7201,39.69628L139.63037,40.78027a87.98552,87.98552,0,0,1,61.64,38.4795ZM122.43164,40.19336l17.51148,49.03271L58.2959,74.32031a88.35033,88.35033,0,0,1,7.47851-8.54492A87.33436,87.33436,0,0,1,122.43164,40.19336Zm-67.702,136.54687L88.44971,137.044l27.91992,78.17578a87.98552,87.98552,0,0,1-61.64-38.4795Zm78.83875,39.06641-17.51148-49.03271,23.08216,4.21386.04553.0083,58.51953,10.6836a88.35033,88.35033,0,0,1-7.47851,8.54492A87.33436,87.33436,0,0,1,133.56836,215.80664Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="96"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="32"
      x2="164.6771"
      y2="134.69588"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="44.86156"
      y1="80"
      x2="152.13735"
      y2="99.58464"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="44.86156"
      y1="176"
      x2="115.46025"
      y2="92.88876"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="224"
      x2="91.3229"
      y2="121.30412"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="211.13844"
      y1="176"
      x2="103.86265"
      y2="156.41536"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="211.13844"
      y1="80"
      x2="140.53975"
      y2="163.11124"
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

const Aperture = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Aperture.displayName = 'Aperture';

export default Aperture;
