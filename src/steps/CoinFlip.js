import React, { Fragment, useState } from 'react';

import Coin from '../components/coin/Coin';
import Nell from '../components/nell/Nell';

const CoinFlip = () => {
   const [text, setText] = useState(
      'Please fill in the names and flip the coin...'
   );
   const [players, setPlayers] = useState(null);
   const [winner, setWinner] = useState(null);

   console.log(players);
   console.log(winner);

   return (
      <Fragment>
         <Coin
            setPlayers={setPlayers}
            setWinner={setWinner}
            setText={setText}
         />
         <Nell text={text} />
      </Fragment>
   );
};

export default CoinFlip;
