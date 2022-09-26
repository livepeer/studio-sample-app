import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCreateStream} from '@livepeer/react';
import styles from '../../styles/CreateAssetForm.module.css';
import logo from '../../public/studioLogo.png';

export default function CreateStream() {
  const [ streamName, setStreamName ] = useState<string>( '' );

  const { mutate: createStream, data: stream, status, isSuccess } = useCreateStream();

  return (
    <div className={styles.main}>
      <div className={styles.card}>
        <label htmlFor='asset' className='text-base'>
          Stream Name:{' '}
        </label>
        <input
          type='text'
          className='border rounded-md text-base mx-2'
          onChange={(e) => setStreamName(e.target.value)}
        />

        <br />

        <button
          disabled={status === 'loading' || status === 'success'}
          onClick={() =>
            createStream({
              name: streamName,
            })
          }
        >
          Create Stream
        </button>
      </div>
      {isSuccess ? (
        <div className={styles.card} key={stream?.id}>
          <Link href={`/streams/${stream?.id}`}>
            <a>
              <Image src={logo} alt='Livepeer Studio Logo' width='50' height='50' />
              <h2> {stream?.name}</h2>
            </a>
          </Link>
        </div>
      ) : null}
    </div>
  );
}
