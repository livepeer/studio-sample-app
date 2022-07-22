// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  const { name, url } = req.body;
  await fetch(`https://livepeer.studio/api/asset/import`, {
  method: "POST",
  headers: {
    'Authorization': `Bearer ${process.env.API_KEY}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name,
    url
  })
  })
  console.log(req.body);
  res.status(200).json(req.body)
}

  
  
  
  
   



