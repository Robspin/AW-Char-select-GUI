import React from 'react';
import './next-button.css';

const NextButton = ({ onClick }) => {
   return (
      <button onClick={onClick} className='next-button'>
         NEXT STEP
      </button>
   );
};

export default NextButton;
