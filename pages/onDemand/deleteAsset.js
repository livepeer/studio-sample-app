import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Form.module.css";

// Function to delete the specific asset from the provided Id
export default function Delete() {
  // Setting state for the asset Id from the user
  const [assetId, setAssetId] = useState("");

  async function deleteAsset(e) {
    e.preventDefault();
    // Calling the api from the backend with the path created in teh api directory
    try {
       await fetch("/api/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          assetId,
        }),
      });

      setAssetId("");
      // console.log(data);
    } catch (error) {
      // console.error(error);
    }
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Delete Asset</h1>
      <form onSubmit={deleteAsset} method="DELETE" className={styles.card}>
        <label htmlFor="asset">Asset ID</label>
        <input
          className="border rounded-md text-base mx-2 "
          type="text"
          value={assetId}
          name="assetId"
          required
          onChange={(e) => setAssetId(e.target.value)}
        />

        <button className={styles.deleteButton} type="submit">
          Delete Asset
        </button>
      </form>

    </div>
  );
}
