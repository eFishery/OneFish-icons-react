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
    <path d="M248,104a31.99228,31.99228,0,0,0-52.9375-24.19043c-16.75439-8.90112-36.76172-14.279-57.666-15.52539l5.19581-31.17578,21.83105,3.3584a24.00409,24.00409,0,1,0,2.43506-15.814l-29.64209-4.56006a7.996,7.996,0,0,0-9.10742,6.5918l-6.91309,41.478c-21.83887.94165-42.813,6.37891-60.2583,15.647a31.99266,31.99266,0,0,0-42.59229,47.74024A59.04669,59.04669,0,0,0,16,144c0,21.93457,12.042,42.35156,33.90723,57.48926C70.875,216.00588,98.60938,224,128,224s57.125-7.99414,78.09277-22.51074C227.958,186.35158,240,165.93459,240,144a59.01726,59.01726,0,0,0-2.3457-16.44922A32.17163,32.17163,0,0,0,248,104ZM72,132a16,16,0,1,1,16,16A16.01833,16.01833,0,0,1,72,132Zm92.69629,51.10938a80.122,80.122,0,0,1-73.39209,0,8,8,0,0,1,7.34033-14.2168,64.09433,64.09433,0,0,0,58.71094,0,8.00008,8.00008,0,0,1,7.34082,14.2168ZM168,148a16,16,0,1,1,16-16A16.01833,16.01833,0,0,1,168,148Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <circle cx="188" cy="32.00002" r="16" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M161.026,176.00058a72.17425,72.17425,0,0,1-66.05159.0002" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <polyline points="128 72 136 24 172.185 29.567" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M59.408,89.87843C77.71654,78.7483,101.71994,72,128,72s50.28346,6.7483,68.592,17.87843l-.00129.00213a24.002,24.002,0,1,1,31.61564,34.788l.002-.00083A51.61606,51.61606,0,0,1,232,144c0,39.7645-46.56239,72-104,72S24,183.7645,24,144a51.61624,51.61624,0,0,1,3.79162-19.3323l.00206.00082a24.00228,24.00228,0,1,1,31.61564-34.788Z" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <circle cx="88" cy="132" r="16"/>
  <circle cx="168" cy="132" r="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const RedditLogo = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

RedditLogo.displayName = "RedditLogo";

export default RedditLogo;
