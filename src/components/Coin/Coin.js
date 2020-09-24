import React, { useState } from 'react';
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
      setCoinResult(result.toUpperCase());
   }
   // end

   return (
      <div className='container'>
         <div className='sub-container'>
            <div className='input-container'>
               <label>Player 1 - HEADS -</label>
               <input type='text' />
            </div>
            <div className='border'>
               <div id='coin' className={coinClass}>
                  <div id='heads' className='heads'></div>
                  <div id='tails' className='tails'></div>
               </div>
            </div>
            <div className='input-container'>
               <label>Player 2 - TAILS -</label>
               <input type='text' />
            </div>
         </div>
         <button id='flip' onClick={clickHandler}>
            Flip
         </button>
         <p>
            <span id='status'>{coinResult}</span>
         </p>
      </div>
   );
};

export default Coin;
