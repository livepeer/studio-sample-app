// eslint-disable-next-line import/no-anonymous-default-export
export default async function handler(req, res) {
  if (req.method === "POST") {
    await fetch(`https://livepeer.studio/api/asset/import`, {
      method: "POST",
      mode: 'cors',
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: req.body.name,
        url: req.body.url
      })
    })
  }
  res.status(200).send(req.body)
}

  
  
  
  
   



