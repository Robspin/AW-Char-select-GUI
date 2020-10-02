import React from 'react';
import './next-button.css';

const NextButton = ({ onClick }) => {
   return (
      <button onClick={onClick} className='next-button flip'>
         NEXT STEP
      </button>
   );
};

export default NextButton;
