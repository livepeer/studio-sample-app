import {useState} from "react";
import Image from 'next/image';
import router from 'next/router'
import Link from 'next/link';
import logo from '../../public/studioLogo.png';
import styles from "../../styles/Assets.module.css";



export async function getServerSideProps() {
  const res = await fetch(`https://livepeer.studio/api/asset`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (res.status !== 200) {
    throw new Error('error');
  }

  return {
    props: {
      assets: data
    },
  };
}




export default function ListAssetByID({ assets }) {
  console.log(assets);

  const [assetId, setAssetId] = useState();

  const getAssetId = async (e) => {
    e.preventDefault();

    setAssetId(e.target.value)
    setAssetId('')

  }
      return (
        <main className={ styles.main } >
          <h1 className={ styles.title }>Get Assets By Id</h1>
          <form onSubmit={ getAssetId} method="GET" className={ styles.card }>
            <label htmlFor="">Asset ID: </label>
            <input type="search"
              name="query"
              id="assetId"
              value={ assetId }
              required
              onChange={ ((e) => e.target.value) }
            />
            <button type="submit">Get Asset</button>
          </form>


          <div className={ styles.grid }>
              <div className={ styles.card } key={ asset.id }>
                <Link href={ `/videoAssets/${asset.id}` }>
                    {/* <Image
                      src={ logo }
                      alt="Livepeer Studio Logo"
                      width="256"
                      height="256"
                    /> */}
                    <h3 className={ styles.title2 }> { asset.name } </h3>
                </Link>
              </div>
          </div>


          <h3>
            <Link href="/onDemand">
              <a>&larr; Back to OnDemand Page </a>
            </Link>
          </h3>
        </ main>
      );
    }