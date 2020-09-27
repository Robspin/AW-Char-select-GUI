import React, { useState, useEffect } from 'react';
import './playerselection.css';

const PlayerSelection = ({
   players,
   setText,
   winner,
   selectedCO,
   clickedCO,
   winnerPhase
}) => {
   const [colorModalShow, setColorModalShow] = useState('hide');
   const [winnerColor, setWinnerColor] = useState('red');
   const [loserColor, setLoserColor] = useState('blue');

   const [imgURL, setImgUrl] = useState('');
   const [imgURL2, setImgUrl2] = useState('');

   useEffect(() => {
      if (winnerPhase === true) {
         if (clickedCO.source) {
            return setImgUrl(clickedCO.source);
         }
         setImgUrl(selectedCO);
      }
      if (winnerPhase === false) {
         if (clickedCO.source) {
            return setImgUrl2(clickedCO.source);
         }
         setImgUrl2(selectedCO);
      }
   }, [selectedCO, clickedCO, winnerPhase]);

   const colorHandlerWinner = e => {
      const current = e.target.className.split(' ')[1];
      if (current === loserColor) {
         return setText(
            `Sorry, you cant have the same color as ${
               winner === players.player1 ? players.player2 : players.player1
            }...`
         );
      }
      setWinnerColor(current);
      setColorModalShow('hide');
   };

   const colorHandlerLoser = e => {
      const current = e.target.className.split(' ')[1];
      if (current === winnerColor) {
         return setText(`Sorry, you cant have the same color as ${winner}...`);
      }
      setLoserColor(current);
      setColorModalShow('hide');
   };

   return (
      <div className='selection-container'>
         <div className='flex'>
            <h4>{winner}</h4>
            <div
               className={`color winner ${winnerColor}`}
               onClick={() => {
                  if (!winnerPhase) return null;
                  setColorModalShow('show-winner');
               }}
            />
            <div
               className={
                  colorModalShow === 'show-winner'
                     ? 'color-modal winnerM modal-show'
                     : 'color-modal winnerM'
               }
            >
               <div className='sbox red' onClick={colorHandlerWinner} />
               <div className='sbox blue' onClick={colorHandlerWinner} />
               <div className='sbox yellow' onClick={colorHandlerWinner} />
               <div className='sbox green' onClick={colorHandlerWinner} />
               <div className='sbox black' onClick={colorHandlerWinner} />
            </div>
            <div className={`player winner ${winnerColor}`}>
               <img
                  src={imgURL}
                  alt='selected-co'
                  className={imgURL === '' ? 'empty' : 'COSelect'}
               />
            </div>
         </div>
         <div className='flex'>
            <h4>
               {winner === players.player1 ? players.player2 : players.player1}
            </h4>
            <div
               className={`color loser ${loserColor}`}
               onClick={() => setColorModalShow('show-loser')}
            />
            <div
               className={
                  colorModalShow === 'show-loser'
                     ? 'color-modal loserM modal-show'
                     : 'color-modal loserM'
               }
            >
               <div className='sbox red' onClick={colorHandlerLoser} />
               <div className='sbox blue' onClick={colorHandlerLoser} />
               <div className='sbox yellow' onClick={colorHandlerLoser} />
               <div className='sbox green' onClick={colorHandlerLoser} />
               <div className='sbox black' onClick={colorHandlerLoser} />
            </div>
            <div className={`player loser ${loserColor}`}>
               <img
                  src={imgURL2}
                  alt='selected-co'
                  className={imgURL2 === '' ? 'empty' : 'COSelect'}
               />
            </div>
         </div>
      </div>
   );
};

export default PlayerSelection;
