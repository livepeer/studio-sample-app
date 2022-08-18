import { useState } from "react";
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

  async function fetchAsset(e) {
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
        <label htmlFor="asset" className="text-base">Asset ID: </label>
        <input
          className="border rounded-md text-base mx-2"
          type="search"
          name="query"
          value={assetId}
          required
          onChange={(e) => setAssetId(e.target.value)}
        />
        <button type="submit" className="m-0  rounded-md p-1 bg-blue-600 hover:bg-blue-400 text-base text-white">Get Asset</button>
      </form>

      {/* Displays the asset card if it exists */}
      {!getAsset ? null : (
        <div className={styles.card} key={getAsset.id}>
          <Link href={`/videoAssets/${getAsset.id}`}>
            <a>
              <Image src={logo} alt="Livepeer Studio Logo" width="50" height="50" />
              <h2> {getAsset.name} </h2>
            </a>
          </Link>
        </div>
      )}
    </main>
  );
}
