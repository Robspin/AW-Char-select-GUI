import React, { Fragment, useState, useEffect } from 'react';
import './mapselect.css';

import maps from './maps';

const MapSelect = ({ setMap, winnerPhase, map, setComTowers, setAirports }) => {
   const [hoverImg, setHoverImg] = useState('');
   const [modalClass, setModalClass] = useState('modal');
   const [name, setName] = useState('');
   const [selectedMap, setSelectedMap] = useState('map');
   const [more, setMore] = useState(true);

   const [shuffleList, setShuffleList] = useState(maps);

   useEffect(() => {
      if (map) {
         setSelectedMap(map.selectedMap);
      }
   }, [map]);

   const onHover = e => {
      setHoverImg(e.target.src);
      setName(e.target.alt);
      setModalClass('modal show');
   };

   const onLeave = () => {
      setHoverImg('');
      setName('');
      setModalClass('modal');
   };

   const shuffle = () => {
      let result = maps.slice(0, 3).map(function () {
         return this.splice(Math.floor(Math.random() * this.length), 1)[0];
      }, maps.slice());

      setShuffleList(result);
   };

   const mapList = shuffleList.slice(0, 3).map(map => (
      <img
         className={selectedMap === map.nr ? 'map pos' : 'map'}
         src={require(`../../images/maps/${map.nr}.PNG`)}
         alt={map.name}
         onMouseEnter={onHover}
         onMouseLeave={onLeave}
         key={map.nr}
         onClick={() => {
            if (!winnerPhase) return null;
            if (selectedMap === map.nr) {
               setSelectedMap('map');
               setComTowers(0);
               setAirports(true);
               setMore(true);
               return setMap(null);
            }
            setSelectedMap(map.nr);
            setMap({ name: map.name, selectedMap: map.nr });
            setComTowers(map.comTowers);
            setAirports(map.airports);
            setMore(false);
         }}
      />
   ));

   return (
      <Fragment>
         <div>
            <div className='inline'>
               <div />
               <h3>SELECT MAP</h3>
               <button
                  className={
                     more === true ? 'mapBtn flip' : 'mapBtn flip btnDisabled'
                  }
                  onClick={shuffle}
               >
                  More
               </button>
            </div>
            <div className='map-container'>
               {mapList}

               {/* <img
                  className={selectedMap === '1' ? 'map pos' : 'map'}
                  src={require('../../images/maps/1.PNG')}
                  alt='AGITATED'
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  onClick={() => {
                     if (!winnerPhase) return null;
                     setSelectedMap('1');
                     setMap({ name: 'AGITATED', selectedMap: '1' });
                  }}
               />
               */}
            </div>
         </div>
         <div className={modalClass}>
            <h4>{name}</h4>
            <img className='modal-img' alt='' src={hoverImg} />
         </div>
      </Fragment>
   );
};

export default MapSelect;
