import React, { useState } from 'react';

import Nell from '../components/nell/Nell';
import TierList from '../components/tierlist/TierList';
import MapSelect from '../components/mapselect/MapSelect';
import PlayerSelection from '../components/playerselection/PlayerSelection';
// import NextButton from '../components/next-button/NextButton';

// todo
// - Create Tierlist layout and CO select system
// - Create MAP layout and select system (with popup modal to see bigger?)
// - Create color picking system.
// - If everything is picked, next button can appear for next step.

const WinnerChoose = ({ players, winner, setPage }) => {
   const [text, setText] = useState(
      `${winner}, please pick CO, MAP and COLOR.`
   );
   const [selectedCO, setSelectedCO] = useState('');
   const [clickedCO, setClickedCO] = useState('');

   return (
      <div>
         <div className='top-container'>
            <TierList
               setSelectedCO={setSelectedCO}
               setClickedCO={setClickedCO}
               clickedCO={clickedCO}
            />
            <MapSelect />
         </div>
         <PlayerSelection
            players={players}
            setText={setText}
            winner={winner}
            selectedCO={selectedCO}
            clickedCO={clickedCO}
         />
         <Nell text={text} />
         {/* <NextButton /> */}
      </div>
   );
};

export default WinnerChoose;
