import { useState } from 'react';
import { Player, useAssetMetrics } from '@livepeer/react';
import styles from '../../styles/VideoPlayer.module.css';


export default function AssetMetrics() {
  // Set the state to get either the playback URL or playback ID
  const [ assetId, setAssetId ] = useState<string>( '' );
  const { data: metrics } = useAssetMetrics({ assetId, refetchInterval: 30000 });
  const playbackId: any= metrics?.metrics[ 0 ].id;

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Livepeer Studio Video Player</h1>
      <h5 className={styles.h5}>Provide asset ID</h5>
      <input
        className='border rounded-md text-base mx-2'
        type='text'
        value={assetId}
        name='playbackSource'
        onChange={(e) => setAssetId(e.target.value)}
      />

      <p>Number of start views 👀</p>
      <p className={styles.ready}>{metrics?.metrics[0].startViews}</p>
      <br />

      <Player
        playbackId={playbackId}
        autoPlay={true}
        loop
        muted
      />
    </div>
  );
}
