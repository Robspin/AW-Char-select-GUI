import React, { useState, Fragment } from 'react';
import './coin.css';

const Coin = () => {
   const [coinClass, setCoinClass] = useState('');
   const [coinResult, setCoinResult] = useState('');

   const clickHandler = () => {
      setCoinClass('');
      const random = Math.random();
      const result = random < 0.5 ? 'heads' : 'tails';
      deferFn(function () {
         setCoinClass(`animate-${result}`);
         deferFn(processResult.bind(null, result), 2900);
      }, 100);
   };

   // begin

   function deferFn(callback, ms) {
      setTimeout(callback, ms);
   }

   function processResult(result) {
      setCoinResult(result);
   }

   // end

   return (
      <Fragment>
         <div id='coin' className={coinClass}>
            <div id='heads' className='heads'></div>
            <div id='tails' className='tails'></div>
         </div>
         <button id='flip' onClick={clickHandler}>
            Flip
         </button>
         <p>
            <span id='status'>{coinResult}</span>
         </p>
      </Fragment>
   );
};

export default Coin;
