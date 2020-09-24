import React from 'react';
import './nell.css';

const Nell = ({ text }) => {
   return (
      <div className='nell'>
         <div className='textbox'>
            <p>{text}</p>
         </div>
         <img
            src={require('../../images/pointer.png')}
            alt='pointer'
            className='pointer'
         />
      </div>
   );
};

export default Nell;
