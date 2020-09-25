import React, { Fragment, useState } from 'react';
import './mapselect.css';

const MapSelect = () => {
   const [hoverImg, setHoverImg] = useState('');
   const [modalClass, setModalClass] = useState('modal');
   const [name, setName] = useState('');
   const [selectedMap, setSelectedMap] = useState('map');

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

   return (
      <Fragment>
         <div>
            <h3>SELECT MAP</h3>
            <div className='map-container'>
               <img
                  className={selectedMap === 'map pos1' ? 'map pos' : 'map'}
                  src={require('../../images/maps/1.PNG')}
                  alt='AGITATED'
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  onClick={() => setSelectedMap('map pos1')}
               />
               <img
                  className={selectedMap === 'map pos2' ? 'map pos' : 'map'}
                  src={require('../../images/maps/2.PNG')}
                  alt='RAINBOW SYMPHONY'
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  onClick={() => setSelectedMap('map pos2')}
               />
               <img
                  className={selectedMap === 'map pos3' ? 'map pos' : 'map'}
                  src={require('../../images/maps/3.PNG')}
                  alt='SOTHIS'
                  onMouseEnter={onHover}
                  onMouseLeave={onLeave}
                  onClick={() => setSelectedMap('map pos3')}
               />
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
