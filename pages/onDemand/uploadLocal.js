import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/UploadForm.module.css";

export default function UploadLocal() {
  const [assetName, setAssetName] = useState("");
  const [file, setFile] = useState();
  const [assetURL, setAssetURL] = useState("");
  const [assetTUS, setAssetTUS] = useState("");

  async function getUploadURL(e) {
    e.preventDefault();
    try {
      const response = await fetch("/api/getUploadURL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: assetName,
        }),
      });

      const data = await response.json();
      console.log(data);

      setAssetURL(data.url);
      setAssetTUS(data.tusEndpoint);
    } catch (e) {
      console.log(e);
    }
  }

  async function uploadAsset(e) {
    e.preventDefault();
    console.log(e);
    try {
      await fetch(`${assetURL}`, {
        method: "PUT",
        headers: {
          "Content-Type": "video/mp4",
        },
        body: file,
      });

      setAssetName("");
      setFile("");
      setAssetURL("");
      setAssetTUS("");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Uploading with Local Storage</h1>
        <form method="POST" className={styles.card}>
          <label htmlFor="asset">Asset Name</label>
          <br />
          <input
            type="text"
            value={assetName}
            name="name"
            required
            onChange={(e) => setAssetName(e.target.value)}
          />
          <br />
          <button onClick={getUploadURL}>Get Upload URL</button>
      </form>

      <h5 className={ styles.h5 }>Select Upload Method</h5>
      
      <div className={ styles.grid }>
        <form onSubmit={uploadAsset} method="PUT" className={styles.card}>
          <label htmlFor="url">Direct Upload </label>
          <br />
          <input
            type="url"
            value={assetURL}
            name="url"
            required
            pattern="^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?"
            onChange={(e) => setAssetURL(e.target.value)}
          />

          <input
            type="file"
            name="assetFile"
            accept="video/mp4"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button type="submit">Upload Asset</button>
        </form>

        <form onSubmit={uploadAsset} method="PUT" className={styles.card}>
          <label htmlFor="url">Resumable Upload </label>
          <br />
          <input
            type="url"
            value={assetTUS}
            name="url"
            required
            pattern="^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?"
            onChange={(e) => setAssetTUS(e.target.value)}
          />

          <input
            type="file"
            name="assetFile"
            accept="video/mp4"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button type="submit">Upload Asset</button>
        </form>
      </div>

      <h3>
        <Link href="/onDemand">
          <a>&larr; Back to On Demand Page </a>
        </Link>
      </h3>
    </div>
  );
}
