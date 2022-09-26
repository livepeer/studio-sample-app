import { useState } from 'react';
import { VideoPlayer } from '@livepeer/react';
import styles from '../styles/VideoPlayer.module.css';

export default function Player() {
  // Set the state to get either the playback URL or playback ID
  const [playbackSource, setPlaybackSource] = useState<string>('');

  // Quick verifiation to check if url provided is a playback url
  const playbackurl = '.m3u8';


  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Livepeer Studio Video Player</h1>
      <h5 className={styles.h5}>Provide a playback URL or playback Id</h5>
      <input
        className='border rounded-md text-base mx-2'
        type='text'
        value={playbackSource}
        name='playbackSource'
        onChange={(e) => setPlaybackSource(e.target.value)}
      />

      {playbackSource.includes(playbackurl) ? (
        <VideoPlayer
          src={playbackSource}
          className={styles.card}
          width={800}
          autoPlay={true}
          loop
          muted
        />
      ) : (
        <VideoPlayer
          playbackId={playbackSource}
          className={styles.card}
          width={800}
          autoPlay={true}
          loop
          muted
        />
      )}
    </div>
  );
}
