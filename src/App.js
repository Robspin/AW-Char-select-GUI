import React, { useState } from 'react';

import CoinFlip from './steps/CoinFlip';
import WinnerChoose from './steps/WinnerChoose';

const App = () => {
   const [players, setPlayers] = useState({
      player1: 'Player 1',
      player2: 'Player 2'
   });
   const [winner, setWinner] = useState(null);
   const [page, setPage] = useState('winnerchoose');

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
            <WinnerChoose players={players} winner={winner} setPage={setPage} />
         ) : null}
      </div>
   );
};

export default App;
