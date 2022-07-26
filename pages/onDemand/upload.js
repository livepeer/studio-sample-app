import {useState} from 'react'
import Link from 'next/link';


export default function OnDemand() {

// Getting the asset name and URL from the user
  const [formState, setFormState] = useState({
    name: '',
    url: ''
  });

  const submitForm = async (e) => {
    e.preventDefault();
    const { name, url } = formState;
    const res = await fetch(`https://livepeer.studio/api/asset/import`, {
      method: "POST",
      mode: 'no-cors',
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY_FULL_CORS}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Credentials': 'true',
        // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
      },
      body: JSON.stringify({
        name,
        url
      })
    })
      .then(res => res.json())
      .then((data) => {
      console.log(data)
      })
    .catch(error => console.log(error))
  }

  return (
    <div>
      <h1>Upload a video</h1>
      <form  onSubmit={submitForm}  method="POST">
        <label htmlFor="asset">Asset Name</label>
        <input type="text"
          value={ formState.name }
          name="assetName"
          required
          onChange={ (e) => setFormState({...formState, name: e.target.value}) }
        />
        <label htmlFor="url">Asset URL </label>
        <input type="url"
          value={ formState.url }
          name="url"
          required
          pattern="^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?"
          onChange={ (e) => setFormState({...formState, url: e.target.value}) }
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
