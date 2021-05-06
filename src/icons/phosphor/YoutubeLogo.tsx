/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M234.33057,69.79736a23.96369,23.96369,0,0,0-14.50489-16.34619C185.55615,40.28223,130.97949,40.39209,128,40.40771c-2.978-.02392-57.55518-.126-91.8252,13.04346A23.96415,23.96415,0,0,0,21.66992,69.79639C19.083,79.72705,16,97.88574,16,128c0,30.11377,3.083,48.27246,5.66943,58.20264a23.96369,23.96369,0,0,0,14.50489,16.34619c32.80615,12.60693,84.22168,13.04541,91.167,13.04541.6206.00049.69678.00049,1.31738,0,6.95069-.00049,58.36231-.43945,91.16651-13.04541a23.96415,23.96415,0,0,0,14.50488-16.34522C236.917,176.273,240,158.11426,240,128,240,97.88623,236.917,79.72754,234.33057,69.79736Zm-72.11182,61.53076-48,32A3.99967,3.99967,0,0,1,108,160V96a3.99968,3.99968,0,0,1,6.21875-3.32813l48,32a3.99979,3.99979,0,0,1,0,6.65625Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <polygon
      points="160 128 112 96 112 160 160 128"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M24,128c0,29.75546,3.07414,47.21382,5.41108,56.18664a15.91682,15.91682,0,0,0,9.63282,10.89441C72.52083,207.94575,128,207.5925,128,207.5925s55.47857.35324,88.9558-12.51137a15.91684,15.91684,0,0,0,9.6329-10.89432C228.92572,175.214,232,157.75554,232,128s-3.07415-47.21382-5.41108-56.18664A15.91682,15.91682,0,0,0,216.9561,60.919C183.47917,48.05425,128,48.4075,128,48.4075s-55.47857-.35324-88.9558,12.51137a15.91684,15.91684,0,0,0-9.6329,10.89432C27.07427,80.786,24,98.24446,24,128Z"
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

const YoutubeLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

YoutubeLogo.displayName = 'YoutubeLogo';

export default YoutubeLogo;
