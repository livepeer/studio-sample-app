# Livepeer Studio Sample App - Uploading Assets

## Create a Stream with Livepeer Studio API

With the following features:

* 📝 Creating a new Stream

## Objectives

* [ ] 🛠  Setup [Create Stream](https://github.com/livepeer/studio-sample-app/blob/main/pages/livestream/createStream.tsx) page

## Setting up API endpoints

* [ ] 🧱 Create a directory call `api/stream`

* [ ] 🧱 Inside this directory, create the following file using [NextJS API Routes](https://nextjs.org/docs/api-routes/introduction):
  * `[getStream].js`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/api/stream/%5BgetStream%5D.js) for `[getStream].js`

  * 🔬 These code is using NextJS [NextJS API Routes](https://nextjs.org/docs/api-routes/introduction) to
  API endpoints to access on the server side

## Creating a Stream

* [ ] 🧱 Create a file inside the pages directory called `createStream.js`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/livestream/createStream.tsx)

  * 🔬 This code:
    * sets state to get the `name` from the user
    * passes the parameter to the API endpoint `'/api/stream'` created using the [NextJS API Route](https://nextjs.org/docs/api-routes/introduction) to create the stream
