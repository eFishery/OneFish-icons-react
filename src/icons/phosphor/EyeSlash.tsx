/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <g>
      <path d="M247.31055,124.75842c-.35157-.79-8.81934-19.57519-27.65332-38.41113C194.57324,61.26038,162.87793,47.99963,128,47.99963a133.97063,133.97063,0,0,0-21.99512,1.793,8.00028,8.00028,0,0,0-4.60254,13.27246L202.69336,174.485a8.00126,8.00126,0,0,0,11.25781.57715c22.8125-20.43359,32.93946-42.86035,33.35938-43.80566A8.00282,8.00282,0,0,0,247.31055,124.75842Z" />
      <path d="M53.91992,34.6178A8.0006,8.0006,0,1,0,42.08008,45.38147l19.24121,21.165c-36.321,22.291-51.93628,56.648-52.63184,58.21191a8.00282,8.00282,0,0,0,0,6.49805c.35157.791,8.82032,19.57226,27.6543,38.4043,25.084,25.081,56.77832,38.33886,91.65625,38.33886a126.97091,126.97091,0,0,0,52.06567-10.834l22.01441,24.21582a8.0006,8.0006,0,0,0,11.83984-10.76367ZM128,164.00012a35.98594,35.98594,0,0,1-29.52319-56.582l47.20459,51.9248A35.78086,35.78086,0,0,1,128,164.00012Z" />
    </g>
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="48"
      y1="40.00122"
      x2="208"
      y2="216.00122"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M154.9071,157.599a40.00028,40.00028,0,0,1-53.8142-59.19562"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M73.99446,68.59479C33.22519,89.24034,16,128.00122,16,128.00122s32,71.99219,112,71.99219a118.0238,118.0238,0,0,0,53.99756-12.59461"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M208.60953,169.10059C230.41132,149.57342,240,128.00122,240,128.00122S208,55.99341,128,55.99341a125.31923,125.31923,0,0,0-20.68221,1.68414"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M135.52737,88.709a40.02411,40.02411,0,0,1,32.29785,35.52874"
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

const EyeSlash = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

EyeSlash.displayName = 'EyeSlash';

export default EyeSlash;
