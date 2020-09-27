import React, { useState } from 'react';
import './position.css';

const Position = () => {
   const [p1, setP1] = useState(true);
   return (
      <div className='position-container'>
         <img
            className={p1 === true ? 'p1' : 'p2'}
            src={
               p1 === true
                  ? require('../../images/p1.png')
                  : require('../../images/p2.png')
            }
            alt='winner position'
         />
         <img
            className='switch'
            src={require('../../images/switch.png')}
            onClick={() => setP1(!p1)}
            alt='switch'
         />
         <img
            className={p1 === true ? 'p2' : 'p1'}
            src={
               p1 === true
                  ? require('../../images/p2.png')
                  : require('../../images/p1.png')
            }
            alt='loser position'
         />
      </div>
   );
};

export default Position;
