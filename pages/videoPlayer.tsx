import {useState} from 'react';
import { VideoPlayer } from '@livepeer/react';
import styles from '../styles/VideoPlayer.module.css';

export default function Player() {
  // Set the state to get either the playback URL or playback ID
  const [ playbackSource, setPlaybackSource ] = useState<string>('');

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Livepeer Studio Video Player</h1>
      <h5 className={styles.h5}>Provide a playback Id or URL</h5>
      <input
        className='border rounded-md text-base mx-2'
        type='text'
        value={playbackSource}
        name='playbackSource'
        onChange={(e) => setPlaybackSource(e.target.value)}
      />
      

      <VideoPlayer
        playbackId = { playbackSource } 
        src={playbackSource}
        className={styles.card}
        width={500}
        autoPlay={true}
      />
    </div>
  );
}
