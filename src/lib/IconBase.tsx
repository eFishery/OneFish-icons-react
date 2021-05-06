import React, { forwardRef, useContext } from 'react';
import { IconProps, IconWeight, IconContext } from '../lib';

export type RenderFunction = (weight: IconWeight, color: string) => React.ReactNode | null;

interface IconBaseProps extends IconProps {
  renderPath: RenderFunction;
}

const IconBase = forwardRef<SVGSVGElement, IconBaseProps>((props, ref) => {
  const { color, size, weight, mirrored, viewBox, children, renderPath, ...restProps } = props;

  const {
    color: contextColor,
    size: contextSize,
    weight: contextWeight,
    mirrored: contextMirrored,
    ...restContext
  } = useContext(IconContext);

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size ?? contextSize}
      height={size ?? contextSize}
      fill={color ?? contextColor}
      viewBox={viewBox}
      transform={mirrored || contextMirrored ? 'scale(-1, 1)' : undefined}
      {...restContext}
      {...restProps}
    >
      {children}
      <rect width="256" height="256" fill="none" />
      {renderPath(weight ?? contextWeight, color ?? contextColor)}
    </svg>
  );
});

IconBase.displayName = 'IconBase';

export default IconBase;
