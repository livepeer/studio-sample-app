import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Livepeer Sample App</title>
        <meta name='description' content='Livepeer Studio Sample App' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <Link href='https://livepeer.studio'>Welcome to Livepeer Studio! 🎥 </Link>
        </h1>

        <div className={styles.grid}>
          <Link href='livestream'>
            <a className={styles.card}>
              <h2>LiveStream &rarr;</h2>
              <p>Learn all about Livepeer Studio&apos;s Livestream</p>
            </a>
          </Link>

          <Link href='livestreamSDK'>
            <a className={styles.card}>
              <h2>LiveStreamSDK &rarr;</h2>
              <p>Learn all about Livestreams with the SDK</p>
            </a>
          </Link>

          <Link href='onDemand/'>
            <a className={styles.card}>
              <h2>On Demand &rarr;</h2>
              <p>Learn all about uploading, updating and deleting assets</p>
            </a>
          </Link>

          <Link href='onDemandSDK/'>
            <a className={styles.card}>
              <h2>On Demand SDK &rarr;</h2>
              <p>Learn all about On Demand with the SDK</p>
            </a>
          </Link>
          <Link href='videoPlayer'>
            <a className={styles.card}>
              <h2> Video Players &rarr;</h2>
              <p>Learn about video players</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}