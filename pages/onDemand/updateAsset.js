import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/studioLogo.png"
import styles from "../../styles/Form.module.css";


export default function UploadURL() {
  const [formState, setFormState] = useState({
    assetId: "",
    name: "",
    storage: "",
    meta: ""
  });


  async function updateAsset(e) {
    e.preventDefault()
    try {
      const response = await fetch('/api/update', {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assetId: formState.assetId,
          name: formState.name,
          storage: formState.storage ? JSON.parse(formState.storage) : undefined,
          meta: formState.meta ? JSON.parse(formState.meta) : undefined
        })
      })
      
      setFormState({
        assetId: "",
        name: "",
        storage: "",
        meta: ""
      })
      const data = await response.json()
      console.log(data);
    } catch (e) {
    }
  }


  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Updating Asset</h1>
      <form onSubmit={ updateAsset } method="PATCH" className={ styles.card }>
        
      <label htmlFor="asset">Asset ID</label>
        <input
          type="text"
          value={formState.assetId}
          name="assetId"
          required
          onChange={(e) => setFormState({ ...formState, assetId: e.target.value })}
        />

        <label htmlFor="asset">Asset Name</label>
        <input
          type="text"
          value={formState.name}
          name="name"
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />

        <label htmlFor="url">Storage </label>
        <textarea
          type="text"
          value={formState.storage}
          name="storage"
          onChange={(e) => setFormState({ ...formState, storage: e.target.value })}
        />

        <label htmlFor="url">Metadata </label>
        <textarea
          type="text"
          value={formState.meta}
          name="meta"
          onChange={(e) => setFormState({ ...formState, meta: e.target.value })}
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
