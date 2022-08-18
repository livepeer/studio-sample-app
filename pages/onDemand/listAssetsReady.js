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
  if (res.status !== 200) {
    throw new Error("error");
  }
  // Filtering out assets that only have the 'ready' status
  let readyAssets = [];
  for (const asset of data) {
    if (asset.status.phase === "ready") {
      readyAssets.push(asset);
    }
  }

  // Assign api response as props to be available to passed
  return {
    props: {
      assets: readyAssets,
    },
  };
}

// Function that gets the result of the api call and lists each 'ready' asset in a card
export default function ListAssets({ assets }) {
  console.log(assets);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>All Ready Assets</h1>

      <ul className={styles.grid}>
        {assets.map((asset) => (
          <div className={styles.card} key={asset.id}>
            <Link href={`/videoAssets/${asset.id}`}>
              <a>
                <Image src={logo} alt="Livepeer Studio Logo" width="50" height="50" />
                <h2 className={styles.title2}> {asset.name} </h2>
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
