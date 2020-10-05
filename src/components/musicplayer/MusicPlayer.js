import React, { useState, useEffect } from 'react';
import './musicPlayer.css';

const useAudio = url => {
   const [audio, setAudio] = useState(new Audio(url));
   const [playing, setPlaying] = useState(false);

   const toggle = () => setPlaying(!playing);

   useEffect(() => {
      playing ? audio.play() : audio.pause();
   }, [playing, audio]);

   // useEffect(() => {
   //    audio.addEventListener('ended', () => setPlaying(false));
   //    return () => {
   //       audio.removeEventListener('ended', () => setPlaying(false));
   //    };
   // }, [audio]);

   return [playing, toggle, audio, setAudio];
};

const MusicPlayer = () => {
   const [playing, toggle, audio, setAudio] = useAudio(
      require(`../../music/jake.mp3`)
   );
   const [songImage, setSongImage] = useState(`jake`);
   const [progressState, setProgressState] = useState(0);
   const [songIndex, setSongIndex] = useState(0);

   // Song titles
   const songs = [
      'jake',
      'sami',
      'andy',
      'max',
      'hawke',
      'adder',
      'grit',
      'sonja',
      'olaf',
      'lash',
      'eagle',
      'drake',
      'colin',
      'nell',
      'kanbei',
      'sensei',
      'AW1_menu'
   ];

   useEffect(() => {
      audio.addEventListener('timeupdate', updateProgress);

      return () => {
         audio.removeEventListener('timeupdate', updateProgress);
      };
   }, [playing, audio]);

   useEffect(() => {
      audio.addEventListener('ended', nextSong);
      return () => {
         audio.removeEventListener('ended', nextSong);
      };
   });

   const prevSong = () => {
      let counter = songIndex - 1;
      setSongIndex(counter);

      if (counter < 0) {
         counter = songs.length - 1;
         setSongIndex(counter);
      }
      setAudio(new Audio(require(`../../music/${songs[counter]}.mp3`)));
      setSongImage(`${songs[counter]}`);
      audio.load();
   };

   // Next song
   const nextSong = () => {
      let counter = songIndex + 1;
      setSongIndex(counter);

      if (counter > songs.length - 1) {
         counter = 0;
         setSongIndex(0);
      }
      setAudio(new Audio(require(`../../music/${songs[counter]}.mp3`)));
      setSongImage(`${songs[counter]}`);
      audio.load();
   };

   // Update progress bar
   const updateProgress = e => {
      const { duration, currentTime } = e.srcElement;
      const progressPercent = (currentTime / duration) * 100;
      setProgressState(progressPercent);
   };

   return (
      <div className='container-container'>
         <div
            className={playing ? 'music-container play' : 'music-container'}
            id='music-container'
         >
            <div className='music-info'>
               <h5 id='title'>{`${songs[songIndex]}'s theme`}</h5>
               <div className='progress-container' id='progress-container'>
                  <div
                     className='progress'
                     id='progress'
                     style={{ width: `${progressState}%` }}
                  ></div>
               </div>
            </div>

            <div className='navigation'>
               <button id='prev' className='action-btn' onClick={prevSong}>
                  <i className='fas fa-backward'></i>
               </button>
               <button
                  id='play'
                  onClick={toggle}
                  className='action-btn action-btn-big'
               >
                  <i className={playing ? 'fas fa-pause' : 'fas fa-play'}></i>
               </button>
               <button id='next' className='action-btn' onClick={nextSong}>
                  <i className='fas fa-forward'></i>
               </button>
            </div>
            <div className='img-container'>
               <img
                  src={require(`../../music/${songImage}.png`)}
                  alt='music-cover'
                  id='cover'
               />
            </div>
         </div>
      </div>
   );
};

export default MusicPlayer;
