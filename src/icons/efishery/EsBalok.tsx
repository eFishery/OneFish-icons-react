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
    <path fillRule="evenodd" clipRule="evenodd" d="M9.378 4.319a.75.75 0 0 0-.567.022l-5.5 2.5a.75.75 0 0 0-.44.682v.552a3.58 3.58 0 0 1-1.027 1.033c-.477.317-.756.747-.826 1.216-.07.46.07.906.328 1.25.342.454.903.75 1.525.72v.346c-.227.095-.466.272-.724.53-.45.45-.671.98-.498 1.515.16.491.6.807 1.034.987.816.34 2.016.376 2.918-.125l1.385.807c-.162.21-.3.469-.396.738-.127.354-.204.782-.128 1.196.08.434.328.843.81 1.083.457.226 1.062.27 1.81.146.707-.118 1.118-.078 1.372.005.239.078.385.207.541.39l.104.126c.136.17.324.404.55.578.333.255.756.407 1.351.407.815 0 1.48-.51 1.778-1.169.083-.184.139-.382.162-.585l2.091 1.22a.75.75 0 0 0 .808-.033l4.091-2.864c.2-.14.32-.37.32-.614V11.66a.75.75 0 0 0-.494-.705l-4.5-1.636a.75.75 0 0 0-.566.022l-1.319.599V7.023a.75.75 0 0 0-.493-.704l-5.5-2zm-.724 13.008.59.344a.75.75 0 0 0 .808-.033l1.698-1.19v.53a.75.75 0 0 0 .372.648l1.715 1a.89.89 0 0 1 .03.817.965.965 0 0 1-.867.58c-.405 0-.607-.097-.743-.201a1.787 1.787 0 0 1-.314-.333 8.994 8.994 0 0 0-.188-.229c-.219-.255-.51-.532-.99-.689-.465-.151-1.054-.173-1.847-.04-.647.107-1.01.038-1.2-.056a.47.47 0 0 1-.272-.367c-.034-.186-.004-.429.085-.678.047-.13.104-.246.163-.343l.96.24zm-5.8-3.45c.025-.026.05-.05.073-.07a.75.75 0 0 0 .316.364l1.23.718c-.48.081-1.006.027-1.406-.14-.315-.131-.438-.284-.466-.372-.014-.043-.048-.2.253-.5zM2.87 9.58v1.71a.791.791 0 0 1-.725-.317.674.674 0 0 1-.14-.5c.024-.156.12-.351.393-.534.171-.114.329-.235.472-.359zm14.962 8.426v.623l2.917-2.042v-4.402l-3.718-1.352-3.621 1.646.892.446a.75.75 0 0 1 .987-.3l2.086 1.043 1.693-1.015a.75.75 0 0 1 .771 1.286l-1.68 1.01v2.438a.75.75 0 0 1-.327.619zm-6.142-3.347a.762.762 0 0 1 .06-.037v-2.553a.75.75 0 0 1 .439-.683l1.681-.764V7.549L9.153 5.833 4.42 7.983l1.507.754a.75.75 0 0 1 1.029-.385l2.632 1.316 2.146-1.288a.75.75 0 0 1 .772 1.287l-2.136 1.281v3.075a.75.75 0 0 1-.87.74v1.321l.084.05 2.106-1.475zm-6.32-4.136a.25.25 0 0 0-.5 0v1.5a.25.25 0 0 0 .139.224l1 .5a.25.25 0 1 0 .223-.447l-.862-.431v-1.346zm8.793 4.167a.222.222 0 0 0-.445 0v1.333c0 .085.048.162.123.2l.889.444a.222.222 0 0 0 .199-.398l-.766-.383V14.69z"/>
  </>
));

pathsByWeight.set("regular", () => (
  <>
    <path d="m10.371 10.948 2.136-1.281a.75.75 0 1 0-.772-1.287L9.588 9.67 6.957 8.353a.75.75 0 0 0-.671 1.341l2.585 1.293v3.036a.75.75 0 1 0 1.5 0v-3.075zM5.121 10.773a.25.25 0 0 1 .25.25v1.346l.862.43a.25.25 0 0 1-.224.448l-1-.5a.25.25 0 0 1-.138-.224v-1.5a.25.25 0 0 1 .25-.25zM19.841 13.94l-1.683 1.01v2.437a.75.75 0 0 1-1.5 0v-2.4l-2.038-1.02a.75.75 0 0 1 .67-1.34l2.087 1.042 1.692-1.015a.75.75 0 0 1 .772 1.286zM13.977 14.932a.25.25 0 0 0-.5 0v1.227a.25.25 0 0 0 .138.224l.818.409a.25.25 0 1 0 .223-.448l-.68-.34v-1.072z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M8.81 4.34a.75.75 0 0 1 .567-.021l5.5 2a.75.75 0 0 1 .494.704V9.94l1.319-.6a.75.75 0 0 1 .566-.021l4.5 1.636a.75.75 0 0 1 .494.705v5.318a.75.75 0 0 1-.32.614l-4.09 2.864a.75.75 0 0 1-.809.034l-2.092-1.22c-.023.202-.078.4-.161.584-.298.658-.964 1.169-1.778 1.169-.595 0-1.018-.153-1.351-.408-.226-.173-.414-.407-.55-.578l-.104-.126c-.156-.183-.303-.312-.54-.39-.255-.082-.666-.123-1.373-.005-.749.125-1.353.08-1.81-.146a1.467 1.467 0 0 1-.81-1.083c-.076-.413 0-.841.128-1.196.097-.268.234-.527.395-.737l-1.384-.807c-.903.5-2.103.466-2.919.126-.434-.181-.874-.497-1.033-.987-.173-.535.047-1.066.497-1.516.258-.258.498-.435.725-.53v-.345a1.802 1.802 0 0 1-1.525-.72 1.673 1.673 0 0 1-.328-1.25c.07-.47.35-.9.826-1.217a3.58 3.58 0 0 0 1.027-1.032v-.553a.75.75 0 0 1 .44-.682l5.5-2.5zm-.158 12.986-.958-.24a1.892 1.892 0 0 0-.163.343c-.09.25-.12.492-.086.679a.47.47 0 0 0 .272.366c.19.095.554.163 1.2.056.793-.132 1.382-.11 1.847.041.48.157.772.434.99.69.076.087.136.162.189.228.113.14.192.239.314.332.136.105.338.202.743.202.378 0 .712-.24.866-.58a.89.89 0 0 0-.029-.817l-1.715-1a.75.75 0 0 1-.372-.648v-.53l-1.699 1.19a.75.75 0 0 1-.808.033l-.591-.345zm-5.409-3.155a.75.75 0 0 1-.317-.365 3.283 3.283 0 0 0-.073.071c-.3.3-.267.457-.253.5.029.088.151.24.467.372.4.167.926.221 1.406.14l-1.23-.718zm-.372-4.59a4.768 4.768 0 0 1-.472.36c-.274.181-.37.377-.393.532a.674.674 0 0 0 .14.501.791.791 0 0 0 .725.317v-1.71zm11-2.032v3.073l-1.681.764a.75.75 0 0 0-.44.683v2.553a.788.788 0 0 0-.059.037l-2.107 1.475-5.213-3.041V8.006l4.782-2.173 4.718 1.716zm3.16 3.284-3.781 1.719v3.995l4.122 2.405 3.378-2.365v-4.402l-3.718-1.352z"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const EsBalok = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 24 24' renderPath={renderPath} />
));

EsBalok.displayName = "EsBalok";

export default EsBalok;
