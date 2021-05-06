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
    <path d="M7 7.023a3.75 3.75 0 1 1 7.5 0v.518c-.898.123-2.25.982-2.25 2.982h-1.352C9 9.273 8.747 9.117 8.196 9.117c-.55 0-1.076.84-1.196 1.156v-3.25zM12 16.023a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M16.5 9.023a.75.75 0 0 0-.884-.738c-1.21.22-1.927.933-2.291 1.736A3.83 3.83 0 0 0 13 11.606c-.382.152-.74.351-1.066.592a.752.752 0 0 0-.156-.144l-2.473-1.7a.75.75 0 0 0-1.109.31c-.504 1.122-.323 2.117.133 2.872a3.894 3.894 0 0 0 1.582 1.433c.063.03.127.051.193.063a4.723 4.723 0 0 0-.066.386l-2.52.82a.75.75 0 0 0-.428 1.068c.582 1.082 1.482 1.544 2.358 1.643a3.788 3.788 0 0 0 1.458-.135c.057.079.117.156.179.23a3.612 3.612 0 0 0-.395-.02c-.981 0-1.853.392-2.4 1l-.027.03a2.306 2.306 0 0 0-.513.97h13.88c-.09-.37-.278-.71-.54-1a2.647 2.647 0 0 0-.13-.135c-.55-.53-1.363-.866-2.27-.866-.09 0-.178.004-.265.01.096-.117.186-.238.27-.364l2.571 1.013a.75.75 0 0 0 1.01-.552c.24-1.206-.16-2.135-.774-2.768a3.895 3.895 0 0 0-1.864-1.04.748.748 0 0 0-.192-.019 4.58 4.58 0 0 0-.024-.144.753.753 0 0 0 .132-.092l2.264-1.968a.75.75 0 0 0-.023-1.151c-.959-.77-1.968-.843-2.812-.591-.586.174-1.08.5-1.442.823a4.748 4.748 0 0 0-1.04-.574V9.023zm-.862 10.128a3.251 3.251 0 0 0-.882-6.378h-.012a3.25 3.25 0 0 0-3.218 3.664l.373 1.148a3.259 3.259 0 0 0 1.906 1.549c.28-.072.577-.11.885-.11.331 0 .65.044.948.127z"/>
  <path d="M2.75 11.273h4.447c-.07.401-.111.96-.023 1.5H2.75a.75.75 0 1 1 0-1.5zM7.438 13.273c.312.75.812 1.5 1.312 1.75 0 0-.126.149-.442.292-.188.085-.378.164-.563.24-.67.278-1.275.528-1.495.968-.281.562.5 2.5 2.058 3.25H6.75A4.75 4.75 0 0 1 2 15.023v-1a.75.75 0 0 1 .75-.75h4.688z"/>
  </>
));

pathsByWeight.set("regular", () => (
  <>
    <path d="M7 7.023a3.75 3.75 0 1 1 7.5 0v1a.75.75 0 0 1-1.5 0v-1a2.25 2.25 0 0 0-4.5 0v2.5a.75.75 0 0 1-1.5 0v-2.5z"/>
  <path d="M10 10.023a.75.75 0 0 1 .75-.75h1.5a.75.75 0 1 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75z"/>
  <path fillRule="evenodd" clipRule="evenodd" d="M16.5 9.023a.75.75 0 0 0-.884-.738c-1.21.22-1.927.933-2.291 1.736A3.83 3.83 0 0 0 13 11.606c-.382.152-.74.351-1.066.592a.75.75 0 0 0-.156-.144l-2.472-1.7a.75.75 0 0 0-1.11.311c-.503 1.121-.322 2.117.133 2.871a3.894 3.894 0 0 0 1.583 1.434c.062.03.126.05.191.062a4.749 4.749 0 0 0-.065.386l-2.52.819a.75.75 0 0 0-.428 1.068c.416.773.993 1.23 1.608 1.463a3.69 3.69 0 0 0-.752.535.75.75 0 0 0-.696-1.03h-.5a3.25 3.25 0 0 1-3.25-3.25v-.25h3.75a.75.75 0 1 0 0-1.5h-4.5a.75.75 0 0 0-.75.75v1a4.75 4.75 0 0 0 4.75 4.75h.5c.12 0 .234-.028.334-.078a3.02 3.02 0 0 0-.563 1.15.75.75 0 1 0 1.458.356c.178-.73 1.023-1.428 2.211-1.428a2.6 2.6 0 0 1 1.552.488.75.75 0 0 0 .897 0 2.599 2.599 0 0 1 1.551-.488 2.6 2.6 0 0 1 1.552.488.75.75 0 0 0 .897 0 2.599 2.599 0 0 1 1.551-.488c1.189 0 2.034.697 2.211 1.428a.75.75 0 1 0 1.458-.355 3.019 3.019 0 0 0-.567-1.156.755.755 0 0 0 .484-.561c.24-1.206-.161-2.135-.775-2.768a3.895 3.895 0 0 0-1.864-1.04.75.75 0 0 0-.191-.019 4.871 4.871 0 0 0-.024-.143.756.756 0 0 0 .132-.093l2.264-1.968a.75.75 0 0 0-.023-1.15c-.959-.77-1.968-.843-2.813-.592a3.84 3.84 0 0 0-1.441.824 4.738 4.738 0 0 0-1.041-.574V9.023zm-3.81 9.749a3.947 3.947 0 0 0-.19-.097.748.748 0 0 0-.188-.502 3.264 3.264 0 0 1-.411-.585l-.375-1.154a3.25 3.25 0 0 1 3.218-3.66h.012a3.25 3.25 0 0 1 2.432 5.399.747.747 0 0 0-.186.446c-.107.047-.211.098-.312.153a4.012 4.012 0 0 0-.693-.297 2.75 2.75 0 1 0-2.538-.023c-.27.081-.529.189-.769.32zm-2.594-1.796c.031.156.07.31.118.46-.191.032-.396.044-.599.021a1.503 1.503 0 0 1-.526-.154l1.007-.327zM15 11.273v-1.085a1.5 1.5 0 0 0-.31.452 2.188 2.188 0 0 0-.17.633H15zm-.25 3.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5zm-4.712-1.511.272-.396-.895-.615c.035.19.107.359.199.51.115.193.266.361.424.5zm8.782-.183.316.363.82-.712a1.5 1.5 0 0 0-.545.064 2.19 2.19 0 0 0-.59.285zm.902 4.381.176-.447c.185.1.37.23.526.392a1.5 1.5 0 0 1 .308.453l-1.01-.398z"/>
  <path d="M2.75 11.273a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5h-4z"/>
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Kincir = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox='0 0 24 24' renderPath={renderPath} />
));

Kincir.displayName = "Kincir";

export default Kincir;
