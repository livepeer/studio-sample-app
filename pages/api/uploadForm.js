// // eslint-disable-next-line import/no-anonymous-default-export
// export default async function handler(req, res) {
//   const { assetName, url } = req.body;
//   fetch(`https://livepeer.studio/api/asset/import`, {
//       method: "POST",
//       headers: {
//         'Authorization': `Bearer ${process.env.API_KEY_FULL_CORS}`,
//         'Content-Type': 'application/json',
//         'Access-Control-Allow-Origin': '*',
//         // 'Access-Control-Allow-Credentials': 'true',
//         // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
//       },
//       body: JSON.stringify({
//         assetName,
//         url
//       })
//     })
//   res.status(200).send(req.body)
// }