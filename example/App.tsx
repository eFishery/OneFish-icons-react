// import React, { useState, useCallback } from 'react';
// import * as Icons from '../dist/';
// import { IconContext, Icon } from '../dist';
// import './index.css';

// const isIcon = (candidate: any): candidate is Icon => 'displayName' in candidate;

// const iconCount = Object.values(Icons).reduce<number>((total, Icon) => {
//   if (isIcon(Icon)) return total + 1;
//   return total;
// }, 0);

// if (process.env.NODE_ENV === 'development') {
//   console.log(`${iconCount} icons`);
// }

// const App = () => {
//   const [color, setColor] = useState<string>('currentColor');
//   const [weight, setWeight] = useState<'regular' | 'fill'>('regular');
//   const [size, setSize] = useState<number>(48);

//   const onHeartClick = useCallback(() => {
//     setColor(
//       `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
//     );
//   }, [setColor]);

//   return (
//     <IconContext.Provider
//       value={{
//         color: 'currentColor',
//         size: '1em',
//         mirrored: false,
//         weight: 'regular',
//       }}
//     >
//       <div className="control">
//         <label htmlFor="weight">Weight:</label>
//         <select id="weight" value={weight} onChange={e => setWeight(e.target.value)}>
//           <option>regular</option>
//           <option>fill</option>
//         </select>
//       </div>
//       <div className="container">
//         {Object.values(Icons).map(I => {
//           if (isIcon(I)) {
//             return (
//               <div className="box" key={I.displayName}>
//                 <div className="icons" title={I.displayName}>
//                   <I weight={weight} color={color} size={size} />
//                 </div>
//                 <span className="name">{I.displayName}</span>
//               </div>
//             );
//           }
//         })}
//       </div>
//     </IconContext.Provider>
//   );
// };

// export default App;

import React from 'react';
import { Autofeeder } from '@onefish/icons-react';

export default function App() {
  return <Autofeeder size="48" />;
}
