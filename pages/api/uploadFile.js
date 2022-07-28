// eslint-disable-next-line import/no-anonymous-default-export
export default async function handler(req, res) {
  const { url } = req.body;
  try {
    const response = await fetch(`https://livepeer.studio/api/asset/request-upload`, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'video/mp4',
      },
      body: JSON.stringify({
        url
      })
    })
   
    const data = await response.json();
    console.log(data);
    // need to redirect to the upload page again
    res.status(200).send(data);
  } catch (error  ) {
    console.log(error)
  }
  res.status(400).send("hello")

}