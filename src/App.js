import React, { useState } from 'react';

import CoinFlip from './steps/CoinFlip';
import WinnerChoose from './steps/WinnerChoose';
import FinalPage from './steps/FinalPage';
import MusicPlayer from './components/musicplayer/MusicPlayer';

const App = () => {
   const [players, setPlayers] = useState({
      player1: 'Player 1',
      player2: 'Player 2'
   });
   const [winner, setWinner] = useState(null);
   const [page, setPage] = useState('coinflip');
   const [map, setMap] = useState(false);
   const [complete, setComplete] = useState({});

   return (
      <div className='app'>
         <MusicPlayer />
         {page === 'coinflip' ? (
            <CoinFlip
               setPage={setPage}
               winner={winner}
               setWinner={setWinner}
               setPlayers={setPlayers}
               setComplete={setComplete}
            />
         ) : null}
         {page === 'winnerchoose' ? (
            <WinnerChoose
               players={players}
               winner={winner}
               setMap={setMap}
               map={map}
               complete={complete}
               setComplete={setComplete}
               setPage={setPage}
            />
         ) : null}
         {page === 'finalpage' ? <FinalPage complete={complete} /> : null}
      </div>
   );
};

export default App;
