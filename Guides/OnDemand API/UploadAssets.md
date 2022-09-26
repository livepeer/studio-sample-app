# Livepeer Studio Sample App - Uploading Assets

## Uploading assets with Livepeer Studio API

With the following features:

* 📝 Uploading an asset using the downloadable URL method
* 📝 Uploading an asset using the local storage method
* 📝 Updating an existing asset
* 📝 Deleting an asset with a provided asset Id

## Objectives

* [ ] ⚙️ Install [Axios](https://axios-http.com/docs/req_config) to use its `onloadProgress()` function to get the upload status when using the direct upload option
* [ ] ⚙️ Install [tus](https://tus.io/) to use its `onProgress()` function to get the upload status when using the resumable upload option
* [ ] 🛠  Setup [API endpoints for mutating assets](https://github.com/livepeer/studio-sample-app/tree/OnDemand/Upload-Asset/pages/api) page
* [ ] 🛠  Setup [Upload Asset with Local Storage](https://github.com/livepeer/studio-sample-app/blob/OnDemand/Upload-Asset/pages/onDemand/uploadLocal.js) page
* [ ] 🛠  Setup [Update Asset](https://github.com/livepeer/studio-sample-app/blob/OnDemand/Upload-Asset/pages/onDemand/updateAsset.js) page
* [ ] 🛠  Setup [Delete Asset](https://github.com/livepeer/studio-sample-app/blob/OnDemand/Upload-Asset/pages/onDemand/deleteAsset.js) page

## Setting up API endpoints

* [ ] 🧱 Create a directory call `api`

* [ ] 🧱 Inside this directory, create the following files using [NextJS API Routes](https://nextjs.org/docs/api-routes/introduction):

  * `getUploadURL.js`
  * `uploadForm.js`
  * `update.js`
  * `delete.js`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/OnDemand/List-Asset/pages/videoAssets/%5Bid%5D.js#L8) for `getUploadURL.js`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/OnDemand/Upload-Asset/pages/api/uploadForm.js) for `uploadForm.js`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/OnDemand/Upload-Asset/pages/api/update.js) for `update.js`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/OnDemand/Upload-Asset/pages/api/delete.js) for `delete.js`

  * 🔬 These code is using NextJS [NextJS API Routes](https://nextjs.org/docs/api-routes/introduction) to
  API endpoints to access on the server side

## Uploading Asset with Downloadable URL

* [ ] 🧱 Create a file inside the pages directory called `uploadURL.js`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/OnDemand/Upload-Asset/pages/onDemand/uploadURL.js#L6)

  * 🔬 This code:
  
    * sets state to get the `name` and `url` from the user
    * passes the two parameters to the API endpoint `'/api/uploadForm'` created using the [NextJS API Route](https://nextjs.org/docs/api-routes/introduction) to create the asset

## Uploading Asset with Local Storage

* [ ] 🧱 Create a file inside the pages directory called `uploadLocal.js`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/OnDemand/Upload-Asset/pages/onDemand/uploadLocal.js#L8)

  * 🔬 This code:

    * sets state to get the `name` of the asset to be creates

    * passes the parameter to the API endpoint `'/api/getUploadURL'` created using the [NextJS API Route](https://nextjs.org/docs/api-routes/introduction) to create a URL for the asset to be uploaded to

    * once the `url` has been generated, the user select the method of upload either using direct or resumable and uploads the asset to be stored

## Updating an Asset

* [ ] 🧱 Create a file inside the pages directory called `updateAsset.js`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/OnDemand/Upload-Asset/pages/onDemand/updateAsset.js#L6)

  * 🔬 This code:

    * sets state to get the required `assetId` of the asset to be updated along with any `name`, `storage`, or `meta` fields they wish to modify

    * passes the parametes to the API endpoint `'/api/update'` created using the [NextJS API Route](https://nextjs.org/docs/api-routes/introduction) to get the specific asset and update it

## Delete an Asset

* [ ] 🧱 Create a file inside the pages directory called `deleteAsset.js`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/OnDemand/Upload-Asset/pages/onDemand/deleteAsset.js#L6)

  * 🔬 This code:

    * gets the `assetId` form the user for the asset to be deleted
    * passes the parameter to the API endpoint `'/api/delete'` created using the [NextJS API Route](https://nextjs.org/docs/api-routes/introduction) and deletes the asset
