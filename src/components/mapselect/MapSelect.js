import React, { Fragment, useState, useEffect } from 'react';
import './mapselect.css';

import maps, { total } from './maps';

const MapSelect = ({ setMap, winnerPhase, map }) => {
   const [hoverImg, setHoverImg] = useState('');
   const [modalClass, setModalClass] = useState('modal');
   const [name, setName] = useState('');
   const [selectedMap, setSelectedMap] = useState('map');
   const [slice, setSlice] = useState({ a: 0, b: 3 });

   useEffect(() => {
      if (map) {
         setSelectedMap(map.selectedMap);
      }
      console.log(maps);
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
      let x = slice.a + total > total ? 3 : slice.a + total;
      let y = x - 3;
      setSlice({ a: y, b: x });
   };

   const mapList = maps.slice(slice.a, slice.b).map(map => (
      <img
         className={selectedMap === map.nr ? 'map pos' : 'map'}
         src={require(`../../images/maps/${map.nr}.PNG`)}
         alt={map.name}
         onMouseEnter={onHover}
         onMouseLeave={onLeave}
         key={map.nr}
         onClick={() => {
            if (!winnerPhase) return null;
            setSelectedMap(map.nr);
            setMap({ name: map.name, selectedMap: map.nr });
         }}
      />
   ));

   return (
      <Fragment>
         <div>
            <div className='inline'>
               <div />
               <h3>SELECT MAP</h3>
               <button className='mapBtn flip' onClick={shuffle}>
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
               <img
                  className={selectedMap === '2' ? 'map pos' : 'map'}
                  src={require('../../images/maps/2.PNG')}
                  alt='RAINBOW SYMPHONY'
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  onClick={() => {
                     if (!winnerPhase) return null;
                     setSelectedMap('2');
                     setMap({ name: 'RAINBOW SYMPHONY', selectedMap: '2' });
                  }}
               />
               <img
                  className={selectedMap === '3' ? 'map pos' : 'map'}
                  src={require('../../images/maps/3.PNG')}
                  alt='ATLAS'
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  onClick={() => {
                     if (!winnerPhase) return null;
                     setSelectedMap('3');
                     setMap({ name: 'ATLAS', selectedMap: '3' });
                  }}
               /> */}
            </div>
         </div>
         <div className={modalClass}>
            <h4>{name}</h4>
            <img className='modal-img' alt='bigmap' src={hoverImg} />
         </div>
      </Fragment>
   );
};

export default MapSelect;
