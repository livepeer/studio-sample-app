import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Form.module.css";

// Function that creates an asset with a downloadable URL
export default function UploadURL() {
  // Set the state name and URL provided by the user
  const [formState, setFormState] = useState({
    name: "",
    url: ""
  });


  async function uploadAsset(e) {
    e.preventDefault()
    // Calling the api from backend with the path created in api directory
    try {
      const response = await fetch('/api/uploadForm', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          url: formState.url
        })
      })
      
      setFormState({
        name: "",
        url: ""
      })
      // Convert json response into JS object
      const data = await response.json()
      // console.log(data);
    } catch (e) {
      console.log(e)
    }
  }


  return (
    <div className={ styles.main }>
      {/* Uploading asset form */}
      <h1 className={styles.title}>Uploading with URL</h1>
      <form onSubmit={uploadAsset} method="POST" className={styles.card}>
        <label htmlFor="asset">Asset Name</label>
        <input
          type="text"
          value={formState.name}
          name="name"
          required
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />
        <label htmlFor="url">Asset URL </label>
        <input
          type="url"
          value={formState.url}
          name="url"
          required
          pattern="^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?"
          onChange={(e) => setFormState({ ...formState, url: e.target.value })}
        />
        <button type="submit">Upload Asset</button>
      </form>

      <h3>
        <Link href="/onDemand">
          <a>&larr; Back to On Demand Page </a>
        </Link>
      </h3>
    </div>
  );
}
