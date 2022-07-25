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
  let readyAsset = [];
  const ready = async () => {
    await data.map(asset => {
      if (asset.status.phase === "ready") {
        readyAsset.push(asset)
      }
      return;
    })
  }
  // ready()

  return {
    props: {
      assets: readyAsset,
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
            <h2> {asset.name} </h2>
                {/* <p>Status: { asset.status.phase }</p> */}
              </a>
            </Link>
            
          </div>
        ))}
      </ul>

    </ main>
      );
}
