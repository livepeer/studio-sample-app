import {useState} from 'react'
import Link from 'next/link';

export default function OnDemand() {

// Getting the asset name and URL from the user
  const [assetName, setAssetName] = useState('');
  const [url, setURL] = useState();

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
        <form>
          <input type="text" onChange={ getName } />
          <input type="text" onChange={ getURL } />
          <button onClick={""}>Upload Asset</button>
        </form>

      <h3>
        <Link href='/'>
          <a>&larr; Back to home page </a>
        </Link>
      </h3>
</div>
 )     
}
