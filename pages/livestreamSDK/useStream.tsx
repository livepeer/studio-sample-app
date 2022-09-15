import { useState } from 'react';
import { useStream, VideoPlayer } from '@livepeer/react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Assets.module.css';
import logo from '../../public/studioLogo.png';


export default function GetStream() {
  const [ streamId, setStreamId ] = useState<string>();
  const { data: stream } = useStream( {streamId} )

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Get Created Stream By Id</h1>
      <form method='GET' className={styles.card}>
        <label htmlFor='asset' className='text-base'>
          Stream ID:{' '}
        </label>
        <input
          className='border rounded-md text-base mx-2'
          type='search'
          name='query'
          value={streamId}
          required
          onChange={(e) => setStreamId(e.target.value)}
        />
      </form>

      {!streamId ? null : (
        <div className={styles.card} key={stream?.id}>
          <Link href={`/streams/${stream?.id}`}>
            {stream?.isActive ? (
              <a>
                <VideoPlayer
                  playbackId={`${stream?.playbackId}`}
                  autoPlay={false}
                  width={200}
                  loop
                  muted
                />
                <br />
                <p>Stream Status:</p>
                <p className={styles.ready}>Live Now!</p>
                <p> {stream?.name} </p>
              </a>
            ) : (
              <a>
                <Image src={logo} alt='Livepeer Studio Logo' width='50' height='50' />
                <h2> {stream?.name} </h2>
                <p>Stream Status:</p>
                <p className={styles.failed}>Not Live</p>
              </a>
            )}
          </Link>
        </div>
      )}
    </div>
  );
}
