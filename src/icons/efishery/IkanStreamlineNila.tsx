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
    <path d="M14.907 14.349c.027.203.072.406.13.601a2.991 2.991 0 0 1-2.044-.846 1.95 1.95 0 0 1 .809-.067c.424.044.831.183 1.105.312z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M14.749 5.273c-1.649 0-3.387.544-4.76 1.198-.692.33-1.312.697-1.802 1.058-.461.34-.9.74-1.109 1.159a1.36 1.36 0 0 0 .089 1.412c.174.257.414.45.638.591a7.537 7.537 0 0 0-1.33 1.066c-.501-.06-1.064-.275-1.62-.588A7.613 7.613 0 0 1 3.28 9.993a.75.75 0 0 0-.982-.068c-.488.368-.817.921-1.02 1.511a5.623 5.623 0 0 0-.275 1.987c.046 1.4.555 2.97 1.717 4.13a.75.75 0 0 0 1.106-.05l.09-.108c.409-.491.82-.987 1.284-1.334.476-.357.886-.469 1.313-.326.03.01.062.019.094.025.061.055.125.109.191.163-.44.465-.948 1.08-1.244 1.822a.75.75 0 0 0 .299.914c1.744 1.091 3.284 1.273 4.526.968a4.32 4.32 0 0 0 2.332-1.464c.577.072 1.17.11 1.768.11.38 0 .756-.018 1.124-.053l-.753 1.003a.5.5 0 0 0 .4.8c3.129 0 4.467-2.007 4.912-3.169l.179-.098c.752-.422 1.386-.9 1.842-1.38.424-.448.817-1.025.817-1.642 0-.32-.107-.625-.24-.886a4.106 4.106 0 0 0-.554-.796c-.45-.519-1.077-1.051-1.83-1.53a11.39 11.39 0 0 0-2.284-1.111c-.022-.159-.026-.329-.033-.552a22.62 22.62 0 0 0-.014-.409c-.018-.399-.06-.89-.225-1.361a2.488 2.488 0 0 0-1.019-1.315c-.529-.337-1.21-.5-2.052-.5zm1.429 3.641.38-.047-.002-.069c-.003-.1-.005-.195-.01-.28-.016-.366-.052-.677-.142-.935a.992.992 0 0 0-.41-.544c-.214-.137-.587-.266-1.245-.266-1.351 0-2.863.457-4.115 1.053a9.75 9.75 0 0 0-1.557.91c-.36.265-.548.465-.625.571.048.045.132.109.267.181a3.496 3.496 0 0 0 .686.273l.279-.035a12.911 12.911 0 0 1 4.795-.953c.583 0 1.15.05 1.699.141zm-5.311 8.9a13.045 13.045 0 0 1-2.44-.879 10.3 10.3 0 0 1-.349-.177c-.297.302-.591.622-.824.97 1.165.583 2.09.609 2.767.442.325-.08.608-.208.846-.355zm-5.298-3.573a1.94 1.94 0 0 1 .034-1.135 6.794 6.794 0 0 1-1.483-.629 9.364 9.364 0 0 1-1.288-.876 2.54 2.54 0 0 0-.135.322 4.131 4.131 0 0 0-.194 1.451c.027.842.27 1.73.757 2.476a7.25 7.25 0 0 1 1.04-.99c.363-.271.79-.507 1.269-.619zm11.21-2.482a.5.5 0 0 1-.16.689c-.595.37-.792.989-.733 1.656.062.696.394 1.303.676 1.529a.5.5 0 1 1-.624.78 2.29 2.29 0 0 1-.464-.52.497.497 0 0 1-.198.052c-1.707.088-3.002-.929-3.46-1.737a.5.5 0 0 1 .104-.623c.596-.524 1.353-.608 1.985-.542.372.038.727.13 1.03.238a2.498 2.498 0 0 1 1.155-1.682.5.5 0 0 1 .689.16zm2.471 1.264a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
  </>
));

pathsByWeight.set("regular", () => (
  <>
    <path fillRule="evenodd" clipRule="evenodd" d="M16.754 12.325a.499.499 0 0 0 .025-.566.5.5 0 0 0-.689-.16 2.499 2.499 0 0 0-1.155 1.682 4.482 4.482 0 0 0-1.03-.239c-.632-.065-1.39.018-1.985.543a.5.5 0 0 0-.105.623c.46.808 1.754 1.825 3.46 1.737a.499.499 0 0 0 .2-.052c.137.208.294.386.463.52a.5.5 0 1 0 .625-.78c-.283-.226-.615-.833-.676-1.529-.06-.667.138-1.286.732-1.656a.502.502 0 0 0 .135-.123zm-2.347 1.835c.19.057.363.124.5.189.028.203.072.406.131.601a2.99 2.99 0 0 1-2.045-.847c.145-.047.303-.073.47-.079.11-.003.222.001.339.013.21.022.417.067.605.123z"/>
  <path d="M18.75 13.523a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M14.749 5.273c-1.649 0-3.387.544-4.76 1.198-.692.33-1.312.697-1.802 1.058-.461.34-.9.74-1.109 1.159a1.36 1.36 0 0 0 .089 1.412c.092.136.203.254.32.356.104.09.213.168.318.235a7.537 7.537 0 0 0-1.33 1.066c-.501-.06-1.064-.275-1.62-.588A7.616 7.616 0 0 1 3.28 9.993a.75.75 0 0 0-.982-.068c-.125.094-.24.2-.344.316a3.015 3.015 0 0 0-.372.518 3.912 3.912 0 0 0-.304.677 5.624 5.624 0 0 0-.275 1.987c.046 1.399.555 2.97 1.717 4.13a.75.75 0 0 0 1.106-.05l.09-.108.002-.002c.408-.49.82-.985 1.282-1.332.476-.357.886-.469 1.313-.326.03.01.062.018.094.024.061.056.125.11.191.164-.24.253-.5.55-.734.89a4.72 4.72 0 0 0-.51.932.75.75 0 0 0 .299.914c1.745 1.091 3.284 1.273 4.526.968a4.32 4.32 0 0 0 2.332-1.464c.577.072 1.169.11 1.768.11.381 0 .756-.018 1.124-.053l-.753 1.004a.5.5 0 0 0 .4.8c3.13 0 4.467-2.008 4.913-3.17l.178-.098c.752-.422 1.386-.9 1.842-1.38.424-.448.817-1.025.817-1.642a1.768 1.768 0 0 0-.166-.73 2.578 2.578 0 0 0-.075-.156 4.103 4.103 0 0 0-.553-.796c-.45-.519-1.077-1.051-1.83-1.53-.66-.42-1.43-.808-2.284-1.111a5.158 5.158 0 0 1-.033-.552c-.003-.12-.007-.253-.014-.409-.018-.398-.06-.89-.225-1.361-.17-.49-.478-.97-1.019-1.315-.529-.337-1.21-.5-2.052-.5zm1.58 13.646.688-.919c.568-.122 1.11-.28 1.617-.465-.466.585-1.195 1.155-2.305 1.384zm-5.462-1.104a13.054 13.054 0 0 1-2.44-.88l-.08-.039a8.846 8.846 0 0 1-.142-.072l-.127-.066a12.055 12.055 0 0 0-.507.551 5.341 5.341 0 0 0-.317.42c1.165.582 2.09.608 2.767.441a2.93 2.93 0 0 0 .846-.355zM4.12 12.477a6.8 6.8 0 0 0 1.483.63 1.94 1.94 0 0 0-.034 1.135c-.48.11-.906.347-1.27.619-.385.29-.736.647-1.039.99-.488-.747-.73-1.635-.757-2.477a4.132 4.132 0 0 1 .194-1.45c.041-.121.087-.228.135-.323.372.301.812.61 1.288.876zm5.145-2.76.02.007c.16-.071.384-.164.672-.267.608-.217 1.501-.479 2.668-.673 1.195-.2 2.405-.198 3.305-.15.227.013.437.028.623.044l-.006-.16c-.017-.366-.053-.677-.143-.935a.992.992 0 0 0-.41-.544c-.214-.137-.587-.266-1.245-.266-1.351 0-2.863.456-4.115 1.053-.304.144-.587.294-.844.445a8.21 8.21 0 0 0-.713.466 4.672 4.672 0 0 0-.375.304 1.855 1.855 0 0 0-.25.266c.048.045.132.109.267.182.178.096.38.174.546.229zM7 13.735c0-.144.098-.441.484-.86.368-.4.924-.828 1.634-1.22a11.39 11.39 0 0 1 5.36-1.38c1.98 0 3.784.681 5.093 1.514.654.416 1.164.857 1.501 1.246.105.12.188.231.253.33l.025.039.024.04c.014.021.026.043.037.064l.014.026a1.316 1.316 0 0 1 .06.139l.004.015a.396.396 0 0 1 .008.031l.003.015-.002.01-.003.014a.863.863 0 0 1-.061.143 2.216 2.216 0 0 1-.339.443c-.33.347-.834.738-1.488 1.105a10.69 10.69 0 0 1-5.128 1.325c-2.033 0-3.978-.5-5.397-1.188-.71-.344-1.26-.722-1.62-1.08-.375-.373-.462-.64-.462-.771z"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const IkanStreamlineNila = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 24 24' renderPath={renderPath} />
));

IkanStreamlineNila.displayName = "IkanStreamlineNila";

export default IkanStreamlineNila;
