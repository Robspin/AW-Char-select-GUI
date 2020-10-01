import React from 'react';
import './tierlist.css';
import soundfile from '../../sounds/song103.wav';

const TierList = ({
   setSelectedCO,
   setClickedCO,
   clickedCO,
   disabledTiers
}) => {
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
         <div
            className={
               disabledTiers === 's' ||
               disabledTiers === 'a' ||
               disabledTiers === 'b' ||
               disabledTiers === 'c' ||
               disabledTiers === 'd'
                  ? 'row disabled'
                  : 'row'
            }
         >
            <img
               className='tier-img'
               src={require('../../images/Tiers/broken.png')}
               alt='broken-tier'
            />
            <img
               src={require('../../images/COS/hachi0.png')}
               alt='hachi'
               className={clickedCO.name === 'hachi' ? 'CO hachi' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'hachi',
                     tier: 'op'
                  })
               }
            />
            <img
               src={require('../../images/COS/sensei0.png')}
               alt='sensei'
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               className={clickedCO.name === 'sensei' ? 'CO sensei' : 'CO'}
               onClick={e => {
                  setClickedCO({
                     source: e.target.src,
                     name: 'sensei',
                     tier: 'op'
                  });
               }}
            />
         </div>
         <div
            className={
               disabledTiers === 'a' ||
               disabledTiers === 'b' ||
               disabledTiers === 'c' ||
               disabledTiers === 'd'
                  ? 'row disabled'
                  : 'row'
            }
         >
            <img
               className='tier-img letter'
               src={require('../../images/Tiers/S.png')}
               alt='s-tier'
            />
            <img
               src={require('../../images/COS/rachel0.png')}
               alt='rachel'
               className={clickedCO.name === 'rachel' ? 'CO rachel' : 'CO'}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'rachel',
                     tier: 's'
                  })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/colin0.png')}
               alt='colin'
               className={clickedCO.name === 'colin' ? 'CO colin' : 'CO'}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'colin',
                     tier: 's'
                  })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/kanbei0.png')}
               alt='kanbei'
               className={clickedCO.name === 'kanbei' ? 'CO kanbei' : 'CO'}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'kanbei',
                     tier: 's'
                  })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/eagle0.png')}
               alt='eagle'
               className={clickedCO.name === 'eagle' ? 'CO eagle' : 'CO'}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'eagle',
                     tier: 's'
                  })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/javier0.png')}
               alt='javier'
               className={clickedCO.name === 'javier' ? 'CO javier' : 'CO'}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'javier',
                     tier: 's'
                  })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
         </div>
         <div
            className={
               disabledTiers === 'b' ||
               disabledTiers === 'c' ||
               disabledTiers === 'd'
                  ? 'row disabled'
                  : 'row'
            }
         >
            {' '}
            <img
               className='tier-img letter'
               src={require('../../images/Tiers/A.png')}
               alt='a-tier'
            />
            <img
               src={require('../../images/COS/sami0.png')}
               alt='sami'
               className={clickedCO.name === 'sami' ? 'CO sami' : 'CO'}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'sami',
                     tier: 'a'
                  })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/vonbolt0.png')}
               alt='vonbolt'
               className={clickedCO.name === 'vonbolt' ? 'CO vonbolt' : 'CO'}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'vonbolt',
                     tier: 'a'
                  })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/kindle0.png')}
               alt='kindle'
               className={clickedCO.name === 'kindle' ? 'CO kindle' : 'CO'}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'kindle',
                     tier: 'a'
                  })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/hawke0.png')}
               alt='hawke'
               className={clickedCO.name === 'hawke' ? 'CO hawke' : 'CO'}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'hawke',
                     tier: 'a'
                  })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/nell0.png')}
               alt='nell'
               className={clickedCO.name === 'nell' ? 'CO nelll' : 'CO'}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'nell',
                     tier: 'a'
                  })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
         </div>
         <div
            className={
               disabledTiers === 'c' || disabledTiers === 'd'
                  ? 'row disabled'
                  : 'row'
            }
         >
            <img
               className='tier-img letter'
               src={require('../../images/Tiers/B.png')}
               alt='b-tier'
            />
            <img
               src={require('../../images/COS/jake0.png')}
               alt='jake'
               className={clickedCO.name === 'jake' ? 'CO jake' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'jake',
                     tier: 'b'
                  })
               }
            />
            <img
               src={require('../../images/COS/sonja0.png')}
               alt='sonja'
               className={clickedCO.name === 'sonja' ? 'CO sonja' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'sonja',
                     tier: 'b'
                  })
               }
            />
            <img
               src={require('../../images/COS/jess0.png')}
               alt='jess'
               className={clickedCO.name === 'jess' ? 'CO jess' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'jess',
                     tier: 'b'
                  })
               }
            />
            <img
               src={require('../../images/COS/max0.png')}
               alt='max'
               className={clickedCO.name === 'max' ? 'CO max' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({ source: e.target.src, name: 'max', tier: 'b' })
               }
            />
            <img
               src={require('../../images/COS/drake0.png')}
               alt='drake'
               className={clickedCO.name === 'drake' ? 'CO drake' : 'CO'}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'drake',
                     tier: 'b'
                  })
               }
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
            />
            <img
               src={require('../../images/COS/andy0.png')}
               alt='andy'
               className={clickedCO.name === 'andy' ? 'CO andy' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'andy',
                     tier: 'b'
                  })
               }
            />
         </div>
         <div className={disabledTiers === 'd' ? 'row disabled' : 'row'}>
            <img
               className='tier-img letter'
               src={require('../../images/Tiers/C.png')}
               alt='c-tier'
            />

            <img
               src={require('../../images/COS/sasha0.png')}
               alt='sasha'
               className={clickedCO.name === 'sasha' ? 'CO sasha' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'sasha',
                     tier: 'c'
                  })
               }
            />
            <img
               src={require('../../images/COS/flak0.png')}
               alt='flak'
               className={clickedCO.name === 'flak' ? 'CO flak' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'flak',
                     tier: 'c'
                  })
               }
            />
            <img
               src={require('../../images/COS/jugger0.png')}
               alt='jugger'
               className={clickedCO.name === 'jugger' ? 'CO jugger' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'jugger',
                     tier: 'c'
                  })
               }
            />
            <img
               src={require('../../images/COS/grit0.png')}
               alt='grit'
               className={clickedCO.name === 'grit' ? 'CO grit' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'grit',
                     tier: 'c'
                  })
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
               src={require('../../images/COS/grimm0.png')}
               alt='grimm'
               className={clickedCO.name === 'grimm' ? 'CO grimm' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'grimm',
                     tier: 'd'
                  })
               }
            />
            <img
               src={require('../../images/COS/lash0.png')}
               alt='lash'
               className={clickedCO.name === 'lash' ? 'CO lash' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'lash',
                     tier: 'd'
                  })
               }
            />
            <img
               src={require('../../images/COS/adder0.png')}
               alt='adder'
               className={clickedCO.name === 'adder' ? 'CO adder' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'adder',
                     tier: 'd'
                  })
               }
            />
            <img
               src={require('../../images/COS/koal0.png')}
               alt='koal  '
               className={clickedCO.name === 'koal' ? 'CO koal' : 'CO'}
               onMouseEnter={enterHandler}
               onMouseLeave={leaveHandler}
               onClick={e =>
                  setClickedCO({
                     source: e.target.src,
                     name: 'koal',
                     tier: 'd'
                  })
               }
            />
         </div>
      </div>
   );
};

export default TierList;
