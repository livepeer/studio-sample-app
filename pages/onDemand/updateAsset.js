import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Form.module.css";

// Function that updates an existing asset based on the update form
export default function Update() {
  // Setting state from the update form
  const [formState, setFormState] = useState({
    assetId: "",
    name: "",
    storage: "",
    meta: ""
  });


  async function updateAsset(e) {
    e.preventDefault()
    try {
      // Calling the api from backend with the path created in api directory
      const response = await fetch("/api/update", {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          assetId: formState.assetId,
          name: formState.name,
          storage: formState.storage ? JSON.parse(formState.storage) : undefined,
          meta: formState.meta ? JSON.parse(formState.meta) : undefined,
        }),
      });
      
      setFormState({
        assetId: "",
        name: "",
        storage: "",
        meta: ""
      })
      // Convert json response into JS object
      const data = await response.json()
      // console.log(data);
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <div className={styles.main}>
      {/* Form for updating an existing asset */}
      <h1 className={styles.title}>Updating Asset</h1>
      <form onSubmit={updateAsset} method="PATCH" className={styles.card}>
        <label htmlFor="asset">Asset ID</label>
        <br />
        <input
          className="border rounded-md text-base mx-2"
          type="text"
          value={formState.assetId}
          name="assetId"
          required
          onChange={(e) => setFormState({ ...formState, assetId: e.target.value })}
        />
        <br />
        <label htmlFor="asset">Update Name</label>
        <br />
        <input
          className="border rounded-md text-base mx-2"
          type="text"
          value={formState.name}
          name="name"
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />
        <br />
        <label htmlFor="url">Storage </label>
        <br />
        <textarea
          className="border rounded-md text-base mx-2"
          type="text"
          value={formState.storage}
          name="storage"
          onChange={(e) => setFormState({ ...formState, storage: e.target.value })}
        />
        <br />
        <label htmlFor="url">Metadata </label>
        <br />
        <textarea
          className="border rounded-md text-base mx-2"
          type="text"
          value={formState.meta}
          name="meta"
          onChange={(e) => setFormState({ ...formState, meta: e.target.value })}
        />
        <br />
        <button type="submit">Upload Asset</button>
      </form>
    </div>
  );
}
