import Image from "next/image";
import { useRouter } from "next/router";
import logo from "../../public/studioLogo.png";
import styles from "../../styles/Asset.module.css";


// Calling the api from server side using 'getServerSideProps' and passing in existing 
// routes from 'getStaticPaths' for dynamic routing
export async function getServerSideProps({ params }) {
  const res = await fetch(`https://livepeer.studio/api/asset/${params.id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  // Convert json response into JS object
  const data = await res.json();
  // Assign api response as props to be available to passed
  return {
    props: {
      assets: data,
    },
  };
}

// Function to display each asset with their own information 
export default function AssetDetails({ assets }) {
  // Accessing the 'query' from the router object to passing in the id of each asset for dynamic routing
  const {
    query: { id },
  } = useRouter();

  return (
    <div>
      <div className={styles.card} key={id}>
        {assets.status.phase === "ready" ? (
          <div>
            {/* Display embedded Video Player if it exists, otherwise show an image */}
            <iframe
              className={styles.iframe}
              src={`https://lvpr.tv?v=${assets.playbackId}`}
              frameForder="0"
              height="300px"
              allowFullScreen
              allow="autoplay; encrypted-media; picture-in-picture"
              sandbox="allow-scripts"
            ></iframe>

            {/* Code for embedding the video */}
            <div className={styles.embedInfo}>
              <code>
                <p>Embed Player Code</p>
                <br />
                {`<iframe>`}
                <br />
                src={`https://lvpr.tv?v=${assets.playbackId}`}&apos;
                <br />
                allow=&apos;autoplay; encrypted-media; picture-in-picture&apos;
                <br />
                sandbox=&apos;allow-scripts&apos;
                <br />
                {`</iframe>`}
              </code>
            </div>
          </div>
        ) : (
          <Image src={logo} alt="Livepeer Studio Logo" width="256" height="256" />
        )}

        {/* Display information about the asset */}
        <div className={styles.cardbody}>
          <h2> Name: {assets.name} </h2>
          <p>Status:</p>
          {assets.status.phase === "ready" ? (
            <p className={styles.ready}>{assets.status.phase} </p>
          ) : (
            <p className={styles.failed}>{assets.status.phase}</p>
          )}
          <p>Id:</p>
          {assets.id}

          {assets.status.phase === "ready" ? null : (
            <div>
              {" "}
              <p>Error:</p> {assets.status.errorMessage}{" "}
            </div>
          )}
          {assets.status.phase === "ready" ? (
            <div>
              <p> Playback Id:</p>
              {assets.playbackId}
            </div>
          ) : null}
          {assets.status.phase === "ready" ? (
            <div>
              <p>Playback URL</p> {assets.playbackUrl}
            </div>
          ) : null}
          {assets.status.phase === "ready" ? (
            <div>
              <p>DownloadUrl</p>
              <a className={styles.url} href={assets.downloadUrl} target="_blank" rel="noreferrer">
                {assets.downloadUrl}
              </a>{" "}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
