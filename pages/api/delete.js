// eslint-disable-next-line import/no-anonymous-default-export
export default async function handler(req, res) {
  const assetId = req.body.assetId;
  try {
    const response = await fetch(`https://livepeer.studio/api/asset/${assetId}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json',
      },
    })
   
    const data = await response.json();
    console.log(data);
    res.status(204).json(data)
  } catch (error) {
  }
  res.status(400).send("error")
}