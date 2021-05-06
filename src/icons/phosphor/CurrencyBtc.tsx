/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M170.4834,115.70117A43.973,43.973,0,0,0,144,40.18994V24a8,8,0,0,0-16,0V39.999l-16-.00146V24a8,8,0,0,0-16,0V39.99658l-16.00488-.00146h-16.001a8,8,0,0,0,0,16h8v136h-8a8,8,0,0,0,0,16h15.999L96,207.99609V224a8,8,0,0,0,16,0V207.99707l16,.00147V224a8,8,0,0,0,16,0V207.99951L152,208a48.00015,48.00015,0,0,0,18.4834-92.29883ZM168,84a28.03146,28.03146,0,0,1-28,28H87.99414V55.99609l15.95215.001c.01807.00049.03564.00293.05371.00293s.03564-.00244.05371-.00293l31.94043.00244L136,56l.00586-.00049L140,56A28.03146,28.03146,0,0,1,168,84ZM152.001,192l-64.00684-.00391V128H152a32,32,0,0,1,.001,64Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M80,120h72a40,40,0,0,1,0,80l-72.00586-.00488v-152L140,48a36,36,0,0,1,0,72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="63.99414"
      y1="47.99512"
      x2="79.99414"
      y2="47.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="63.99414"
      y1="199.99512"
      x2="79.99414"
      y2="199.99512"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="48"
      x2="104"
      y2="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="136"
      y1="48"
      x2="136"
      y2="24"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="104"
      y1="224"
      x2="104"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="136"
      y1="224"
      x2="136"
      y2="200"
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

const CurrencyBtc = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

CurrencyBtc.displayName = 'CurrencyBtc';

export default CurrencyBtc;
