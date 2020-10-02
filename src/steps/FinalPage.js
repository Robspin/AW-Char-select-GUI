import React from 'react';

import Timer from '../components/timer/Timer';

const FinalPage = ({ complete }) => {
   console.log(complete);

   // const p1 = complete.p1 === true ? 'player1' : 'player2';

   return (
      <div className='final-page'>
         <img
            className='logo'
            src={require('../images/logopvp.png')}
            alt='advance wars pvp logo'
         />
         <div className='final-sub-container'>
            <div className='flex finalp'>
               <h4 className='playname'>{complete.player1}</h4>
               <div className={`player ${complete.player1Color}`}>
                  <img
                     className='COSelect'
                     src={require(`../images/COS/${complete.player1CO.name}0.png`)}
                     alt='winner CO'
                  />
                  <img
                     className='player1-p1'
                     src={require(`../images/p${
                        complete.p1 === true ? 1 : 2
                     }.png`)}
                     alt='p1-position'
                  />
               </div>
            </div>
            <img className='vs' src={require('../images/VS.png')} alt='VS' />
            <div className='flex'>
               <h4 className='playname'>{complete.player2}</h4>
               <div className={`player ${complete.player2Color}`}>
                  <img
                     className='COSelect'
                     src={require(`../images/COS/${complete.player2CO.name}0.png`)}
                     alt='winner CO'
                  />
                  <img
                     className='player1-p1'
                     src={require(`../images/p${
                        complete.p1 === true ? 2 : 1
                     }.png`)}
                     alt='p1-position'
                  />
               </div>
            </div>
            <div className='final-map-container'>
               <h4>{complete.map.name}</h4>
               <img
                  className='final-map'
                  src={require(`../images/maps/${complete.map.selectedMap}.PNG`)}
                  alt='current map'
               />
            </div>
         </div>
         <Timer />
      </div>
   );
};

export default FinalPage;
