import React, { useState } from 'react';

import CoinFlip from './steps/CoinFlip';
import WinnerChoose from './steps/WinnerChoose';
import Player from './components/player/Player';
import soundtrack from './sounds/Jake-Theme.mp3';

const App = () => {
   const [players, setPlayers] = useState({
      player1: 'Player 1',
      player2: 'Player 2'
   });
   const [winner, setWinner] = useState(null);
   const [page, setPage] = useState('coinflip');
   const [map, setMap] = useState(false);

   return (
      <div className='app'>
         <Player url={soundtrack} />
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
               players={players}
               winner={winner}
               setMap={setMap}
               map={map}
            />
         ) : null}
      </div>
   );
};

export default App;
