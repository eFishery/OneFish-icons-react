/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <path d="M168.82324,74a7.99606,7.99606,0,0,0,10.92822,2.92822l4.66822-2.69519A23.999,23.999,0,0,0,192,78.6239V84a8,8,0,0,0,16,0V78.6239a23.999,23.999,0,0,0,7.58032-4.39087l4.66822,2.69519a8,8,0,0,0,8-13.85644l-4.65674-2.68866a23.73636,23.73636,0,0,0,0-8.76624l4.65674-2.68866a8,8,0,1,0-8-13.85644L215.58032,37.767A23.999,23.999,0,0,0,208,33.3761V28a8,8,0,0,0-16,0v5.3761a23.999,23.999,0,0,0-7.58032,4.39087l-4.66822-2.69519a8,8,0,0,0-8,13.85644l4.65674,2.68866a23.73636,23.73636,0,0,0,0,8.76624l-4.65674,2.68866A8.00032,8.00032,0,0,0,168.82324,74ZM200,48a8,8,0,1,1-8,8A8.00917,8.00917,0,0,1,200,48Z" />
      <path d="M231.93652,211.98633a120.48718,120.48718,0,0,0-67.12-54.14258,72.17933,72.17933,0,0,0,34.18786-49.8808,24.03068,24.03068,0,0,1-20.874-14.07977q-1.18011.11783-2.37158.11828a24.02578,24.02578,0,0,1-19.51672-38.00152,24.06161,24.06161,0,0,1-1.27454-26.0011c.11694-.20264.24707-.3949.36963-.59326A71.9779,71.9779,0,0,0,91.18359,157.84375a120.48811,120.48811,0,0,0-67.11865,54.14063,7.99981,7.99981,0,0,0,6.92432,12.00634l194.023.002a7.99957,7.99957,0,0,0,6.92431-12.00635Z" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <circle
      cx="200"
      cy="56"
      r="16"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200"
      y1="40"
      x2="200"
      y2="28"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="186.14359"
      y1="48"
      x2="175.75129"
      y2="42"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="186.14359"
      y1="64"
      x2="175.75129"
      y2="70"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="200"
      y1="72"
      x2="200"
      y2="84"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="213.85641"
      y1="64"
      x2="224.24871"
      y2="70"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="213.85641"
      y1="48"
      x2="224.24871"
      y2="42"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M186.62671,121.70942a63.97327,63.97327,0,1,1-49.76733-89.10119"
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

const UserGear = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

UserGear.displayName = 'UserGear';

export default UserGear;
