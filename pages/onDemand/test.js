import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/studioLogo.png";
import styles from "../../styles/Assets.module.css";

export async function getServerSideProps({query}) {
  
  const res = await fetch(`https://livepeer.studio/api/asset/?q=${query.assetId}`, {
    method: "GET",
          headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            "Content-Type": "application/json",
          },
  })
  const data = await res.json()

  return { props: { data } }
}


export default function ListAssetByID(props) {
  const [assetId, setAssetId] = useState('');
  const [getAsset, setGetAsset] = useState('');
  console.log(props);
  // async function fetchAsset(e) {
  //   e.preventDefault();
  //   console.log(assetId);
  //   const res = await fetch(`https://livepeer.studio/api/asset/${assetId}`, {
  //         method: "GET",
  //         headers: {
  //           Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  //           "Content-Type": "application/json",
  //         },
  //       });

  //   const data = await res.json();
  //   console.log(data);

  //   setGetAsset(data)  
  //   }




  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Get Assets By Id</h1>
      <form  method="GET" className={styles.card}>
        <label htmlFor="asset">Asset ID: </label>
        <input
          type="search"
          name="query"
          value={assetId}
          required
          onChange={(e) => setAssetId(e.target.value)}
        />
        <button type="submit">Get Asset</button>
      </form>


      
      { { getAsset } ?
        <div className={ styles.card } key={ getAsset.id }>
          <Link href={ `/videoAssets/${getAsset.id}` }>
            <a>
              <Image src={ logo } alt="Livepeer Studio Logo" width="256" height="256" />
              <h2> { getAsset.name } </h2>
            </a>
          </Link>
        </div> : null }
        
      
      
      

      <h3>
        <Link href="/onDemand">
          <a>&larr; Back to OnDemand Page </a>
        </Link>
      </h3>
    </main>
  );
}