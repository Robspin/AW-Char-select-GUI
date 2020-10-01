import React, { useState, useEffect } from 'react';

import Nell from '../components/nell/Nell';
import TierList from '../components/tierlist/TierList';
import MapSelect from '../components/mapselect/MapSelect';
import PlayerSelection from '../components/playerselection/PlayerSelection';
import NextButton from '../components/next-button/NextButton';
import Position from '../components/position/Position';

const WinnerChoose = ({
   players,
   winner,
   setMap,
   map,
   complete,
   setComplete,
   setPage
}) => {
   const [text, setText] = useState(
      `${winner}, please pick CO, MAP and COLOR.`
   );
   const [selectedCO, setSelectedCO] = useState('');
   const [clickedCO, setClickedCO] = useState(false);
   const [winnerPhase, setWinnerPhase] = useState(true);
   const [winnerColor, setWinnerColor] = useState('red');
   const [loserColor, setLoserColor] = useState('blue');
   const [disabledTiers, setDisabledTiers] = useState('');
   const [p1, setP1] = useState(true);

   const player2 =
      winner === players.player1 ? players.player2 : players.player1;

   useEffect(() => {
      if (clickedCO && map && winnerPhase) {
         setComplete({
            player1CO: clickedCO
         });
         setText(
            `${winner}, please pick CO, MAP and COLOR. You can click NEXT STEP when ready...`
         );
      }
      if (clickedCO && winnerPhase === false) {
         setComplete({
            player1: winner,
            player1CO: complete.player1CO,
            player2: player2,
            player2CO: clickedCO,
            map: map
         });
         setText(`${
            players.player1 === winner ? players.player2 : players.player1
         }, please choose CO, COLOR and P1 or P2...
            When you are ready, please click next...`);
      }
      // eslint-disable-next-line
   }, [clickedCO, map, winner, winnerPhase, players]);

   return (
      <div>
         <div className='top-container'>
            <TierList
               disabledTiers={disabledTiers}
               winnerPhase={winnerPhase}
               setSelectedCO={setSelectedCO}
               setClickedCO={setClickedCO}
               clickedCO={clickedCO}
            />
            <MapSelect setMap={setMap} map={map} winnerPhase={winnerPhase} />
         </div>
         <PlayerSelection
            winnerPhase={winnerPhase}
            players={players}
            setText={setText}
            winner={winner}
            selectedCO={selectedCO}
            clickedCO={clickedCO}
            winnerColor={winnerColor}
            setWinnerColor={setWinnerColor}
            loserColor={loserColor}
            setLoserColor={setLoserColor}
         />
         <Nell text={text} />
         {winnerPhase === false ? <Position p1={p1} setP1={setP1} /> : null}
         {map && clickedCO && winnerPhase === true ? (
            <NextButton
               onClick={() => {
                  console.log(clickedCO);
                  setDisabledTiers(clickedCO.tier);
                  setWinnerPhase(false);
                  setText(
                     `${
                        players.player1 === winner
                           ? players.player2
                           : players.player1
                     }, please choose CO, COLOR and P1 or P2...`
                  );
                  setClickedCO(false);
               }}
            />
         ) : null}
         {winnerPhase === false && clickedCO !== false ? (
            <NextButton
               onClick={() => {
                  setComplete({
                     player1: winner,
                     player1CO: complete.player1CO,
                     player1Color: winnerColor,
                     player2: player2,
                     player2CO: clickedCO,
                     player2Color: loserColor,
                     map: map,
                     p1: p1
                  });
                  setPage('finalpage');
               }}
            />
         ) : null}
      </div>
   );
};

export default WinnerChoose;
