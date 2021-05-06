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
    <path d="M210.29883,56.3374l-80-24A7.99991,7.99991,0,0,0,120,40V148.26123A47.97353,47.97353,0,1,0,136,184V50.75244L205.70117,71.6626a8,8,0,1,0,4.59766-15.3252Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="88" cy="184" r="40" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="128 184 128 40 208 64" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const MusicNoteSimple = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

MusicNoteSimple.displayName = "MusicNoteSimple";

export default MusicNoteSimple;
