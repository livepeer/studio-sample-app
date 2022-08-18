import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/studioLogo.png";
import styles from "../../styles/Assets.module.css";

// Calling the api from server side using 'getServerSideProps' to get all assets on an account
export async function getServerSideProps() {
  const res = await fetch(`https://livepeer.studio/api/asset`, {
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


// Function that gets the result of the api call and lists each asset in a card
export default function ListAssets({ assets }) {

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>All Assets</h1>

      <ul className={styles.grid}>
        {assets.map((asset) => (
          <div className={styles.card} key={asset.id}>
            <Link href={`/videoAssets/${asset.id}`}>
              <a>
                <Image src={logo} alt="Livepeer Studio Logo" width="100" height="100" />
                <h2 className={styles.title2}> {asset.name} </h2>
                <p>Status:</p>
                {asset.status.phase === "ready" ? (
                  <p className={styles.ready}>{asset.status.phase} </p>
                ) : (
                  <p className={styles.failed}>{asset.status.phase}</p>
                )}
              </a>
            </Link>
          </div>
        ))}
      </ul>

      <h3>
        <Link href="/onDemand">
          <a>&larr; Back to OnDemand Page </a>
        </Link>
      </h3>
    </main>
  );
}
