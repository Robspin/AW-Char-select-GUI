import React, { useState, useEffect } from 'react';

import Nell from '../components/nell/Nell';
import TierList from '../components/tierlist/TierList';
import MapSelect from '../components/mapselect/MapSelect';
import PlayerSelection from '../components/playerselection/PlayerSelection';
import NextButton from '../components/next-button/NextButton';

const WinnerChoose = ({
   players,
   winner,
   setPage,
   setMap,
   map,
   setWinnerCO
}) => {
   const [text, setText] = useState(
      `${winner}, please pick CO, MAP and COLOR.`
   );
   const [selectedCO, setSelectedCO] = useState('');
   const [clickedCO, setClickedCO] = useState(false);

   useEffect(() => {
      if (clickedCO && map) {
         setText(
            `${winner}, please pick CO, MAP and COLOR. You can click NEXT STEP when ready...`
         );
      }
   }, [clickedCO, map, winner]);

   return (
      <div>
         <div className='top-container'>
            <TierList
               setSelectedCO={setSelectedCO}
               setClickedCO={setClickedCO}
               clickedCO={clickedCO}
            />
            <MapSelect setMap={setMap} map={map} />
         </div>
         <PlayerSelection
            players={players}
            setText={setText}
            winner={winner}
            selectedCO={selectedCO}
            clickedCO={clickedCO}
         />
         <Nell text={text} />
         {map && clickedCO ? (
            <NextButton
               onClick={() => {
                  setPage('loserchoose');
                  setWinnerCO(clickedCO);
               }}
            />
         ) : null}
      </div>
   );
};

export default WinnerChoose;
