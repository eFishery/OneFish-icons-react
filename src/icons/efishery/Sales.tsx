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
    <path fillRule="evenodd" clipRule="evenodd" d="M7 6.023a3.75 3.75 0 1 1 7.5 0v2a3.75 3.75 0 1 1-7.5 0v-2zm3.359-2.216A2.25 2.25 0 0 0 8.5 6.023v.083c.379-.173.726-.473 1.04-.865.363-.454.638-.983.819-1.434zm1.504.26c-.056.161-.123.333-.2.511.05.048.109.095.18.137.166.098.43.188.836.15a2.26 2.26 0 0 0-.816-.797zm-1.152 2.111c.072-.09.141-.182.208-.275.052.037.107.072.164.105.503.296 1.145.439 1.917.329v1.686a2.25 2.25 0 0 1-4.5 0v-.337c.95-.224 1.685-.85 2.21-1.508z"/>
  <path d="M6 12.902a2.25 2.25 0 0 0-1.5 2.121v3.25h5.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75v-4a3.75 3.75 0 0 1 3.75-3.75h.5a.75.75 0 0 1 .668.41l.003.006.023.04a3.348 3.348 0 0 0 .617.734c.454.404 1.159.81 2.189.81s1.735-.406 2.19-.81a3.347 3.347 0 0 0 .616-.734l.023-.04.002-.006a.75.75 0 0 1 .669-.41h.5a3.75 3.75 0 0 1 3.75 3.75v.5a.75.75 0 1 1-1.5 0v-.5a2.25 2.25 0 0 0-1.5-2.121v2.003a1.75 1.75 0 0 1-2.533 1.566l-2.217-1.109-2.217 1.109A1.75 1.75 0 0 1 6 14.905v-2.003zM15.088 20.145a.278.278 0 0 0-.071-.202.228.228 0 0 0-.172-.074.234.234 0 0 0-.175.074.275.275 0 0 0-.07.2.29.29 0 0 0 .07.204c.049.05.107.074.175.074a.228.228 0 0 0 .171-.073.277.277 0 0 0 .072-.203zM16.97 20.037a.176.176 0 0 0-.06-.14.221.221 0 0 0-.15-.052.22.22 0 0 0-.146.05.225.225 0 0 0-.072.142h.428z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M12.75 17.273a1.75 1.75 0 0 0-1.75 1.75v2c0 .967.784 1.75 1.75 1.75h6a1.75 1.75 0 0 0 1.75-1.75v-2a1.75 1.75 0 0 0-1.75-1.75h-6zm3.27 1.95v1.48h-.342v-1.48h.342zm-2.698 1.444a.72.72 0 0 0 .276.05c.105 0 .197-.019.274-.057a.42.42 0 0 0 .176-.157.4.4 0 0 0 .062-.218.327.327 0 0 0-.062-.206.42.42 0 0 0-.148-.122 1.785 1.785 0 0 0-.22-.088 1.043 1.043 0 0 1-.2-.082c-.043-.025-.064-.06-.064-.106 0-.04.013-.072.038-.094a.144.144 0 0 1 .1-.034c.048 0 .087.014.118.04.03.026.047.061.05.106h.37a.394.394 0 0 0-.152-.308.587.587 0 0 0-.374-.112.58.58 0 0 0-.37.112.365.365 0 0 0-.142.306c0 .088.02.16.062.214.041.055.09.096.148.124.057.028.131.056.222.084.063.02.11.036.144.05a.269.269 0 0 1 .086.056.113.113 0 0 1 .036.086.12.12 0 0 1-.044.099.192.192 0 0 1-.12.033.177.177 0 0 1-.12-.04.18.18 0 0 1-.054-.12h-.364a.408.408 0 0 0 .272.384zm.995-.826a.676.676 0 0 0-.065.302c0 .115.022.216.064.304a.459.459 0 0 0 .426.272.424.424 0 0 0 .207-.048.367.367 0 0 0 .14-.125v.157h.341v-1.116h-.341v.158a.352.352 0 0 0-.139-.126.425.425 0 0 0-.205-.048.463.463 0 0 0-.428.27zm2.997.386a.87.87 0 0 0 .006-.1.582.582 0 0 0-.072-.293.481.481 0 0 0-.196-.194.596.596 0 0 0-.288-.069.604.604 0 0 0-.294.07.499.499 0 0 0-.2.2.633.633 0 0 0-.07.304c0 .116.024.218.072.304a.498.498 0 0 0 .2.2.6.6 0 0 0 .292.07c.09 0 .172-.016.246-.05a.496.496 0 0 0 .182-.137.492.492 0 0 0 .102-.198h-.364c-.034.071-.093.108-.178.108a.21.21 0 0 1-.146-.055.24.24 0 0 1-.066-.16h.774zm.64.492a.64.64 0 0 1-.26-.05.447.447 0 0 1-.18-.136.366.366 0 0 1-.074-.196h.338a.13.13 0 0 0 .054.094.19.19 0 0 0 .118.036.169.169 0 0 0 .098-.024.078.078 0 0 0 .036-.066c0-.032-.017-.055-.05-.07a.938.938 0 0 0-.162-.052 1.64 1.64 0 0 1-.2-.058.36.36 0 0 1-.138-.098.271.271 0 0 1-.058-.182c0-.064.018-.122.052-.174a.36.36 0 0 1 .156-.125.604.604 0 0 1 .246-.047c.14 0 .25.035.33.104.081.07.128.162.14.276h-.316a.135.135 0 0 0-.052-.092.173.173 0 0 0-.112-.034c-.04 0-.07.009-.092.024a.071.071 0 0 0-.032.062c0 .032.017.056.05.072a.846.846 0 0 0 .16.049 1.6 1.6 0 0 1 .202.063c.052.02.098.054.136.1.04.046.06.107.062.184a.294.294 0 0 1-.056.176.359.359 0 0 1-.158.12.596.596 0 0 1-.238.044z"/>
  </>
));

pathsByWeight.set("regular", () => (
  <>
    <path fillRule="evenodd" clipRule="evenodd" d="M7 6.023a3.75 3.75 0 1 1 7.5 0v2a3.75 3.75 0 1 1-7.5 0v-2zm3.359-2.216A2.25 2.25 0 0 0 8.5 6.023v.083c.379-.173.726-.473 1.04-.865.363-.454.638-.983.819-1.434zm1.504.26c-.056.161-.123.333-.2.511.05.048.109.095.18.137.166.098.43.188.836.15a2.26 2.26 0 0 0-.816-.797zm-1.152 2.111c.072-.09.141-.182.208-.275.052.037.107.072.164.105.503.296 1.145.439 1.917.329v1.686a2.25 2.25 0 0 1-4.5 0v-.337c.95-.224 1.685-.85 2.21-1.508z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M6 12.902a2.25 2.25 0 0 0-1.5 2.121v3.25h5.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1-.75-.75v-4a3.75 3.75 0 0 1 3.75-3.75h.5a.75.75 0 0 1 .668.41l.003.006.023.04a3.348 3.348 0 0 0 .617.734c.454.404 1.159.81 2.189.81s1.735-.406 2.19-.81a3.347 3.347 0 0 0 .616-.734l.023-.04.002-.006a.75.75 0 0 1 .669-.41h.5a3.75 3.75 0 0 1 3.75 3.75v.5a.75.75 0 1 1-1.5 0v-.5a2.25 2.25 0 0 0-1.5-2.121v2.003a1.75 1.75 0 0 1-2.533 1.566l-2.217-1.109-2.217 1.109A1.75 1.75 0 0 1 6 14.905v-2.003zm1.5.624v1.38a.25.25 0 0 0 .362.223l1.254-.627a4.67 4.67 0 0 1-1.616-.976zm4.884.976 1.254.627a.25.25 0 0 0 .362-.224v-1.38l-.064.059a4.67 4.67 0 0 1-1.552.918z"/>
  <path d="M16.02 20.703v-1.48h-.341v1.48h.342zM13.599 20.717a.723.723 0 0 1-.276-.05.408.408 0 0 1-.272-.384h.364a.18.18 0 0 0 .054.12c.03.026.07.04.12.04.05 0 .09-.012.12-.034a.12.12 0 0 0 .044-.098.113.113 0 0 0-.036-.086.266.266 0 0 0-.086-.056 1.289 1.289 0 0 0-.144-.05 1.576 1.576 0 0 1-.222-.084.41.41 0 0 1-.148-.124.345.345 0 0 1-.062-.214c0-.131.047-.233.142-.306a.58.58 0 0 1 .37-.112c.154 0 .28.037.374.112a.395.395 0 0 1 .152.308h-.37a.142.142 0 0 0-.05-.106.173.173 0 0 0-.118-.04.144.144 0 0 0-.1.034c-.026.021-.038.052-.038.094 0 .045.021.08.064.106.042.025.11.052.2.082.09.03.164.06.22.088a.418.418 0 0 1 .148.122.327.327 0 0 1 .062.206.4.4 0 0 1-.062.218.42.42 0 0 1-.176.156.607.607 0 0 1-.274.058z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M14.253 20.143c0-.115.022-.216.064-.302a.462.462 0 0 1 .428-.27c.079 0 .148.016.206.048.06.032.106.074.138.126v-.158h.342v1.116h-.342v-.158a.367.367 0 0 1-.14.126.424.424 0 0 1-.206.048.46.46 0 0 1-.426-.272.688.688 0 0 1-.064-.304zm.836.002a.277.277 0 0 0-.072-.202.227.227 0 0 0-.172-.074.233.233 0 0 0-.174.074.275.275 0 0 0-.07.2.29.29 0 0 0 .07.204c.048.049.106.074.174.074a.228.228 0 0 0 .172-.074.277.277 0 0 0 .072-.202zM17.32 20.127a.873.873 0 0 1-.006.1h-.773c.005.069.027.122.066.16a.21.21 0 0 0 .146.054c.085 0 .144-.036.177-.108h.364a.498.498 0 0 1-.284.336.588.588 0 0 1-.245.05.6.6 0 0 1-.293-.07.499.499 0 0 1-.2-.2.618.618 0 0 1-.071-.304c0-.116.023-.218.07-.304a.497.497 0 0 1 .2-.2.602.602 0 0 1 .294-.07c.107 0 .203.022.287.068.085.045.15.11.197.194a.582.582 0 0 1 .072.294zm-.35-.09a.176.176 0 0 0-.06-.14.22.22 0 0 0-.15-.052.22.22 0 0 0-.146.05.224.224 0 0 0-.072.142h.428z"/>
  <path d="M17.695 20.669c.076.033.163.05.26.05.09 0 .17-.015.238-.044a.36.36 0 0 0 .158-.12.294.294 0 0 0 .056-.176.275.275 0 0 0-.062-.184.328.328 0 0 0-.136-.1 1.582 1.582 0 0 0-.202-.064.848.848 0 0 1-.16-.048c-.033-.016-.05-.04-.05-.072a.07.07 0 0 1 .032-.062.151.151 0 0 1 .092-.024c.047 0 .084.011.112.034.03.022.047.053.052.092h.316a.403.403 0 0 0-.14-.276.487.487 0 0 0-.33-.104.604.604 0 0 0-.246.046.36.36 0 0 0-.156.126.307.307 0 0 0-.052.174c0 .076.02.136.058.182a.36.36 0 0 0 .138.098c.053.02.12.039.2.058a.92.92 0 0 1 .162.052c.033.014.05.038.05.07a.079.079 0 0 1-.036.066.169.169 0 0 1-.098.024.191.191 0 0 1-.118-.036.13.13 0 0 1-.054-.094h-.338c.005.072.03.137.074.196a.449.449 0 0 0 .18.136z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M11 19.023c0-.966.784-1.75 1.75-1.75h6c.966 0 1.75.784 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-6a1.75 1.75 0 0 1-1.75-1.75v-2zm1.75-.25a.25.25 0 0 0-.25.25v2c0 .139.112.25.25.25h6a.25.25 0 0 0 .25-.25v-2a.25.25 0 0 0-.25-.25h-6z"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Sales = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 24 24' renderPath={renderPath} />
));

Sales.displayName = "Sales";

export default Sales;