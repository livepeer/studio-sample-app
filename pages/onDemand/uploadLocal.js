import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import * as tus from "tus-js-client";
import styles from "../../styles/UploadForm.module.css";

// Function that creates an asset with uploading a file
export default function UploadLocal() {
  // Set the state name and file provided by the user
  const [assetName, setAssetName] = useState("");
  const [file, setFile] = useState("");
  // Set the state of the ulpoad URL create
  const [assetURL, setAssetURL] = useState("");
  const [assetTUS, setAssetTUS] = useState("");
  // Set state of the uploading progress
  const [directProgress, setDirectProgress] = useState(0);
  const [resumeProgress, setResumeProgress] = useState(0);
  const [uploadMethod, setUploadMethod] = useState();


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
    try {
      // Using tus-js-client for resumable uploading
      const upload = new tus.Upload(file, {
        endpoint: assetTUS, // Using 'tusEndpoint' from generated url
        metadata: {
          filename: file.name,
          filetype: "video/mp4",
        },
        uploadSize: file.size,
        onError(err) {
          console.error("Error uploading file:", err);
        },
        onProgress(bytesUploaded, bytesTotal) {
          const percentage = ((bytesUploaded / bytesTotal) * 100).toFixed(2);
          console.log("Uploaded " + percentage + "%");
          setResumeProgress(percentage);
        },
        onSuccess() {
          console.log("Upload finished:", upload.url);
        },
      });
      const previousUploads = await upload.findPreviousUploads();
      if (previousUploads.length > 0) {
        upload.resumeFromPreviousUpload(previousUploads[0]);
      }
      upload.start();
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
          className="border rounded-md text-base mx-2"
          type="text"
          value={assetName}
          name="name"
          required
          onChange={(e) => setAssetName(e.target.value)}
        />
        <br/>
        <button onClick={getUploadURL}>Get Upload URL</button>
      </form>
      {assetURL || assetTUS ? (
        <form
          onSubmit={uploadMethod === assetURL ? uploadDirectAsset : uploadResumableAsset}
          method="PUT"
          className={styles.card}
        >
          <h5 className={styles.h5}>Select Upload Method</h5>
          <select
            className="border rounded-md text-base mx-2"
            onChange={(e) => setUploadMethod(e.target.value)}
          >
            <option disabled selected value>
              Select an option
            </option>
            <option value={assetURL}>Direct Upload</option>
            <option value={assetTUS}>Resumable Upload</option>
          </select>
          <br />
          <input
            type="file"
            name="assetFile"
            accept="video/mp4"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />

          <br />

          <label htmlFor="progress">
            {uploadMethod === assetURL ? directProgress : resumeProgress}%
          </label>
          <div className={styles.progressContainer}>
            <progress max="100" value={uploadMethod === assetURL ? directProgress : resumeProgress}>
              {uploadMethod}
            </progress>
          </div>
          <button type="submit">Upload Asset</button>
        </form>
      ) : null}
      {/* Separate forms for each upload method */}

      {/* <h5 className={styles.h5}>Select Upload Method</h5>
      <div className={styles.grid}>
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


          
           <label htmlFor="progress">{directProgress}%</label>
          <div className={styles.progressContainer}>
            <progress max="100" value={directProgress}>
              {directProgress}
            </progress>
          </div>

          <button type="submit">Upload Asset</button>
        </form>

        
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

          <label htmlFor="progress">{resumeProgress}%</label>
          <div className={styles.progressContainer}>
            <progress max="100" value={resumeProgress}>
              {resumeProgress}
            </progress>
          </div>

          <button type="submit">Upload Asset</button>
        </form>
      </div> */}

    </div>
  );
}
