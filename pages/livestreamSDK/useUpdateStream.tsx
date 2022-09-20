import { useState } from 'react';
import { useUpdateStream, useStream} from '@livepeer/react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/CreateAssetForm.module.css';
import logo from '../../public/studioLogo.png';


export default function UpdateStream() {
  const [ streamId, setStreamId ] = useState<string>( '' );
  const {data: stream} = useStream({streamId, refetchInterval: 1000})
  const { mutate: updateStream, variables } = useUpdateStream();



  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Update Stream By Id</h1>
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

      <div className={styles.card}>
        <button
          className={styles.button}
          onClick={() =>
            updateStream({
              streamId,
              record: !stream?.record,
            })
          }
        >
          Record On/Off
        </button>

        <button
          className={styles.button}
          onClick={() =>
            updateStream({
              streamId,
              suspend: !variables?.suspend,
            })
          }
        >
          Suspend/Unsuspend Stream
        </button>
      </div>

      {!streamId ? null : (
        <div className={styles.card} key={stream?.id}>
          <Link href={`/sessions/${streamId}`}>
            {stream ? (
              <a>
                <Image src={logo} alt='Livepeer Studio Logo' width='50' height='50' />
                <p>Stream Name:</p>
                <p> {stream?.name} </p>
                <p>Record Status:</p>
                {stream.record ? (
                  <p className={styles.ready}>On</p>
                ) : (
                  <p className={styles.failed}>Off</p>
                )}

                <p>Suspend Status:</p>
                { variables?.suspend? (
                  <p className={styles.ready}>On</p>
                ) : (
                  <p className={styles.failed}>Off</p>
                )}
              </a>
            ) : (
              <p>Stream Does not exist</p>
            ) }
          </Link>
        </div>
      )}
    </div>
  );
}
