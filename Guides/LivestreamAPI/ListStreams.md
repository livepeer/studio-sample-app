# Livepeer Studio Sample App - Listing Assets

## Get Assets with Livepeer Studio API

With the following features:

* 📝 Getting a list of all the existing streams
* 📝 Getting a list of all the sessions of a specific stream
* 📝 Getting a stream with its id
* 📝 Getting a session with its id

## Objectives

* [ ] 🛠  Setup [Individual Streams](https://github.com/livepeer/studio-sample-app/blob/main/pages/streams/%5BlivestreamId%5D.js) page
* [ ] 🛠  Setup [Individual Sessions](https://github.com/livepeer/studio-sample-app/blob/main/pages/sessions/%5BsessionId%5D.js) page
* [ ] 🛠  Setup [Listing All Streams](https://github.com/livepeer/studio-sample-app/blob/main/pages/livestream/getStreams.jsx) page
* [ ] 🛠  Setup [Listing Sessions](https://github.com/livepeer/studio-sample-app/blob/main/pages/livestream/getSessions.tsx) page
* [ ] 🛠  Setup [List Stream by Id](https://github.com/livepeer/studio-sample-app/blob/main/pages/livestream/getStream.jsx) page
* [ ] 🛠  Setup [List Session by Id](https://github.com/livepeer/studio-sample-app/blob/main/pages/livestream/getSession.tsx) page

## Get Individual Stream

* [ ] 🧱 Create a directory call `streams`

* [ ] 🧱 Inside this directory, create a file called `[livestreamId].js` and make sure to wrap `[]` around using [NextJS Dynmaic Routes](https://nextjs.org/docs/routing/dynamic-routes)

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/streams/%5BlivestreamId%5D.js)

  * 🔬 This code is using NextJS [getServerSideProps( )](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) function to call the API endpoint of Livepeer Studio and return information for an asset based on the Id and returns it as props

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/streams/%5BlivestreamId%5D.js#L26)

  * 🔬 This code creates a function that takes in the props from the `getServerSideProps( )` and displays information about the stream available in the `return()` and include a video player showing the stream if it is live.

## Get Individual Session

* [ ] 🧱 Create a directory call `sessions`

* [ ] 🧱 Inside this directory, create a file called `[sessionId].js` and make sure to wrap `[]` around using [NextJS Dynmaic Routes](https://nextjs.org/docs/routing/dynamic-routes)

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/sessions/%5BsessionId%5D.js)

  * 🔬 This code is using NextJS [getServerSideProps( )](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) function to call the API endpoint of Livepeer Studio and return information for an asset based on the Id and returns it as props

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/sessions/%5BsessionId%5D.js#L22)

  * 🔬 This code creates a function that takes in the props from the `getServerSideProps( )` and displays information about the session available in the `return()`.

## Getting A Stream By Id

* [ ] 🧱 Create a file inside the pages/livestream directory called `getStream.js`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/livestream/getStream.jsx)

  * 🔬 This code is using NextJS [getServerSideProps( )](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) function to call the API endpoint of Livepeer Studio gets information on assets that has the status of `ready` and return them as props

  * [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/livestream/getStream.jsx#L21)

  * 🔬 This code creates a function that takes in the props from the `getServerSideProps` and displays information about the stream available in the `return()`

## Getting a Session By Id

* [ ] 🧱 Create a file inside the pages/livestream directory called `getSession.js`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/livestream/getSession.tsx)

  * 🔬 This code calls the the API endpoint from the backend that is setup using [NextJS API Routes](https://nextjs.org/docs/api-routes/introduction)

  * 🔬 This code creates a function that takes in the props from the `getServerSideProps` and displays information about the session available in the `return()``

> Once this step is complete, proceed to [Create Stream Guide](CreateStream.md)
