import React, { useState } from 'react';

import CoinFlip from './steps/CoinFlip';
import WinnerChoose from './steps/WinnerChoose';
import LoserChoose from './steps/LoserChoose';

const App = () => {
   const [players, setPlayers] = useState({
      player1: 'Player 1',
      player2: 'Player 2'
   });
   const [winner, setWinner] = useState(null);
   const [page, setPage] = useState('winnerchoose');
   const [map, setMap] = useState(false);
   const [winnerCO, setWinnerCO] = useState(false);

   return (
      <div className='app'>
         {page === 'coinflip' ? (
            <CoinFlip
               setPage={setPage}
               winner={winner}
               setWinner={setWinner}
               setPlayers={setPlayers}
            />
         ) : null}
         {page === 'winnerchoose' ? (
            <WinnerChoose
               setWinnerCO={setWinnerCO}
               players={players}
               winner={winner}
               setPage={setPage}
               setMap={setMap}
               map={map}
            />
         ) : null}
         {page === 'loserchoose' ? (
            <LoserChoose
               winnerCO={winnerCO}
               players={players}
               winner={winner}
               setPage={setPage}
               map={map}
            />
         ) : null}
      </div>
   );
};

export default App;
