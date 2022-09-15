import { useState } from 'react';
import { useStreamSessions } from '@livepeer/react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Assets.module.css';
import logo from '../../public/studioLogo.png';

export default function GetSession() {
  const [streamId, setStreamId] = useState<string>();
  const { data: streamSessions } = useStreamSessions({ streamId });

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Get Stream Sessions</h1>
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
        <div className={styles.card} key={streamId}>
          <Link href={`/sessions}`}>
            {streamSessions ? (
              <a>
                <Image src={logo} alt='Livepeer Studio Logo' width='50' height='50' />
                <p>Session Name:</p>
                <p> {streamSessions} </p>
              </a>
            ) : (
              <p>Session Does not exist</p>
            )}
          </Link>
        </div>
      )}
    </div>
  );
}
