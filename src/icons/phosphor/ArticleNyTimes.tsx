/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M152,104a8.00008,8.00008,0,0,1,8-8h80a8,8,0,0,1,0,16H160A8.00008,8.00008,0,0,1,152,104Zm88,24H160a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Zm0,32H160a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Zm0,32H72a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM79.92969,176A55.96817,55.96817,0,0,1,30.43091,93.85059,27.99468,27.99468,0,0,1,47.92969,44a8.00234,8.00234,0,0,1,4.24023,1.21582l61.78174,38.61377A12.00063,12.00063,0,0,0,111.92969,60a8,8,0,0,1,0-16,28,28,0,0,1,0,56,8.00238,8.00238,0,0,1-4.24024-1.21582L77.73535,80.0625A40.00129,40.00129,0,0,0,71.88391,159.187l.04578-44.71826a8.00029,8.00029,0,0,1,8-7.99219h.0083a8.00041,8.00041,0,0,1,7.9917,8.0083l-.04578,44.71875a39.8882,39.8882,0,0,0,30.86755-29.51806,7.99978,7.99978,0,1,1,15.52735,3.8584A55.88761,55.88761,0,0,1,79.92969,176ZM39.88574,80.90771A56.18282,56.18282,0,0,1,58.72546,68.18164L45.90771,60.17041a12.00319,12.00319,0,0,0-6.022,20.7373Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <line
      x1="160"
      y1="104"
      x2="240"
      y2="104"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="136"
      x2="240"
      y2="136"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="160"
      y1="168"
      x2="240"
      y2="168"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="72"
      y1="200"
      x2="240"
      y2="200"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M126.51493,131.6147A48.00511,48.00511,0,1,1,79.92969,72"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="79.92969"
      y1="114.47668"
      x2="79.87491"
      y2="167.89045"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M111.92969,52a20,20,0,0,1,0,40l-64-40a20.00331,20.00331,0,0,0-6.25081,39.00379"
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

const ArticleNyTimes = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

ArticleNyTimes.displayName = 'ArticleNyTimes';

export default ArticleNyTimes;
