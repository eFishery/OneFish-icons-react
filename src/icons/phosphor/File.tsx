/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M213.58936,82.2749,157.65723,26.34277c-.08008-.08007-.167-.15039-.25-.22656-.10791-.09912-.21289-.20166-.32618-.29492-.07519-.06152-.15576-.11524-.23291-.17432-.13085-.10009-.26025-.20166-.397-.29394-.062-.04151-.12793-.07617-.19043-.11573-.15869-.10009-.31738-.1997-.4834-.28906-.04492-.02392-.09179-.04248-.13672-.06543-.1875-.09668-.377-.18945-.57275-.271-.03027-.0127-.0625-.022-.09326-.03418-.21045-.08448-.42383-.16358-.64258-.23-.03174-.00977-.06445-.01563-.09619-.02491-.2168-.063-.436-.12109-.66064-.166-.07129-.01416-.145-.02051-.2168-.03272-.18555-.03222-.37012-.06494-.55908-.08349A7.91349,7.91349,0,0,0,152,24H55.99219a16.01833,16.01833,0,0,0-16,16V216a16.01833,16.01833,0,0,0,16,16H200a16.01833,16.01833,0,0,0,16-16V88.15479c.001-.05225.00781-.10254.00781-.15479A7.97147,7.97147,0,0,0,213.58936,82.2749ZM152,88V43.31348L196.68555,88Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M200.00039,224H55.99961A7.99981,7.99981,0,0,1,48,216V40a7.99981,7.99981,0,0,1,7.99961-8l96.00312,0L208,88V216A7.99981,7.99981,0,0,1,200.00039,224Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <polyline
      points="152 32 152 88 208.008 88"
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

const File = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

File.displayName = 'File';

export default File;
