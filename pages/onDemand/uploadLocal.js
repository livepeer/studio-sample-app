import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import styles from "../../styles/UploadForm.module.css";

// Function that creates an asset with uploading a file
export default function UploadLocal() {
  // Set the state name and file provided by the user
  const [assetName, setAssetName] = useState("");
  const [file, setFile] = useState("");
  // Set the state of the ulpoad URL created
  const [assetURL, setAssetURL] = useState("");
  const [assetTUS, setAssetTUS] = useState("");
  // Set state of the uploading progress
  const [directProgress, setDirectProgress] = useState(0);
  const [resumeProgress, setResumeProgress] = useState(0);

  async function getUploadURL(e) {
    e.preventDefault();
    try {
      // Calling the api from backend with the path created in api directory
      const response = await fetch("/api/getUploadURL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: assetName,
        }),
      });

      // Convert json response into JS object
      const data = await response.json();
      // console.log(data);

      setAssetURL(data.url);
      setAssetTUS(data.tusEndpoint);
    } catch (e) {
      console.log(e);
    }
  }

  // Function for uploading with direct url
  async function uploadDirectAsset(e) {
    e.preventDefault();
    const config = {
      // Axios' onUploadProgress function to keep track of the file upload progress
      onUploadProgress(progressEvent) {
        console.log(progressEvent);
        const percentage = Math.round(100 * (progressEvent.loaded / progressEvent.total));
        setDirectProgress(percentage);
      },
    };
    try {
      // Using axios to access their 'onUploadProgress' function
      await axios.put(`${assetURL}`, file, config, {
        headers: {
          "Content-Type": "video/mp4",
        },
        body: file,
      });

      setAssetName("");
      setFile("");
      setAssetURL("");
    } catch (error) {
      console.error(error);
    }
  }

  // Function with resumeable uploading
  async function uploadResumableAsset(e) {
    e.preventDefault();
    const config = {
      // Axios' onUploadProgress function to keep track of the file upload progress
      onUploadProgress(progressEvent) {
        console.log(progressEvent);
        const percentage = Math.round(100 * (progressEvent.loaded / progressEvent.total));
        setResumeProgress(percentage);
      },
    };
    try {
      // Using axios to access their 'onUploadProgress' function
      await axios.put(`${assetURL}`, file, config, {
        headers: {
          "Content-Type": "video/mp4",
        },
        body: file,
      });

      setAssetName("");
      setFile("");
      setAssetURL("");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Uploading with Local Storage</h1>
      <form method="POST" className={styles.card}>
        {/* Form to get upload URL */}
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
      {/* Form with provided URL to upload file */}
      <h5 className={styles.h5}>Select Upload Method</h5>

      <div className={styles.grid}>
        {/* Direct upload form */}
        <form onSubmit={uploadDirectAsset} method="PUT" className={styles.card}>
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
        {/* Reseumable upload form */}
        <form onSubmit={uploadResumableAsset} method="PUT" className={styles.card}>
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
          {/* Progress bar of uploading asset */}
          <label htmlFor="progress">{resumeProgress}%</label>
          <div className={styles.progressContainer}>
            <progress max="100" value={resumeProgress}>
              {resumeProgress}
            </progress>
          </div>

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
