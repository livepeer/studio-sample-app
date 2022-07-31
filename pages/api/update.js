// eslint-disable-next-line import/no-anonymous-default-export
export default async function handler(req, res) {
  const { name, storage, meta } = req.body;
  const assetId = req.body.assetId;
  try {
    const response = await fetch(`https://livepeer.studio/api/asset/${assetId}`, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        storage,
        meta
      })
    })
   
    const data = await response.json();
    console.log(data);
    res.status(200).json(data)
  } catch (error) {
    console.log(message.error)
  }
  res.status(400).send("error")
}