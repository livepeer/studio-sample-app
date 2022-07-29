// eslint-disable-next-line import/no-anonymous-default-export
export default async function handler(req, res) {
  const { name } = req.body;
  try {
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
    console.log(data);
    res.status(200).json(data)
  } catch (error) {
    console.log(error)
  }
  res.status(400).send("error")
}