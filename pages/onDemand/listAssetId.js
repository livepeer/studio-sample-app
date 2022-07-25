import {useState} from "react";
import Image from 'next/image';
import router from 'next/router'
import Link from 'next/link';
import logo from '../../public/studioLogo.png';
import styles from "../../styles/Assets.module.css";

// export async function getServerSideProps() {
//   const res = await fetch(`https://livepeer.studio/api/asset/`, {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${process.env.API_KEY}`,
//       "Content-Type": "application/json",
//     },
//   });
//   const asset = await res.json();


//   return {
//     props: {
//       assets: asset,
//     },
//   };
// }



export default function ListAssetByID() {

  const [assetId, setAssetId] = useState();
  // const {asset} = router.assetId

  async function searchAsset(e) {
    e.preventDefault();
    let res = await fetch(`https://livepeer.studio/api/asset/${assetId}`, {
      method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json",
    },
  });
    const asset = await res.json();
    console.log(asset);
    setAssetId(e.target.value)
  }


  return (
    <main className = { styles.main } >
      <h1 className={ styles.title }>Get Assets By Id</h1>
      <form onSubmit={searchAsset} method="get" className={ styles.card }>
        <label htmlFor="">Asset ID: </label>
        <input type="search" id="assetId" value={ assetId } />
        <button type="submit">Submit</button>
      </form>
       
            
        

    </ main>
      );
}
