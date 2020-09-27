import React, { useState, useEffect } from 'react';

import Nell from '../components/nell/Nell';
import TierList from '../components/tierlist/TierList';
import MapSelect from '../components/mapselect/MapSelect';
import PlayerSelection from '../components/playerselection/PlayerSelection';
import NextButton from '../components/next-button/NextButton';

const WinnerChoose = ({ players, winner, setMap, map }) => {
   const [text, setText] = useState(
      `${winner}, please pick CO, MAP and COLOR.`
   );
   const [selectedCO, setSelectedCO] = useState('');
   const [clickedCO, setClickedCO] = useState(false);
   const [clickedCO2, setClickedCO2] = useState(false);
   const [winnerPhase, setWinnerPhase] = useState(true);

   useEffect(() => {
      if (clickedCO && map && winnerPhase) {
         setText(
            `${winner}, please pick CO, MAP and COLOR. You can click NEXT STEP when ready...`
         );
      }
   }, [clickedCO, map, winner, winnerPhase]);

   return (
      <div>
         <div className='top-container'>
            <TierList
               winnerPhase={winnerPhase}
               setSelectedCO={setSelectedCO}
               setClickedCO={setClickedCO}
               setClickedCO2={setClickedCO2}
               clickedCO={clickedCO}
               clickedCO2={clickedCO2}
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
            clickedCO2={clickedCO2}
         />
         <Nell text={text} />
         {map && clickedCO ? (
            <NextButton
               onClick={() => {
                  setWinnerPhase(false);
                  // setWinnerCO(clickedCO);
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
      </div>
   );
};

export default WinnerChoose;
