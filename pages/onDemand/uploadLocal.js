import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Form.module.css";


export default function UploadLocal() {
  // Getting the asset name from the user
  const [assetName, setAssetName] = useState("");
  const [file, setFile] = useState();
  const [assetURL, setAssetURL] = useState("");


  async function getUploadURL(e) {
    e.preventDefault()
    try {
      const response = await fetch('/api/getUploadURL', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: assetName
        })
      })
      
      const data = await response.json()
      console.log(data);

      setAssetURL(data.url)
    } catch (e) {
      console.log(e)
    }
  }

  async function uploadAsset(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append('file', file)
    const response = await fetch(`${assetURL}`, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
        'Content-Type': 'video/mp4',
      },
      body: JSON.stringify({
        body: formData
      })
    })
    setFile("")
    setAssetURL("")
    }

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Uploading with Local Storage</h1>
      <form onSubmit={getUploadURL} method="POST" className={styles.card}>
        <label htmlFor="asset">Asset Name</label>
        <input
          type="text"
          value={assetName}
          name="name"
          required
          onChange={(e) => setAssetName(e.target.value)}
        />
        
        <button type="submit">Get Upload URL</button>
      </form>

      <form onSubmit={uploadAsset} method="POST"  className={styles.card}>
        
        <label htmlFor="url">Upload URL </label>
        <input
          type="url"
          value={assetURL}
          name="url"
          required
          pattern="^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?"
          onChange={(e) => setAssetURL(e.target.value )}
        />

        <input
          type="file"
          name="assetFile"
          required
          onChange={ (e) => setFile( e.target.file ) }
        />
        <button type="submit">Upload Asset</button>
      </form>

      <h3>
        <Link href="/">
          <a>&larr; Back to Home Page </a>
        </Link>
      </h3>
    </div>
  );
}
