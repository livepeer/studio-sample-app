import Image from 'next/image';
import { useRouter } from 'next/router';
import logo from '../../public/studioLogo.png';
import styles from "../../styles/Asset.module.css";


export async function getStaticPaths() {
  const res = await fetch(`https://livepeer.studio/api/asset`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  
    let readyAssets = []
  for (const asset of data) {
    if (asset.status === "ready") {
      readyAssets.push(asset)
    }
  }

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
// write logic to ignore asset.videoSpec.duration if it does not exist
// otherwise an error will get thrown
// if(assets.videoSpec) {
//   return assets.videoSpec.duration;
//   } else {
//   return '---'
//   }

  
  return (
    
    <div>
          <div className={ styles.card } key={ id }>
              <a>
          <Image 
            src= {logo}
            alt="Livepeer Studio Logo"
            width="256"
            height="256"
          />
          <h2> { assets.name } </h2>
          <p>Status: { assets.status.phase }</p>
          <p>Id: { assets.id }</p>
          {/* <p>Time: { assets.videoSpec.duration } seconds</p> */}
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