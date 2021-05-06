/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M246.84081,80.49756a15.76545,15.76545,0,0,0-6.231-10.95215c-66.30273-50.03516-158.9165-50.03516-225.22021,0l-.00049.00049a15.73787,15.73787,0,0,0-6.21045,10.936,16.28081,16.28081,0,0,0,3.76074,12.27344l102.86035,121.231a16.15644,16.15644,0,0,0,3.97534,3.38556,15.97543,15.97543,0,0,0,8.25709,2.29852h.00048a15.84564,15.84564,0,0,0,10.90992-4.34833,16.03046,16.03046,0,0,0,1.198-1.26544L243.09227,92.71729A16.20974,16.20974,0,0,0,246.84081,80.49756Zm-15.94873,1.86816-47.10327,55.516a95.96888,95.96888,0,0,0-111.57813-.00012L25.14013,82.4043a.23245.23245,0,0,1-.05958-.12744c60.625-45.71192,145.28174-45.69922,205.85694-.01954A.138.138,0,0,1,230.89208,82.36572Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M92.91969,166.06177a50.7769,50.7769,0,0,1,70.145,0"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="128" cy="200" r="12" />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const WifiLow = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

WifiLow.displayName = 'WifiLow';

export default WifiLow;
