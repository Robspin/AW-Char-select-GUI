import React, { Fragment, useState } from 'react';

import Coin from '../components/coin/Coin';
import Nell from '../components/nell/Nell';
import NextButton from '../components/next-button/NextButton';

const CoinFlip = ({ setPlayers, winner, setWinner, setPage }) => {
   const [text, setText] = useState(
      'Please fill in the names and flip the coin...'
   );

   return (
      <Fragment>
         <Coin
            setPlayers={setPlayers}
            setWinner={setWinner}
            setText={setText}
         />
         <img
            className='nell-full'
            src={require('../images/Nell-full.png')}
            alt='nell-full'
         />
         <Nell text={text} />
         {winner && <NextButton onClick={() => setPage('winnerchoose')} />}
      </Fragment>
   );
};

export default CoinFlip;
