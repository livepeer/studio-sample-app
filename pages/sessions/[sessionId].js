import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../../public/studioLogo.png';
import styles from '../../styles/Stream.module.css';

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://livepeer.studio/api/session/${params.sessionId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  return {
    props: {
      session: data,
    },
  };
}

export default function SessionDetails({ session }) {
  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      <div className={styles.card} key={id}>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '75px' }}>
          <Image src={logo} alt='Livepeer Studio Logo' width='256' height='256' layout='fixed' />
        </div>
        <div className={styles.cardbody}>
          <h2> Session Name: {session.name} </h2>
          <p>Session Id:</p>
          {session.id}
          <p>Parent Id:</p>
          {session.parentId}
          <p>Playback Id:</p>
          {session.playbackId}
          <p>Transcoded Segment Duration:</p>
          {session.transcodedSegmentsDuration}
          <p>Recording:</p>
          {session.record ? 'Session Recorded' : 'Session not recorded'}
        </div>
      </div>
    </div>
  );
}
