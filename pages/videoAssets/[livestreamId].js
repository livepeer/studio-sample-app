import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../../public/studioLogo.png';
import { VideoPlayer } from '@livepeer/react';
import styles from '../../styles/Asset.module.css';


export async function getServerSideProps( { params } ) {
  const res = await fetch(`https://livepeer.studio/api/stream/${params.id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      'Content-Type': 'application/json',
    },
  });
  
  const data = await res.json();

  return {
    props: {
      stream: data
    }
  }
}

export default function StreamDetails( { stream } ) {
  
  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      <div className={styles.card} key={id}></div>
      {stream.isActive ? (
        <div>
          <VideoPlayer
            playbackId={`${stream.playbackId}`}
            className={styles.videoplayer}
            autoPlay={true}
            loop
            muted
          />
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Image src={ logo } alt='Livepeer Studio Logo' width='256' height='256' layout='fixed' />
            <p>Stream is not live.</p>
        </div>
      )}
      <div className={styles.cardbody}>
        <h2> Name: {stream.name} </h2>
        <p>Stream name:</p>
        {stream.name}
        <p>Stream Id:</p>
        {stream.id}
        <p>Stream Key:</p>
        {stream.streamKey}
        <p>Playback Id:</p>
        {stream.playbackId}
        <p>PlaybackURL:</p>
        {`https://livepeercdn.com/hls/${stream.playbackId}/index.m3u8`}
        <p>Recording session?:</p>
        {stream.record}
      </div>
    </div>
  );
}