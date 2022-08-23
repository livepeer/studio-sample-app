import {useState} from 'react'
import { useAsset } from "@livepeer/react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/CreateAssetForm.module.css";
import logo from "../../public/studioLogo.png";

export default function GetAsset() {
// Setting state of the asset ID
  const [ assetId, setAssetId ] = useState( "" );
  // Passing it the asset ID using the 'useAsset' hook to retrieve the asset
  // specifying with the 'getAsset' parameter
   const { data: getAsset, error } = useAsset({assetId} );
  

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Get Created Asset By Id</h1>
      <form method="GET" className={styles.card}>
        <label htmlFor="asset" className="text-base">
          Asset ID:{" "}
        </label>
        <input
          className="border rounded-md text-base mx-2"
          type="search"
          name="query"
          value={assetId}
          required
          onChange={(e) => setAssetId(e.target.value)}
        />
      </form>
      {/* Displays the asset card if it exists otherwise displays error */}
      {!getAsset?.id ? null : (
        <div className={styles.card} key={getAsset?.id}>
          <Link href={`/videoAssets/${getAsset?.id}`}>
            <a>
              <Image src={logo} alt="Livepeer Studio Logo" width="50" height="50" />
              <h2> {getAsset?.name} </h2>
            </a>
          </Link>
        </div>
      )}
      {error && <div className={styles.card}>Cannot Find Asset: {error.message}</div>}
    </div>
  );
}
