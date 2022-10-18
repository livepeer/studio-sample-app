import { useState } from 'react';
import { useStreamSession } from '@livepeer/react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Assets.module.css';
import logo from '../../public/studioLogo.png';

export default function GetSession() {
  const [streamSessionId, setStreamSessionId] = useState<string>();
  const { data: streamSession } = useStreamSession({ streamSessionId });

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Get Session By Id</h1>
      <form method='GET' className={styles.card}>
        <label htmlFor='asset' className='text-base'>
          Session ID:{' '}
        </label>
        <input
          className='border rounded-md text-base mx-2'
          type='search'
          name='query'
          value={streamSessionId}
          required
          onChange={(e) => setStreamSessionId(e.target.value)}
        />
      </form>

      {!streamSessionId ? null : (
        <div className={styles.card} key={streamSession?.id}>
          <Link href={`/sessions/${streamSession?.id}`}>
            {streamSession ? (
              <a>
                <Image src={logo} alt='Livepeer Studio Logo' width='50' height='50' />
                <p>Session Name:</p>
                <p> {streamSession?.name} </p>
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
