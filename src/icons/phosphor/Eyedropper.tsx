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
    <path d="M223.99658,67.50391a35.73557,35.73557,0,0,0-11.26172-25.66114c-14.01806-13.2705-36.71875-12.771-50.60254,1.11328L140.18408,64.90479a24.02939,24.02939,0,0,0-33.15429.75195L100,72.68652a16.01779,16.01779,0,0,0,0,22.627l2.05908,2.05908L51.71533,147.71582a40.15638,40.15638,0,0,0-11.01074,35.771l-9.78271,22.40869a13.66329,13.66329,0,0,0,2.87744,15.21728,15.915,15.915,0,0,0,11.27929,4.70313,16.077,16.077,0,0,0,6.43555-1.353l20.999-9.16748a40.15391,40.15391,0,0,0,35.771-11.01123l50.34326-50.34326L160.68652,156a16.01779,16.01779,0,0,0,22.627,0l7.02978-7.02979a24.02843,24.02843,0,0,0,.752-33.15429l22.36036-22.36035A35.71726,35.71726,0,0,0,223.99658,67.50391ZM96.9707,192.9707a24.09567,24.09567,0,0,1-23.1914,6.21436,8.0052,8.0052,0,0,0-5.26416.39746L47.044,208.95605l9.37353-21.47119a8.00234,8.00234,0,0,0,.39746-5.26416,24.0986,24.0986,0,0,1,6.21436-23.1914L113.37256,108.686l33.9414,33.9414Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <path d="M179.799,115.799l4.88728,4.88728a16,16,0,0,1,0,22.62742l-7.02944,7.02944a8,8,0,0,1-11.3137,0l-60.6863-60.6863a8,8,0,0,1,0-11.3137l7.02944-7.02944a16,16,0,0,1,22.62742,0l4.8873,4.8873,27.58813-27.58813c10.78822-10.78822,28.36591-11.4491,39.44579-.96065A28.00039,28.00039,0,0,1,207.799,87.799Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M158.62742,142.62742l-56,56a31.98729,31.98729,0,0,1-30.91154,8.28721L48.31361,217.131A8,8,0,0,1,39.456,215.456h0a5.74381,5.74381,0,0,1-1.20256-6.35955l10.832-24.81212a31.9873,31.9873,0,0,1,8.28715-30.91177l56-56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Eyedropper = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

Eyedropper.displayName = "Eyedropper";

export default Eyedropper;
