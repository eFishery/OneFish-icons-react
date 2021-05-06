/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M168,224a8.00039,8.00039,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8.00039,8.00039,0,0,1,168,224Zm39.80469-112A79.70738,79.70738,0,0,0,128.6084,32.002c-.2041-.001-.40625-.002-.61035-.002a79.89888,79.89888,0,0,0-79.79492,80c0,34.33594-7.07911,53.7207-13.01661,63.93555A15.99886,15.99886,0,0,0,48.9834,200H207.0166a15.99808,15.99808,0,0,0,13.79785-24.06055C214.87988,165.72363,207.80469,146.33789,207.80469,112Zm20.72265-49.43164a112.28362,112.28362,0,0,0-40.82421-45.34473,7.9996,7.9996,0,1,0-8.54,13.5293,96.29849,96.29849,0,0,1,35.01074,38.88574,8.0002,8.0002,0,1,0,14.35351-7.07031ZM41.82617,69.63867A96.29849,96.29849,0,0,1,76.83691,30.75293a7.99959,7.99959,0,1,0-8.54-13.5293A112.28357,112.28357,0,0,0,27.47266,62.56836a8.0002,8.0002,0,1,0,14.35351,7.07031Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="96"
      y1="224"
      x2="160"
      y2="224"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M56.20305,112a71.80121,71.80121,0,1,1,143.60186,0h0c0,35.81563,7.49325,56.59893,14.093,67.95814A7.999,7.999,0,0,1,207.01628,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M183.43247,23.98832a104.46641,104.46641,0,0,1,37.91845,42.1156"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M34.64909,66.10391A104.46639,104.46639,0,0,1,72.56757,23.98829"
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

const BellSimpleRinging = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

BellSimpleRinging.displayName = 'BellSimpleRinging';

export default BellSimpleRinging;
