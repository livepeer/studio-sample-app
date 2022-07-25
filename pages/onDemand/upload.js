import {useState} from 'react'
import Link from 'next/link';


export async function getServerSideProps() {
  const res = await fetch(`https://livepeer.studio/api/asset/`, {
    method: "POST",
    mode: 'cors',
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
      "Content-Type": "application/json",
    },
  });
  const asset = await res.json();
}

export default function OnDemand() {

// Getting the asset name and URL from the user
  const [assetName, setAssetName] = useState('');
  const [url, setURL] = useState('');

// Function to update asset name and URL from the user
  const getName = (e) => {
    e.preventDefault()
    setAssetName(e.target.value)
    console.log(assetName);
  }

  const getURL = (e) => {
    e.preventDefault()
    setURL(e.target.value)
    console.log(url);
  }


 

  return (
    <div>
      <h1>Upload a video</h1>
      <form action="/api/uploadForm" method="post">
        <label htmlFor="asset">Asset Name</label>
        <input type="text"
          value={ assetName }
          name="assetName"
          required
          onChange={ getName }
        />
        <label htmlFor="url">Asset URL </label>
        <input type="url"
          value={ url }
          name="url"
          required
          pattern="^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?"
          onChange={ getURL }
        />
        <button type="submit">Upload Asset</button>
        </form>

      <h3>
        <Link href='/'>
          <a>&larr; Back to Home Page </a>
        </Link>
      </h3>
</div>
 )     
}
