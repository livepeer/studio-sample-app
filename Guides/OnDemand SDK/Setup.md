# Livepeer Studio Sample App - SDK Setup

## Setting up with SDK

SDK On Demand features:

* 📝 Getting a specific asset using `useAsset` hook
* 📝 Create an asset using `useCreateAsset` hook
* 📝 Updating an asset uisng `useUpdateAsset` hook

## Objectives

* [ ] 🛠 [Install](https://livepeerjs.org/docs/getting-started) SDK
* [ ] 🛠  Setup [Create Asset](https://github.com/livepeer/studio-sample-app/blob/main/pages/onDemandSDK/useCreateAsset.tsx) page
* [ ] 🛠  Setup [List Asset](https://github.com/livepeer/studio-sample-app/blob/main/pages/onDemandSDK/useAsset.tsx) page
* [ ] 🛠  Setup [List Asset by Id](https://github.com/livepeer/studio-sample-app/blob/main/pages/onDemandSDK/useUpdateAsset.tsx) page

## Installing SDK

>NOTE: An API key that allows CORS access is needed to use the SDK. Follow the [instructions here](https://docs.livepeer.studio/quickstart/) on creating the API key.


* [ ] 🧱 Install the SDK using one of the following options:

npm

```sh

npm i livepeer @livepeer/react wagmi ethers
```

pnpm

```sh
pnpm i livepeer @livepeer/react wagmi ethers
```

yarn

```sh
yarn add livepeer @livepeer/react wagmi ethers
```

## SDK Setup

* [ ] 🧱 Inside `_app.jsx`, create a Livepeer `Client`and pass in your API key. Then wrap the app with `LivepeerConfig` component

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/_app.jsx)

  * 🔬 This code creates a client which sets the provider to `studioProvider`. Then by wrapping the application around with `LivepeerConfig` and passing the `client` as the attribute, this allows the access to Livepeer Studio API's by using hooks provided instead of constantly making API calls.

  * 🔬 Learn more about the Livepeer [Client](https://livepeerjs.org/docs/client)

  * 🔬 Learn more about [LivepeerConfig](https://livepeerjs.org/docs/LivepeerConfig)

  * 🔬 Learn more about [studioProvider](https://livepeerjs.org/docs/providers/studio)

## Create An Asset

* [ ] 🧱 Create a directory inside pages called `onDemandSDK`

* [ ] 🧱 Create a file inside the `pages/onDemandSDK` directory called `useCreateAsset.tsx`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/onDemandSDK/useCreateAsset.tsx)

  * 🔬 This code is using the [useCreateAsset](https://github.com/livepeer/studio-sample-app/blob/main/pages/onDemandSDK/useCreateAsset.tsx#L8) hook to create an asset with a `.mp4` video provided and returning a link once the asset has been created

## Get An Asset

* [ ] 🧱 Create a file inside the `pages/onDemandSDK` directory called `useAsset.tsx`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/onDemandSDK/useAsset.tsx)

  * 🔬 This code is using the [useAsset](https://livepeerjs.org/docs/asset/useAsset) hook to retrieve an existing asset or one created with `useCreateAsset` hook

## Update An Asset

* [ ] 🧱 Create a file inside the `pages/onDemandSDK` directory called `useUpdateAsset.tsx`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/onDemandSDK/useUpdateAsset.tsx)

  * 🔬 This code is using the [useUpdateAsset](https://livepeerjs.org/docs/asset/useUpdateAsset) hook to update an exisitng asset
  