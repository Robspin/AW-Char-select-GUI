import React, { useState } from 'react';
import './tierlist.css';

const TierList = ({ setSelectedCO, setClickedCO, clickedCO }) => {
   const enterHandler = e => {
      setSelectedCO(e.target.src);
   };

   const leaveHandler = e => {
      if (clickedCO === e.target.alt) {
         return null;
      }
      setSelectedCO('');
   };

   return (
      <div className='tierlist-grid'>
         <div className='row'>
            <img
               className='tier-img'
               src={require('../../images/Tiers/broken.png')}
               alt='broken-tier'
            />
            <img
               src={require('../../images/COS/Hachi0.png')}
               alt='hachi'
               className={clickedCO === 'hachi' ? 'CO hachi' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={() => setClickedCO('hachi')}
            />
            <img
               src={require('../../images/COS/Sensei0.png')}
               alt='sensei'
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               className={clickedCO === 'sensei' ? 'CO sensei' : 'CO'}
               onClick={() => setClickedCO('sensei')}
            />
         </div>
         <div className='row'>
            <img
               className='tier-img letter'
               src={require('../../images/Tiers/S.png')}
               alt='s-tier'
            />
            <img
               src={require('../../images/COS/Rachel0.png')}
               alt='rachel'
               className={clickedCO === 'rachel' ? 'CO rachel' : 'CO'}
               onClick={() => setClickedCO('rachel')}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/Colin0.png')}
               alt='colin'
               className={clickedCO === 'colin' ? 'CO colin' : 'CO'}
               onClick={() => setClickedCO('colin')}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/Kanbei0.png')}
               alt='kanbei'
               className={clickedCO === 'kanbei' ? 'CO kanbei' : 'CO'}
               onClick={() => setClickedCO('kanbei')}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/Eagle0.png')}
               alt='eagle'
               className={clickedCO === 'eagle' ? 'CO eagle' : 'CO'}
               onClick={() => setClickedCO('eagle')}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/Javier0.png')}
               alt='javier'
               className={clickedCO === 'javier' ? 'CO javier' : 'CO'}
               onClick={() => setClickedCO('javier')}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
         </div>
         <div className='row'>
            {' '}
            <img
               className='tier-img letter'
               src={require('../../images/Tiers/A.png')}
               alt='a-tier'
            />
            <img
               src={require('../../images/COS/Sami0.png')}
               alt='sami'
               className={clickedCO === 'sami' ? 'CO sami' : 'CO'}
               onClick={() => setClickedCO('sami')}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/VonBolt0.png')}
               alt='vonbolt'
               className={clickedCO === 'vonbolt' ? 'CO vonbolt' : 'CO'}
               onClick={() => setClickedCO('vonbolt')}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/Kindle0.png')}
               alt='kindle'
               className={clickedCO === 'kindle' ? 'CO kindle' : 'CO'}
               onClick={() => setClickedCO('kindle')}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/Hawke0.png')}
               alt='hawke'
               className={clickedCO === 'hawke' ? 'CO hawke' : 'CO'}
               onClick={() => setClickedCO('hawke')}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/Drake0.png')}
               alt='drake'
               className={clickedCO === 'drake' ? 'CO drake' : 'CO'}
               onClick={() => setClickedCO('drake')}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/Nell0.png')}
               alt='nell'
               className={clickedCO === 'nell' ? 'CO nelll' : 'CO'}
               onClick={() => setClickedCO('nell')}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
         </div>
         <div className='row'>
            <img
               className='tier-img letter'
               src={require('../../images/Tiers/B.png')}
               alt='b-tier'
            />
            <img
               src={require('../../images/COS/Sonja0.png')}
               alt='sonja'
               className={clickedCO === 'sonja' ? 'CO sonja' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={() => setClickedCO('sonja')}
            />
            <img
               src={require('../../images/COS/Jess0.png')}
               alt='jess'
               className={clickedCO === 'jess' ? 'CO jess' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={() => setClickedCO('jess')}
            />
            <img
               src={require('../../images/COS/Max0.png')}
               alt='max'
               className={clickedCO === 'max' ? 'CO max' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={() => setClickedCO('max')}
            />
            <img
               src={require('../../images/COS/Andy0.png')}
               alt='andy'
               className={clickedCO === 'andy' ? 'CO andy' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={() => setClickedCO('andy')}
            />
         </div>
         <div className='row'>
            <img
               className='tier-img letter'
               src={require('../../images/Tiers/C.png')}
               alt='c-tier'
            />
            <img
               src={require('../../images/COS/Grimm0.png')}
               alt='grimm'
               className={clickedCO === 'grimm' ? 'CO grimm' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={() => setClickedCO('grimm')}
            />
            <img
               src={require('../../images/COS/Sasha0.png')}
               alt='sasha'
               className={clickedCO === 'sasha' ? 'CO sasha' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={() => setClickedCO('sasha')}
            />
            <img
               src={require('../../images/COS/Flak0.png')}
               alt='flak'
               className={clickedCO === 'flak' ? 'CO flak' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={() => setClickedCO('flak')}
            />
            <img
               src={require('../../images/COS/Jugger0.png')}
               alt='jugger'
               className={clickedCO === 'jugger' ? 'CO jugger' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={() => setClickedCO('jugger')}
            />
            <img
               src={require('../../images/COS/Grit0.png')}
               alt='grit'
               className={clickedCO === 'grit' ? 'CO grit' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={() => setClickedCO('grit')}
            />
         </div>
         <div className='row'>
            <img
               className='tier-img letter'
               src={require('../../images/Tiers/D.png')}
               alt='d-tier'
            />
            <img
               src={require('../../images/COS/Jake0.png')}
               alt='jake'
               className={clickedCO === 'jake' ? 'CO jake' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={() => setClickedCO('jake')}
            />
            <img
               src={require('../../images/COS/Lash0.png')}
               alt='lash'
               className={clickedCO === 'lash' ? 'CO lash' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={() => setClickedCO('lash')}
            />
            <img
               src={require('../../images/COS/Adder0.png')}
               alt='adder'
               className={clickedCO === 'adder' ? 'CO adder' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={() => setClickedCO('adder')}
            />
            <img
               src={require('../../images/COS/Koal0.png')}
               alt='koal  '
               className={clickedCO === 'koal' ? 'CO koal' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={() => setClickedCO('koal')}
            />
         </div>
      </div>
   );
};

export default TierList;
