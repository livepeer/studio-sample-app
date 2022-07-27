import React from 'react'


const LoadDataViaApi = (props) => {
  const [value, setValue] = React.useState(null)
  const increment = React.useCallback(async () => {
    const response = await fetch(`https://livepeer.studio/api/asset/import`, {
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
    });
    const json = await response.json()
    setValue(json.i)
  })
  React.useEffect(() => {
    // Timeout to showcase loading state
    setTimeout(async () => {
      const response = await fetch(`https://livepeer.studio/api/asset/`, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${process.env.API_KEY_FULL_CORS}`,
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      });
      const json = await response.json()
      setValue(json.i)
    }, 2000)
  }, [])
  if(!value) {
    return <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1 style={{textAlign: "center", marginTop: "20vh"}}>
        Loading (artificially slowed, 2 seconds)...
      </h1>
    </div>
  }
  return (
    <div>
    <h2>Data fetch after page load</h2>
    <p> This page is loaded in several steps: </p>
    <ol>
      <li>Fetch the page</li>
      <li>Render loading state</li>
      <li>Fetch data</li>
      <li>Re-render page with data</li>
    </ol>
    <p>This is a common and useful pattern in modern applications, especially for Single Page Applications.</p>
    <p>It is also more complex. The aim of this project is to allow for simpler patterns that allow more efficient prototyping. See <a href="/preload_data">this example</a> for an alternative that is possible with this NextJS+Express combo setup.</p>
    <div className="f-row">
      <h2 style={{marginRight: "6vw"}}> {value} </h2>
      <button  style={{width: "max(12vw, 60px)"}} onClick={increment}> + </button>
    </div>
    <div style={{marginBottom: "2vh"}}/>

  </div>
  )
}

export default LoadDataViaApi