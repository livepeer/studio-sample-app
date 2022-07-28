import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Form.module.css";

// export async function getServerSideProps(context) {
  
//    const response = await fetch('http://localhost:3000/api/getUploadURL')
//     const url = await response.json();
    
  
//   return {
//     props: {
//       url
//     }

//   }
// }


export async function getServerSideProps() {
  
  const response = await fetch(`https://livepeer.studio/api/asset/request-upload`, {
    method: "POST",
    headers: {
      'Authorization': `Bearer ${process.env.API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name
    })
  })
 
  const data = await response.json();
    
  
  return {
    props: {
      url: data.url
    }

  }
}



export default function UploadLocal(url) {

  // Getting the asset name from the user
  const [formState, setFormState] = useState({ name: "" });

  const getURL = async (e) => {
    e.preventDefault();
    const { name } = formState;
   const res = await fetch('/api/uploadForm', {
      method: "POST",
      body: JSON.stringify({
        name,
      }),
    })
      
    const data = res.json()
    setFormState({ name: "" });
    
    return {
      props: {
        uploadURL: data
      }
    }
  };

  async function handleOnSubmit(e) {
    // e.preventDefault();
    // const form = e.currentTarget;
    // const fileInput = Array.from(form.elements).find((name) => name === 'file')

    // const formData = new FormData();
    // formData.append('file', form)

    // // Returned upload url
    // const data = await fetch('', {
    //   method: 'POST',
    //   body: formData
    // })
    //   .then(response => response.json())
    // console.log(data);
  }

  

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>Uploading with Local Storage</h1>
      <form action={'/api/getUploadURL'} method="POST" className={styles.card}>
        <label htmlFor="asset">Asset Name</label>
        <input
          type="text"
          value={formState.name}
          name="name"
          required
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />
        
        <button type="submit">Get Upload URL</button>

        <h3>Upload URL</h3>
        {url}
      </form>

      
      <form action={'/api/uploadFile'} method="POST" encType="multipart/form-data" className={styles.card}>
        
        <label htmlFor="url">Upload URL </label>
        <input
          type="url"
          value={formState.url}
          name="url"
          required
          pattern="^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?"
          onChange={(e) => setFormState({ ...formState, url: e.target.value })}
        />

        <input
          type="file"
          name="assetFile"
          required
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
        />
        <button onClick={handleOnSubmit}>Upload Asset</button>
      </form>

      <h3>
        <Link href="/">
          <a>&larr; Back to Home Page </a>
        </Link>
      </h3>
    </div>
  );
}
