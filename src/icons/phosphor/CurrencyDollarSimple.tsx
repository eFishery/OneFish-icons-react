/* GENERATED FILE */
import React, { forwardRef } from "react";

import {
  IconWeight,
  IconProps,
  PaintFunction,
  renderPathForWeight,
} from "../../lib";
import IconBase, { RenderFunction } from "../../lib/IconBase";

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set("fill", () => (
  <>
    <path d="M200,168a48.054,48.054,0,0,1-48,48H136v16a8,8,0,0,1-16,0V216H104a48.054,48.054,0,0,1-48-48,8,8,0,0,1,16,0,32.03635,32.03635,0,0,0,32,32h48a32,32,0,0,0,0-64H108a48,48,0,0,1,0-96h12V24a8,8,0,0,1,16,0V40h8a48.054,48.054,0,0,1,48,48,8,8,0,0,1-16,0,32.03635,32.03635,0,0,0-32-32H108a32,32,0,0,0,0,64h44A48.054,48.054,0,0,1,200,168Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <line x1="128" y1="24" x2="128" y2="48" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="128" y1="208" x2="128" y2="232" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M184,88a40,40,0,0,0-40-40H108a40,40,0,0,0,0,80h44a40,40,0,0,1,0,80H104a40,40,0,0,1-40-40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CurrencyDollarSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

CurrencyDollarSimple.displayName = "CurrencyDollarSimple";

export default CurrencyDollarSimple;
