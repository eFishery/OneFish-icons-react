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
    <path d="M128,96H51.31372L85.65723,61.65723A8.00053,8.00053,0,0,0,74.34277,50.34277l-48,48c-.05639.0564-.10424.11792-.15869.17554-.12524.13281-.25122.26538-.36719.40649-.09106.11084-.17114.22706-.25537.34156-.07055.0957-.14477.188-.21093.28686-.085.12647-.15894.25782-.23584.38819-.05567.09423-.11524.186-.16724.283-.06909.12915-.12817.262-.1897.39379-.04931.10547-.102.20874-.147.31665-.05225.12647-.095.25562-.14063.38428-.042.11817-.08764.23462-.12426.35523-.03907.1289-.06787.25976-.10034.39013-.03052.12305-.06519.24414-.09009.36939-.03.15136-.04859.30444-.06983.457-.01465.106-.03515.21-.04565.31714a8.02276,8.02276,0,0,0,0,1.584c.0105.10718.031.21118.04565.31714.02124.15259.0398.30566.06983.457.0249.12525.05957.24634.09009.36939.03247.13037.06127.26123.10034.39013.03662.12061.08227.23706.12426.35523.04566.12866.08838.25781.14063.38428.04492.10791.09766.21118.147.31665.06153.13183.12061.26464.1897.39379.052.09693.11157.18873.16724.283.0769.13037.15087.26172.23584.38819.06616.09887.14038.19116.21093.28686.08423.1145.16431.23072.25537.34156.116.14111.24195.27368.36719.40649.05445.05762.1023.11914.15869.17554l48,48a8.00053,8.00053,0,0,0,11.31446-11.31446L51.31372,112H128a88.09957,88.09957,0,0,1,88,88,8,8,0,0,0,16,0A104.11791,104.11791,0,0,0,128,96Z"/>
  </>
));

pathsByWeight.set("regular", (color: string) => (
  <>
    <polyline points="80 152 32 104 80 56" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  <path d="M224,200a96,96,0,0,0-96-96H32" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const ArrowBendUpLeft = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 256 256' renderPath={renderPath} />
));

ArrowBendUpLeft.displayName = "ArrowBendUpLeft";

export default ArrowBendUpLeft;
