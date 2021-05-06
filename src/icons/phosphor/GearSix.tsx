/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M238.26562,108.35476A15.96155,15.96155,0,0,0,230.269,97.16189L209.74561,85.76883c-1.315-2.5503-2.75342-5.0459-4.29981-7.46094l.395-23.4917a15.93081,15.93081,0,0,0-5.68213-12.50977,111.53059,111.53059,0,0,0-34.03808-19.62158,15.96193,15.96193,0,0,0-13.69288,1.32862L132.2998,36.09109c-2.86816-.13623-5.749-.13916-8.61132-.00683L103.542,23.99637a15.92639,15.92639,0,0,0-13.67578-1.33448A111.52894,111.52894,0,0,0,55.854,42.32986a15.96061,15.96061,0,0,0-5.69482,12.522l.39453,23.47022c-1.55127,2.415-2.99365,4.90869-4.31152,7.45459L25.70117,97.179a15.96884,15.96884,0,0,0-8.00049,11.21436,111.54254,111.54254,0,0,0,.0337,39.25244A15.96155,15.96155,0,0,0,25.731,158.83865l20.52343,11.39307c1.31495,2.55029,2.75342,5.0459,4.29981,7.46094l-.395,23.49169a15.93079,15.93079,0,0,0,5.68213,12.50977A111.53059,111.53059,0,0,0,89.87939,233.3157a15.95994,15.95994,0,0,0,13.69288-1.32861l20.12793-12.07764c2.86816.13672,5.749.13867,8.61132.00684L152.458,232.00418a15.92909,15.92909,0,0,0,13.67578,1.33447,111.52853,111.52853,0,0,0,34.01221-19.668,15.9606,15.9606,0,0,0,5.69482-12.522l-.39453-23.47021c1.55127-2.415,2.99365-4.9087,4.31152-7.45459l20.541-11.40235a15.971,15.971,0,0,0,8.00049-11.21435A111.5426,111.5426,0,0,0,238.26562,108.35476Zm-66.26953,19.64551a44,44,0,1,1-44-44A44.04972,44.04972,0,0,1,171.99609,128.00027Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <circle
      cx="128"
      cy="128"
      r="48"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M52.28987,91.56894a83.9101,83.9101,0,0,1,6.30466-10.9001l0,0-.43686-25.95193a8.0267,8.0267,0,0,1,2.852-6.27063A103.88918,103.88918,0,0,1,92.59,30.18373a8.00115,8.00115,0,0,1,6.83547.67167l22.2927,13.376-.023-.01381a83.91075,83.91075,0,0,1,12.5921.00995v.00005l22.25659-13.3543a8.02665,8.02665,0,0,1,6.85653-.66537,103.88929,103.88929,0,0,1,31.606,18.218,8.00114,8.00114,0,0,1,2.836,6.25552l-.43756,25.994.00046-.02682a83.91167,83.91167,0,0,1,6.28743,10.91l-.00005,0,22.69345,12.59763a8.02664,8.02664,0,0,1,4.0045,5.60524,103.89,103.89,0,0,1,.03192,36.44593,8.03466,8.03466,0,0,1-4.00724,5.61943l-22.72861,12.61716.02345-.013a83.9101,83.9101,0,0,1-6.30466,10.9001l0,0,.43686,25.95193a8.0267,8.0267,0,0,1-2.852,6.27063A103.88918,103.88918,0,0,1,163.41,225.81627a8.00115,8.00115,0,0,1-6.83547-.67167l-22.2927-13.376.023.01381a83.91075,83.91075,0,0,1-12.5921-.01v-.00005L99.45618,225.12674a8.02664,8.02664,0,0,1-6.85654.66538,103.88937,103.88937,0,0,1-31.606-18.218,8.00115,8.00115,0,0,1-2.836-6.25553l.43756-25.994-.00046.02682a83.91167,83.91167,0,0,1-6.28743-10.91005l.00005,0L29.61389,151.84369a8.02666,8.02666,0,0,1-4.0045-5.60525,103.88989,103.88989,0,0,1-.03192-36.44591,8.03465,8.03465,0,0,1,4.00724-5.61944L52.31332,91.55593Z"
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

const GearSix = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

GearSix.displayName = 'GearSix';

export default GearSix;
