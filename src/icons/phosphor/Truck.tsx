/* GENERATED FILE */
import React, { forwardRef } from 'react';

import { IconWeight, IconProps, PaintFunction, renderPathForWeight } from '../../lib';
import IconBase, { RenderFunction } from '../../lib/IconBase';

const pathsByWeight = new Map<IconWeight, PaintFunction>();

pathsByWeight.set('fill', () => (
  <>
    <path d="M247.99682,119.94092c-.00073-.084-.00952-.168-.01269-.252-.00855-.22216-.02271-.44287-.04907-.66015-.01148-.09424-.02808-.188-.04322-.28223-.03393-.21631-.07568-.4292-.12695-.63965-.02051-.08447-.0415-.16845-.06494-.25293q-.10035-.36108-.23364-.708c-.0149-.03858-.02344-.07862-.03882-.11719l-.04956-.12354-.01075-.02734-13.928-34.82031A15.92368,15.92368,0,0,0,218.58374,72h-34.584V64a8.00039,8.00039,0,0,0-8-8h-152a16.01833,16.01833,0,0,0-16,16V184a16.01833,16.01833,0,0,0,16,16h13.0127a32.00444,32.00444,0,0,0,61.97461,0h58.02539a32.00444,32.00444,0,0,0,61.97461,0h13.01269a16.01833,16.01833,0,0,0,16-16V120C247.99975,119.98,247.99682,119.96094,247.99682,119.94092ZM183.99975,88h34.584l9.59961,24h-44.1836Zm-160-16h144v64h-144Zm44,136a16,16,0,1,1,16-16A16.01833,16.01833,0,0,1,67.99975,208Zm120,0a16,16,0,1,1,16-16A16.01833,16.01833,0,0,1,187.99975,208Z" />
  </>
));

pathsByWeight.set('regular', (color: string) => (
  <>
    <path
      d="M240,120H176V80h42.58374a8,8,0,0,1,7.42781,5.02887Z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <line
      x1="16"
      y1="144"
      x2="176"
      y2="144"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <circle cx="188" cy="192" r="24" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16" />
    <circle cx="68" cy="192" r="24" fill="none" stroke={color} strokeMiterlimit="10" strokeWidth="16" />
    <line
      x1="164"
      y1="192"
      x2="92"
      y2="192"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M44,192H24a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H176V171.21508"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
    <path
      d="M176,171.21508V120h64v64a8,8,0,0,1-8,8H212"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </>
));

const renderPath: RenderFunction = (weight: IconWeight, color: string) =>
  renderPathForWeight(weight, color, pathsByWeight);

const Truck = forwardRef<SVGSVGElement, IconProps>((props, ref) => (
  <IconBase ref={ref} {...props} viewBox="0 0 256 256" renderPath={renderPath} />
));

Truck.displayName = 'Truck';

export default Truck;
