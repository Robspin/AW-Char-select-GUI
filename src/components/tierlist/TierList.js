import React from 'react';
import './tierlist.css';
import soundfile from '../../sounds/song103.wav';

const TierList = ({ setSelectedCO, setClickedCO, clickedCO, winnerPhase }) => {
   const soundEffect = new Audio(soundfile);

   const enterHandler = e => {
      setSelectedCO(e.target.src);
      soundEffect.play();
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
               className={clickedCO.name === 'hachi' ? 'CO hachi' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e => {
                  if (winnerPhase === true) {
                     setClickedCO({ source: e.target.src, name: 'hachi' });
                  } else if (winnerPhase === false) {
                     setClickedCO({ source: e.target.src, name: 'hachi' });
                  }
               }}
            />
            <img
               src={require('../../images/COS/Sensei0.png')}
               alt='sensei'
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               className={clickedCO.name === 'sensei' ? 'CO sensei' : 'CO'}
               onClick={e => {
                  setClickedCO({ source: e.target.src, name: 'sensei' });
               }}
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
               className={clickedCO.name === 'rachel' ? 'CO rachel' : 'CO'}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'rachel' })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/Colin0.png')}
               alt='colin'
               className={clickedCO.name === 'colin' ? 'CO colin' : 'CO'}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'colin' })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/Kanbei0.png')}
               alt='kanbei'
               className={clickedCO.name === 'kanbei' ? 'CO kanbei' : 'CO'}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'kanbei' })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/Eagle0.png')}
               alt='eagle'
               className={clickedCO.name === 'eagle' ? 'CO eagle' : 'CO'}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'eagle' })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/Javier0.png')}
               alt='javier'
               className={clickedCO.name === 'javier' ? 'CO javier' : 'CO'}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'javier' })
               }
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
               className={clickedCO.name === 'sami' ? 'CO sami' : 'CO'}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'sami' })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/VonBolt0.png')}
               alt='vonbolt'
               className={clickedCO.name === 'vonbolt' ? 'CO vonbolt' : 'CO'}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'vonbolt' })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/Kindle0.png')}
               alt='kindle'
               className={clickedCO.name === 'kindle' ? 'CO kindle' : 'CO'}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'kindle' })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/Hawke0.png')}
               alt='hawke'
               className={clickedCO.name === 'hawke' ? 'CO hawke' : 'CO'}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'hawke' })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/Nell0.png')}
               alt='nell'
               className={clickedCO.name === 'nell' ? 'CO nelll' : 'CO'}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'nell' })
               }
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
               src={require('../../images/COS/Jake0.png')}
               alt='jake'
               className={clickedCO.name === 'jake' ? 'CO jake' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'jake' })
               }
            />
            <img
               src={require('../../images/COS/Sonja0.png')}
               alt='sonja'
               className={clickedCO.name === 'sonja' ? 'CO sonja' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'sonja' })
               }
            />
            <img
               src={require('../../images/COS/Jess0.png')}
               alt='jess'
               className={clickedCO.name === 'jess' ? 'CO jess' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'jess' })
               }
            />
            <img
               src={require('../../images/COS/Max0.png')}
               alt='max'
               className={clickedCO.name === 'max' ? 'CO max' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'max' })
               }
            />
            <img
               src={require('../../images/COS/Drake0.png')}
               alt='drake'
               className={clickedCO.name === 'drake' ? 'CO drake' : 'CO'}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'drake' })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/Andy0.png')}
               alt='andy'
               className={clickedCO.name === 'andy' ? 'CO andy' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'andy' })
               }
            />
         </div>
         <div className='row'>
            <img
               className='tier-img letter'
               src={require('../../images/Tiers/C.png')}
               alt='c-tier'
            />

            <img
               src={require('../../images/COS/Sasha0.png')}
               alt='sasha'
               className={clickedCO.name === 'sasha' ? 'CO sasha' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'sasha' })
               }
            />
            <img
               src={require('../../images/COS/Flak0.png')}
               alt='flak'
               className={clickedCO.name === 'flak' ? 'CO flak' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'flak' })
               }
            />
            <img
               src={require('../../images/COS/Jugger0.png')}
               alt='jugger'
               className={clickedCO.name === 'jugger' ? 'CO jugger' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'jugger' })
               }
            />
            <img
               src={require('../../images/COS/Grit0.png')}
               alt='grit'
               className={clickedCO.name === 'grit' ? 'CO grit' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'grit' })
               }
            />
         </div>
         <div className='row'>
            <img
               className='tier-img letter'
               src={require('../../images/Tiers/D.png')}
               alt='d-tier'
            />
            <img
               src={require('../../images/COS/Grimm0.png')}
               alt='grimm'
               className={clickedCO.name === 'grimm' ? 'CO grimm' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'grimm' })
               }
            />
            <img
               src={require('../../images/COS/Lash0.png')}
               alt='lash'
               className={clickedCO.name === 'lash' ? 'CO lash' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'lash' })
               }
            />
            <img
               src={require('../../images/COS/Adder0.png')}
               alt='adder'
               className={clickedCO.name === 'adder' ? 'CO adder' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'adder' })
               }
            />
            <img
               src={require('../../images/COS/Koal0.png')}
               alt='koal  '
               className={clickedCO.name === 'koal' ? 'CO koal' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'koal' })
               }
            />
         </div>
      </div>
   );
};

export default TierList;
