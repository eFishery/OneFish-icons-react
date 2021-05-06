/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <path d="M213.91992,210.61816l-160-176A8.0006,8.0006,0,1,0,42.08008,45.38184L80,87.09375V128a47.9902,47.9902,0,0,0,73.91211,40.39685l10.875,11.96252A63.99208,63.99208,0,0,1,64.39062,135.12109a7.9996,7.9996,0,0,0-15.90234,1.75782A79.83705,79.83705,0,0,0,120,207.59692V232a8,8,0,0,0,16,0V207.59082a79.72,79.72,0,0,0,39.62012-15.31506l26.46,29.10608a8.0006,8.0006,0,1,0,11.83984-10.76368Z" />
      <path d="M162.08008,129.81055A8.0004,8.0004,0,0,0,176,124.42871V64A48.0045,48.0045,0,0,0,87.15527,38.77539a8.00113,8.00113,0,0,0,.88379,9.59082Z" />
      <path d="M192.165,161.665a7.99262,7.99262,0,0,0,10.36426-4.53613,79.61568,79.61568,0,0,0,4.98242-20.25,7.9996,7.9996,0,0,0-15.90235-1.75782,63.67417,63.67417,0,0,1-3.98046,16.17969A7.99991,7.99991,0,0,0,192.165,161.665Z" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M176.42693,181.28138A72.00558,72.00558,0,0,1,56.43944,136.00006"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M154.90249,157.60205A39.85421,39.85421,0,0,1,128.00009,168H128a40,40,0,0,1-40-40V84.00214"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="128"
      y1="200"
      x2="128"
      y2="232"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="48"
      y1="40"
      x2="208"
      y2="216"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M93.95906,42.98434A39.97457,39.97457,0,0,1,128,24h.00008A39.99991,39.99991,0,0,1,168,63.99991V124.4291"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M199.56055,136.00017a71.54827,71.54827,0,0,1-4.48193,18.2151"
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

const MicrophoneSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

MicrophoneSlash.displayName = 'MicrophoneSlash';

export default MicrophoneSlash;
