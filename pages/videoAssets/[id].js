import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from "../../styles/Home.module.css";


export async function getStaticPaths() {
  const res = await fetch(`https://livepeer.studio/api/asset`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  const data= await res.json();

  return {
    paths: data.map((data) => ({
      params: { id: data.id.toString() },
    })),
    fallback: false,
  };
}


export async function getStaticProps({params}) {
  const res = await fetch(`https://livepeer.studio/api/asset/${params.id}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return {
    props: {
      assets: data,
    },
  };
}


export default function Details({assets}) {
  const { query: { id, }, } = useRouter();
  // const [allAssets, setAllAssets] = useState(null);



  
  return (
    <div>
          <div className={ styles.card } key={ id }>
              <a>
                <img />
          <h2> { assets.name } </h2>
          <p>Status: { assets.status.phase }</p>
          <p>Playback Id: { assets.playbackId}</p>
          <p>PlaybackURL:{ assets.playbackUrl }</p>
          <a href={ assets.downloadUrl }
            target="_blank"
            rel="noreferrer">
            DownloadUrl: { assets.downloadUrl }
          </a>
              </a>
            
          </div>
    
    </div>
  )
}