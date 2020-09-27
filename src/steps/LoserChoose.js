import React, { useState } from 'react';

import Nell from '../components/nell/Nell';
import TierList from '../components/tierlist/TierList';
import MapSelect from '../components/mapselect/MapSelect';
import LoserSelection from '../components/playerselection/PlayerSelection';

const LoserChoose = ({ players, winner, map, winnerCO }) => {
   const [text, setText] = useState(
      `${winner}, please pick CO, MAP and COLOR.`
   );
   const [selectedCO, setSelectedCO] = useState('');
   const [clickedCO, setClickedCO] = useState('');

   const disabled = true;

   console.log(winnerCO);

   return (
      <div>
         <div className='top-container'>
            <TierList
               setSelectedCO={setSelectedCO}
               setClickedCO={setClickedCO}
               clickedCO={clickedCO}
            />
            <MapSelect disabled={disabled} map={map} />
         </div>
         <LoserSelection
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

export default LoserChoose;
