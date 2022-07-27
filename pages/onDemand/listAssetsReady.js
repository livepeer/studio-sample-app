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
  if (res.status !== 200) {
    throw new Error('error');
  }
  let readyAssets = []
  for (const asset of data) {
    if (asset.status.phase === "ready") {
      readyAssets.push(asset)
    }
  }
  
  return {
    props: {
      assets: readyAssets,
    },
  };
}



export default function ListAssets({ assets }) {

  console.log(assets);

  return (
    <main className = { styles.main } >
      <h1 className={ styles.title }>All Ready Assets</h1>


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
            <h3 className={ styles.title2 }> {asset.name} </h3>
              </a>
            </Link>
            
          </div>
        ))}
      </ul>

    </ main>
      );
}
