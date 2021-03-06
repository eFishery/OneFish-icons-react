/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M56.001,63.978q.00146-.38379.03906-.7666c.01172-.12061.03418-.2378.05127-.35694.02-.13965.03613-.27929.064-.41748.02637-.13525.06348-.26611.09717-.39892.03027-.12012.05664-.24073.09277-.35987.03956-.13037.0879-.25586.13379-.3833.04248-.11914.08155-.23877.13038-.356.04882-.11767.106-.23.16015-.34472.05762-.12256.11182-.2461.17627-.36572.05762-.10791.12354-.21.186-.315.0708-.11914.13867-.24023.2163-.35644.07618-.11328.16065-.22022.24219-.3291.07471-.1001.14405-.20264.22412-.3003.14893-.18115.30762-.35449.47168-.522.02-.02051.03711-.04248.05713-.063.023-.02246.04785-.0415.0708-.064.165-.16113.33545-.31787.51416-.46485.09619-.07861.19776-.14746.29639-.22119.11035-.08252.21826-.168.333-.24511.11377-.07618.23242-.14209.34912-.21192.10742-.06445.2124-.13183.32324-.19092.11572-.062.23535-.11425.35352-.17041.11865-.05615.23584-.11523.35742-.166.11181-.0459.22558-.083.33887-.12354.1333-.04834.26513-.09961.40185-.14062.10889-.0332.21973-.05664.33008-.085.14258-.03662.28369-.07617.42969-.105.12109-.02393.24365-.0376.36523-.05567.13623-.02051.271-.04541.40918-.05908.20215-.01953.40479-.02637.60742-.03076C63.88232,56.00781,63.94043,56,64,56H168a8,8,0,0,1,0,16H83.314L197.65674,186.34277a8.00018,8.00018,0,0,1-11.31348,11.31446L72,83.314V168a8,8,0,0,1-16,0V64Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="192"
      y1="192"
      x2="64"
      y2="64"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="168 64 64 64 64 168"
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

const ArrowUpLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

ArrowUpLeft.displayName = 'ArrowUpLeft';

export default ArrowUpLeft;
