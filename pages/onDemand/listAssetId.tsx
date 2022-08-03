import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/studioLogo.png";
import styles from "../../styles/Assets.module.css";

export default function ListAssetByID() {
  const [assetId, setAssetId] = useState("");
  const [getAsset, setGetAsset] = useState("");

  async function fetchAsset(e: FormEvent) {
    e.preventDefault();
    console.log(assetId);
    const res = await fetch(`/api/asset/${assetId}`);

    const data = await res.json();
    console.log(data);

    setGetAsset(data);
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

      {!getAsset ? null: (
        <div className={styles.card} key={getAsset.id}>
          <Link href={`/videoAssets/${getAsset.id}`}>
            <a>
              <Image src={logo} alt="Livepeer Studio Logo" width="256" height="256" />
              <h2> {getAsset.name} </h2>
            </a>
          </Link>
        </div>
      )}

      <h3>
        <Link href="/onDemand">
          <a>&larr; Back to OnDemand Page </a>
        </Link>
      </h3>
    </main>
  );
}
