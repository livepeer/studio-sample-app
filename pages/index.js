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
              <h2>Livepeer Video Player &rarr;</h2>
              <p>Learn all about the Livepeer Video Player</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}