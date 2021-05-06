/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M223.4873,169.18066a7.96262,7.96262,0,0,0,.49805-1.166A103.91753,103.91753,0,0,0,187.772,42.94336a8.06306,8.06306,0,0,0-1.13965-.79053A103.94567,103.94567,0,0,0,42.61768,187.31152c.04.07129.07324.145.11572.21582a7.9667,7.9667,0,0,0,.80664,1.08985A103.847,103.847,0,0,0,191.2627,210.48242a7.98,7.98,0,0,0,1.40283-1.0957A104.572,104.572,0,0,0,223.4873,169.18066ZM61.48,185.55664l3.91345-2.362A16.00133,16.00133,0,0,0,73.126,169.585l.18967-33.81841a8.0001,8.0001,0,0,1,1.25578-4.2583L88.60582,109.513a8,8,0,0,1,11.43777-2.17522l12.78356,9.26186a15.95634,15.95634,0,0,0,11.53418,2.89844l31.48144-4.26367a15.99269,15.99269,0,0,0,9.94971-5.38477L187.94873,84.25A15.92874,15.92874,0,0,0,191.833,73.01074l-.2793-5.813a87.914,87.914,0,0,1,21.28272,84.187l-15.93116-14.57032a16.05451,16.05451,0,0,0-16.939-2.96777l-30.45166,12.65723a15.99852,15.99852,0,0,0-9.68738,12.44255l-2.38489,16.19612a15.98468,15.98468,0,0,0,11.76807,17.80762l21.4585,5.63085,3.98828,3.9961A87.85932,87.85932,0,0,1,61.48,185.55664Z" />
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
    <path
      d="M49.58637,183.394l11.67782-7.04953a8,8,0,0,0,3.86546-6.80393l.2028-36.12908a7.99993,7.99993,0,0,1,1.25581-4.2583L86.43083,98.05553a8,8,0,0,1,11.43769-2.17521l19.6558,14.24066a8,8,0,0,0,5.76724,1.44922l31.48043-4.2633a8,8,0,0,0,4.97543-2.69227l22.15711-25.60081a8,8,0,0,0,1.94172-5.61949L182.678,49.09089"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M187.06688,203.68283l-10.73163-10.75292a8,8,0,0,0-3.6318-2.08674L151.245,185.21189a8,8,0,0,1-5.884-8.90337l2.38477-16.19606a8,8,0,0,1,4.84416-6.22191l30.45053-12.65666a8,8,0,0,1,8.46961,1.48392l24.8944,22.768"
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

const GlobeHemisphereEast = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

GlobeHemisphereEast.displayName = 'GlobeHemisphereEast';

export default GlobeHemisphereEast;
