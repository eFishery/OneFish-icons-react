/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M223.63476,114.18213l-167.7832-96.04a15.98949,15.98949,0,0,0-16.123.0459,15.66312,15.66312,0,0,0-7.915,13.66846v192.2871a15.66312,15.66312,0,0,0,7.915,13.66846,15.98874,15.98874,0,0,0,16.12305.0459l167.7832-96.04a15.76194,15.76194,0,0,0,0-27.63574ZM144,139.31348l18.85644,18.85644L74.666,208.64746ZM74.65478,47.34082,162.85742,97.8291,144,116.68652ZM177.24707,149.93359,155.31348,128l21.93457-21.93408L215.56738,128Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M39.8134,224.14386a8.01831,8.01831,0,0,0,12.06378,6.771L219.71391,134.8442a7.763,7.763,0,0,0,0-13.6884L51.87718,25.08518a8.01831,8.01831,0,0,0-12.06378,6.771Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="42.23444"
      y1="26.23444"
      x2="175.91527"
      y2="159.91527"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="42.23498"
      y1="229.76502"
      x2="175.91497"
      y2="96.08503"
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

const GooglePlayLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

GooglePlayLogo.displayName = 'GooglePlayLogo';

export default GooglePlayLogo;
