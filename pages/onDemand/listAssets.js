import React from "react";
import styles from "../../styles/Home.module.css";

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

export default function ListAssets({ assets }) {
  console.log(assets);
  return (
    <main className = { styles.main } >
      <h1 className={styles.title}>Available Assets</h1>

      <ul className={styles.grid}>
        {assets.map((asset) => (
          <div className={styles.card} key={asset.id}>
            <h2> {asset.name} </h2>
            <p>Status: {asset.status.phase}</p>
            <p>PlaybackID: {asset.playbackId}</p>
            <p>PlaybackURL:{asset.playbackUrl}</p>
          </div>
        ))}
      </ul>
    </ main>
      );
}
