import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/studioLogo.png';
import styles from "../../styles/Assets.module.css";

export async function getServerSideProps() {
  const res = await fetch(`https://livepeer.studio/api/asset`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  
  const data = await res.json();


  return {
    props: {
      assets: data,
    },
  };
}



export default function ListAssets({assets}) {
  // console.log(assets);

  return (
    <main className = { styles.main } >
      <h1 className={ styles.title }>All Assets</h1>

      <ul className={styles.grid}>
        {assets.map((asset) => (
          <div className={ styles.card } key={ asset.id }>
            <Link href={ `/videoAssets/${asset.id}` }>
              <a>
              <Image 
            src= {logo}
            alt="Livepeer Studio Logo"
            width="256"
            height="256"
          />
                <h2 className={styles.title2}> { asset.name } </h2>
                <p>Status:</p>
                {asset.status.phase === 'ready' ? <p className={styles.ready}>{ asset.status.phase } </p> : <p className={styles.failed}>{ asset.status.phase }</p>}
              </a>
            </Link>
            
          </div>
        ))}
      </ul>

      <h3>
        <Link href="/onDemand">
          <a>&larr; Back to OnDemand Page </a>
        </Link>
      </h3>

    </ main>
      );
}