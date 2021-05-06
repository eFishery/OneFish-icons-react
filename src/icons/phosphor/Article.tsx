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
    <path d="M216,40H40A16.01833,16.01833,0,0,0,24,56V200a16.01833,16.01833,0,0,0,16,16H216a16.01833,16.01833,0,0,0,16-16V56A16.01833,16.01833,0,0,0,216,40ZM180,168H76a8,8,0,0,1,0-16H180a8,8,0,0,1,0,16Zm0-32H76a8,8,0,0,1,0-16H180a8,8,0,0,1,0,16Zm0-32H76a8,8,0,0,1,0-16H180a8,8,0,0,1,0,16Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <rect x="32" y="48" width="192" height="160" rx="8" strokeWidth="16" stroke={color} strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  <line x1="76" y1="96" x2="180" y2="96" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="76" y1="128" x2="180" y2="128" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <line x1="76" y1="160" x2="180" y2="160" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Article = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Article.displayName = "Article";

export default Article;
