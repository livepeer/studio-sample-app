// eslint-disable-next-line import/no-anonymous-default-export
export default async function handler(req, res) {
  const { name } = req.body;
  try {
    // Calling api and passing in the name of the asset from the 'uploadLocal' form
    const response = await fetch(`https://livepeer.studio/api/asset/request-upload`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer 47518d26-23cc-4908-a1d2-a3e3901749c7`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name
      })
    })
   
     // Convert json response into JS object
    const data = await response.json();
    // console.log(data);
    res.status(200).json(data)
  } catch (error) {
    // console.error(error)
  }
  res.status(400).send("error")
}