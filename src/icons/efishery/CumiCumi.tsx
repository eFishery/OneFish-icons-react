/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m13.49 2.796.236.038.027.005.027.007a6.919 6.919 0 0 1 3.543 2.186c.377.432.658.86.849 1.218.095.179.171.348.226.499.046.126.105.315.105.505 0 .403-.235.705-.402.876a3.03 3.03 0 0 1-.7.512c-.38.21-.851.397-1.384.536a2.443 2.443 0 0 1-.053 4.632v1.06c0 .44-.177.837-.465 1.126v.027c0 1.077.112 1.626.288 1.908.109.175.3.342.963.342a.75.75 0 0 1 0 1.5c-.938 0-1.746-.261-2.237-1.05-.365-.586-.482-1.37-.507-2.257h-.004c.021 1.897.183 3.108.527 3.847.173.37.378.59.615.726.245.142.592.234 1.106.234a.75.75 0 0 1 0 1.5c-.686 0-1.315-.122-1.857-.435-.55-.319-.946-.796-1.223-1.39-.492-1.054-.648-2.561-.668-4.482h-.504c-.02 1.92-.177 3.428-.668 4.482-.278.594-.673 1.072-1.223 1.39-.542.313-1.171.435-1.857.435a.75.75 0 1 1 0-1.5c.514 0 .86-.092 1.106-.234.237-.137.442-.355.614-.726.345-.739.506-1.95.527-3.847h-.003c-.026.886-.142 1.67-.507 2.257-.491.789-1.3 1.05-2.237 1.05a.75.75 0 1 1 0-1.5c.662 0 .854-.167.963-.342.175-.282.287-.831.287-1.908v-.032a1.591 1.591 0 0 1-.46-1.12v-1.06a2.443 2.443 0 0 1-.035-4.639 6.04 6.04 0 0 1-1.42-.557 2.96 2.96 0 0 1-.663-.495 1.734 1.734 0 0 1-.254-.328l-.03-.015.008-.024a1.243 1.243 0 0 1-.13-.352 1.01 1.01 0 0 1 .02-.441c.024-.1.06-.196.097-.284a4.62 4.62 0 0 1 .31-.585A9.081 9.081 0 0 1 7.51 4.697c.443-.477.982-.954 1.584-1.308.555-.326 1.2-.568 1.891-.57.184-.145.375-.272.569-.367.194-.094.436-.179.698-.179.262 0 .505.085.7.18.182.089.363.207.537.343zm-3.45 5.305c0-1.218.463-2.34 1.031-3.164.229-.33.466-.6.681-.8v1.848a.5.5 0 0 0 1 0V4.137c.216.2.453.47.681.8.57.823 1.031 1.946 1.031 3.164 0 .094-.044.242-.19.505-.05.09-.102.176-.16.272l-.076.127a4.954 4.954 0 0 0-.272.514 2.443 2.443 0 0 0 .698 4.292v1.06a.096.096 0 0 1-.096.095h-4.231a.096.096 0 0 1-.096-.096v-1.06a2.443 2.443 0 0 0 .698-4.291 4.976 4.976 0 0 0-.272-.514l-.076-.127c-.058-.096-.11-.181-.16-.272-.147-.263-.19-.411-.19-.505z"
    />
  </>
));

pathsByWeight.set('regular', () => (
  <>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.726 2.835a10.528 10.528 0 0 0-.236-.038 3.074 3.074 0 0 0-.539-.345 1.615 1.615 0 0 0-.698-.179c-.262 0-.505.085-.699.18a3.118 3.118 0 0 0-.57.367c-.69.002-1.336.244-1.89.57-.602.353-1.141.83-1.584 1.308a9.081 9.081 0 0 0-1.067 1.394 4.62 4.62 0 0 0-.31.585 1.938 1.938 0 0 0-.098.283 1.01 1.01 0 0 0-.018.442c.06.3.234.542.405.719.18.185.407.35.662.495.377.214.854.405 1.42.556a2.443 2.443 0 0 0 .037 4.639v1.06c0 .436.175.832.46 1.12L9 16.023c0 1.077-.111 1.626-.287 1.908-.109.175-.3.342-.963.342a.75.75 0 0 0 0 1.5c.937 0 1.746-.261 2.237-1.05.365-.586.481-1.37.507-2.257h.004c-.021 1.897-.183 3.108-.528 3.847-.172.37-.377.59-.614.726-.246.142-.592.234-1.106.234a.75.75 0 0 0 0 1.5c.686 0 1.315-.122 1.857-.435.55-.319.945-.796 1.223-1.39.491-1.054.648-2.561.668-4.482h.504c.02 1.92.177 3.428.668 4.482.278.594.673 1.072 1.223 1.39.542.313 1.171.435 1.857.435a.75.75 0 1 0 0-1.5c-.514 0-.86-.092-1.106-.234-.237-.137-.442-.355-.614-.726-.345-.739-.507-1.95-.528-3.847h.004c.026.886.142 1.67.507 2.257.491.789 1.3 1.05 2.237 1.05a.75.75 0 1 0 0-1.5c-.663 0-.854-.167-.963-.342-.176-.282-.287-.831-.287-1.908v-.027c.287-.289.464-.687.464-1.126v-1.06a2.443 2.443 0 0 0 .053-4.632 6.024 6.024 0 0 0 1.384-.535 3.03 3.03 0 0 0 .7-.512c.167-.172.402-.474.402-.876 0-.19-.06-.38-.105-.506a3.96 3.96 0 0 0-.226-.499 6.608 6.608 0 0 0-.85-1.217 6.919 6.919 0 0 0-3.542-2.187l-.027-.007-.027-.004zm-2.654 2.102c-.57.823-1.031 1.946-1.031 3.164 0 .094.044.242.19.505.05.09.102.176.16.272l.076.127a4.954 4.954 0 0 1 .273.515 2.443 2.443 0 0 1-.699 4.29v1.06c0 .053.043.096.096.096h4.231a.096.096 0 0 0 .096-.096v-1.06a2.443 2.443 0 0 1-.698-4.292 4.976 4.976 0 0 1 .272-.513l.076-.127c.058-.096.11-.181.16-.272.147-.263.19-.411.19-.505 0-1.218-.462-2.34-1.03-3.164-.229-.331-.466-.6-.682-.8v1.848a.5.5 0 0 1-1 0V4.138c-.216.2-.452.469-.68.799zm5.604 2.393c-.194.107-.44.214-.728.307a7.038 7.038 0 0 0-.646-2.443c.35.26.646.544.89.824.301.345.517.677.655.936.04.077.073.144.098.201-.063.05-.151.11-.27.175zm-8.117.295c.068-.92.33-1.77.68-2.505a7.586 7.586 0 0 0-1.517 1.755 4.01 4.01 0 0 0-.15.267c.058.048.141.106.253.17.185.105.429.213.734.313zm6.65 4.803a.942.942 0 1 1 .005 0h-.004zm-4.977-.943c0 .52-.419.94-.937.943H9.286a.942.942 0 1 1 .946-.943zm6.824-4.436-.007.01a.05.05 0 0 1 .007-.01zm-9.594-.016.001.002a.018.018 0 0 1-.001-.002z"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const CumiCumi = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 24 24" renderPath={renderPath} />
));

CumiCumi.displayName = 'CumiCumi';

export default CumiCumi;
