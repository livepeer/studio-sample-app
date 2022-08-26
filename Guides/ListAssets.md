# Livepeer Studio Sample App - Listing Assets

## Get Assets with Livepeer Studio API

With the following features:

* 📝 Getting a list of all the assets they uploaded
* 📝 Getting a list of all the assets uploaded with a `ready` status
* 📝 Getting an asset with its id

## Objectives

* [ ] 🛠  Setup [Individual Assets](https://github.com/livepeer/studio-sample-app/blob/OnDemand/List-Asset/pages/videoAssets/%5Bid%5D.js) page
* [ ] 🛠  Setup [Listing All Assets](https://github.com/livepeer/studio-sample-app/blob/OnDemand/List-Asset/pages/onDemand/listAssets.js) page
* [ ] 🛠  Setup [Listing Ready Assets](https://github.com/livepeer/studio-sample-app/blob/OnDemand/List-Asset/pages/onDemand/listAssetsReady.js) page
* [ ] 🛠  Setup [List Asset by Id](https://github.com/livepeer/studio-sample-app/blob/OnDemand/List-Asset/pages/onDemand/listAssetId.js) page

## Get Individual Asset

* [ ] 🧱 Create a directory call `videoAssets`

* [ ] 🧱 Inside this directory, create a file called `[id].js` and make sure to wrap `[]` around using [NextJS Dynmaic Routes](https://nextjs.org/docs/routing/dynamic-routes)

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/OnDemand/List-Asset/pages/videoAssets/%5Bid%5D.js#L8)

  * 🔬 This code is using NextJS [getServerSideProps( )](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) function to call the API endpoint of Livepeer Studio and return information for an asset based on the Id and returns it as props

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/OnDemand/List-Asset/pages/videoAssets/%5Bid%5D.js#L27)

  * 🔬 This code creates a function that takes in the props from the `getServerSideProps( )` and displays information about the asset available in the `return()` and include a video player showing the existing asset and the code for the an embeddable video player

## Get All Assets

* [ ] 🧱 Create a file inside the pages directory called `listAssets.js`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/OnDemand/List-Asset/pages/onDemand/listAssets.js#L8)

  * 🔬 This code is using NextJS [getServerSideProps( )](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) function to call the API endpoint of Livepeer Studio and return that information as props

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/OnDemand/List-Asset/pages/onDemand/listAssets.js#L30)

  * 🔬 This code creates a function that takes in the props from the `getServerSideProps` and displays information about the asset available in the `return()`

## Getting All `ready` Assets

* [ ] 🧱 Create a file inside the pages directory called `listAssetsReady.js`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/OnDemand/List-Asset/pages/onDemand/listAssetsReady.js#L8)

  * 🔬 This code is using NextJS [getServerSideProps( )](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props) function to call the API endpoint of Livepeer Studio gets information on assets that has the status of `ready` and return them as props

  * [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/OnDemand/List-Asset/pages/onDemand/listAssetsReady.js#L38)

  * 🔬 This code creates a function that takes in the props from the `getServerSideProps` and displays information about the asset available in the `return()`

## Getting an Asset By Id

* [ ] 🧱 Create a file inside the pages directory called `listAssetId.js`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/OnDemand/List-Asset/pages/onDemand/listAssetId.js#L9)

  * 🔬 This code calls the the API endpoint from the backend that is setup using [NextJS API Routes](https://nextjs.org/docs/api-routes/introduction)

  * 🔬 Setting state to get the `assetId` from the user, and setting another state `getAsset` for information from the API call to displays information the asset available in the `return()`
