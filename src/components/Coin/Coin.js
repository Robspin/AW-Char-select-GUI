import React, { useState } from 'react';
import './coin.css';

const Coin = ({ setText, setPlayers, setWinner }) => {
   const [coinClass, setCoinClass] = useState('');
   const [coinResult, setCoinResult] = useState('');
   const [player1, setPlayer1] = useState('');
   const [player2, setPlayer2] = useState('');

   const clickHandler = () => {
      if (player1 === '' || player2 === '') {
         return setText('Sorry, player names cant be empty...');
      }

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
      setPlayers({ player1, player2 });
      result === 'heads' ? setWinner(player1) : setWinner(player2);
      setText(
         `Congrats ${
            result === 'heads' ? player1 : player2
         }, you won the coinflip!`
      );
   }
   // end

   return (
      <div className='container'>
         <div className='sub-container'>
            <div className='input-container'>
               <label>Player 1 - HEADS -</label>
               <input type='text' onChange={e => setPlayer1(e.target.value)} />
            </div>
            <div className='border'>
               <div id='coin' className={coinClass}>
                  <div id='heads' className='heads'></div>
                  <div id='tails' className='tails'></div>
               </div>
            </div>
            <div className='input-container'>
               <label>Player 2 - TAILS -</label>
               <input type='text' onChange={e => setPlayer2(e.target.value)} />
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
