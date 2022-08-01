import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/studioLogo.png";
import styles from "../../styles/Assets.module.css";


export default function ListAssetByID() {
  // Gets asset from user input
  const [assetId, setAssetId] = useState('');
  const [getAsset, setGetAsset] = useState('');

  async function fetchAsset(e) {
    e.preventDefault();

    const res = await fetch(`/api/getAsset`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            "Content-Type": "application/json",
          },
        });

    const data = await res.json();
    console.log(data);

    setGetAsset(data)
    }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Get Assets By Id</h1>
      <form onSubmit={fetchAsset} method="GET" className={styles.card}>
        <label htmlFor="asset">Asset ID: </label>
        <input
          type="search"
          name="query"
          value={assetId}
          required
          onChange={(e) => setAssetId(e.target.value)}
        />
        <button type="submit">Get Asset</button>
      </form>



<div className={styles.card} key={getAsset.id}>
        <a>
          <Image src={logo} alt="Livepeer Studio Logo" width="256" height="256" />
          <h2> {getAsset.name} </h2>
          <p>Status:</p>
          {/* {getAsset.status.phase === "ready" ? (
            <p className={styles.ready}>{getAsset.status.phase} </p>
          ) : (
            <p className={styles.failed}>{getAsset.status.phase}</p>
          )} */}
          <p>Id:</p>
          { getAsset.id }
          
          {/* {getAsset.status.phase === "ready" ? (
            null
          ) : <div> <p>Error:</p> {getAsset.status.errorMessage} </div> } */}
          {/* {assets.status.phase === "ready" ? (
            <div>
             <p> Playback Id:</p>{getAsset.playbackId}
            </div>
          ) : null} */}
          {/* {getAsset.status.phase === "ready" ? (
            <div>
              <p>Playback URL</p> {getAsset.playbackUrl} 
            </div>
          ) : null} */}
          {/* {getAsset.status.phase === "ready" ? (
            <div>
              <p>DownloadUrl</p>
              <a className={styles.url} href={getAsset.downloadUrl} target="_blank" rel="noreferrer">
                {getAsset.downloadUrl}
              </a>{" "}
            </div>
          ) : null} */}
        </a>
      </div>

      <h3>
        <Link href="/onDemand">
          <a>&larr; Back to OnDemand Page </a>
        </Link>
      </h3>
    </main>
  );
}
