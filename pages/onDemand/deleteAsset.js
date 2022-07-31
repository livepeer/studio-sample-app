import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Form.module.css";


export default function UploadURL() {
  const [assetId, setAssetId] = useState("");


  async function deleteAsset(e) {
    e.preventDefault()
    try {
      const response = await fetch('/api/delete', {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assetId
        })
      })
      
      setAssetId("")
      const data = await response.json()
      console.log(data);
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Delete Asset</h1>
      <form onSubmit={ deleteAsset } method="DELETE" className={ styles.card }>
        
      <label htmlFor="asset">Asset ID</label>
        <input
          type="text"
          value={assetId}
          name="assetId"
          required
          onChange={(e) => setAssetId( e.target.value )}
        />

        <button className={styles.deleteButton} type="submit">Delete Asset</button>
      </form>

      <h3>
        <Link href="/onDemand">
          <a>&larr; Back to On Demand Page </a>
        </Link>
      </h3>
    </div>
  );
}
