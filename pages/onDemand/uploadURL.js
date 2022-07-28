import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Form.module.css";


export default function UploadURL() {
  const [formState, setFormState] = useState({
    name: "",
    url: "",
  });


  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Uploading with URL</h1>
      <form action={'/api/uploadForm'} method="POST" className={styles.card}>
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
        <Link href="/">
          <a>&larr; Back to Home Page </a>
        </Link>
      </h3>
    </div>
  );
}
