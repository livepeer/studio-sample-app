// eslint-disable-next-line import/no-anonymous-default-export
export default async function handler(req, res) {
  const { name, url } = req.body;
  try {
    const response = await fetch(`https://livepeer.studio/api/asset/import`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        url
      })
    })
   
    const data = await response.json();
    console.log(data);
    // res.status(200).json(data)
    // need to redirect to the upload page again
    res.status(200).json(data);
  } catch (error  ) {
    console.log(error)
  }
  res.status(400).send("hello")

}