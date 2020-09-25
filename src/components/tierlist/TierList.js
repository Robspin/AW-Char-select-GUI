import React from 'react';
import './tierlist.css';

const TierList = () => {
   return (
      <div className='tierlist-container'>
         <h3>TIERLIST</h3>
         <img
            className='faces'
            alt='tierlist'
            src={require('../../images/aw-faces.gif')}
         />
      </div>
   );
};

export default TierList;
