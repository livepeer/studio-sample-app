import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/studioLogo.png";
import styles from "../../styles/Assets.module.css";

// Function that gets the result for a specific asset from its ID using the api call
// and lists the individual asset in a card
export default function ListAssetByID() {
  // Setting state for the asset Id from the user
  const [assetId, setAssetId] = useState("");
  // Setting state for the asset
  const [getAsset, setGetAsset] = useState("");

  async function fetchAsset(e: FormEvent) {
    e.preventDefault();
    // Calling the api from backend with the path created in api directory
    const res = await fetch(`/api/asset/${assetId}`);

    // Convert json response into JS object
    const data = await res.json();
    // console.log(data);

    // Set the asset from the response of the api call
    setGetAsset(data);
  }

  return (
    <main className={styles.main}>
      {/* Form for getting the asset by Id */}
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

      {/* Displays the asset card if it exists */}
      {!getAsset ? null : (
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
