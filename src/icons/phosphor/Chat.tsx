/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M216.002,48.00293h-176a16.02085,16.02085,0,0,0-16,16V222.82324a15.8614,15.8614,0,0,0,9.25,14.50781,16.11258,16.11258,0,0,0,6.79688,1.51563,15.86968,15.86968,0,0,0,10.25-3.77344l31.75-26.69531,133.95312-.375a16.02084,16.02084,0,0,0,16-16v-128A16.02084,16.02084,0,0,0,216.002,48.00293Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M77.35142,201.87677l-32.2031,27.07116a8,8,0,0,1-13.14783-6.12372V64.00049a8,8,0,0,1,8-8h176a8,8,0,0,1,8,8v128a8,8,0,0,1-8,8H82.49925A8,8,0,0,0,77.35142,201.87677Z"
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

const Chat = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Chat.displayName = 'Chat';

export default Chat;
