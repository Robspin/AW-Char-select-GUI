import React, { Fragment, useState } from 'react';

import Coin from '../components/coin/Coin';
import Nell from '../components/nell/Nell';

const CoinFlip = () => {
   const [text, setText] = useState(
      'Please fill in the names and flip the coin...'
   );
   const [winner, setWinner] = useState('');

   return (
      <Fragment>
         <Coin />
         <Nell text={text} />
      </Fragment>
   );
};

export default CoinFlip;
