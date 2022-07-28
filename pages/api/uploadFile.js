// eslint-disable-next-line import/no-anonymous-default-export
export default async function handler(req, res) {
  let formData = new FormData();
  formData.append('file', file)
  try {
    const response = await fetch(`https://origin.livepeer.com/api/asset/upload/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVzaWduZWRVcmwiOiJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vbHAtdXMtdm9kLWNvbS9kaXJlY3RVcGxvYWQvYmM4YWoybDQ5OXJheXRzcy9zb3VyY2U_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ29udGVudC1TaGEyNTY9VU5TSUdORUQtUEFZTE9BRCZYLUFtei1DcmVkZW50aWFsPUdPT0cxRVlVTldOVjZSWUlLNTQySFdBM1JMN1JCN0pVT0VRM1lMMjNRWUI2Q0hQRzVITzJRQzMzTUpWVVklMkYyMDIyMDcyOCUyRnVzJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDIyMDcyOFQyMTA5NDdaJlgtQW16LUV4cGlyZXM9OTAwJlgtQW16LVNpZ25hdHVyZT0wZjQyM2U2MWQ5OTdkNjRmZmE3YWFmNDY3MDkwMDBkOTg0ZTEwYzU2ZjcxZjM5MDdkNTk3NDczY2E5NzkwN2EwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZ4LWlkPVB1dE9iamVjdCIsImF1ZCI6Imh0dHBzOi8vbGl2ZXBlZXIuY29tIiwiaWF0IjoxNjU5MDQyNTg3fQ.FBHkcqv-_qgdi4xHdRRvuUzAifcAwE_lm6yuuVyyV44`, {
      method: "PUT",
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`,
        'Content-Type': 'video/mp4',
      },
      body: formData
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