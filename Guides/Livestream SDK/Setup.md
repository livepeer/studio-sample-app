# Livepeer Studio Sample App - SDK Setup

## Setting up with SDK

SDK Livestream features:

* 📝 Create an stream using `useCreateStream` hook
* 📝 Getting a specific stream using `useStream` hook
* 📝 Getting sessions of a stream using `useStreamSessions` hook
* 📝 Updating a stream uisng `useUpdateStream` hook

## Objectives

* [ ] 🛠 [Install](https://livepeerjs.org/docs/getting-started) SDK
* [ ] 🛠  Setup [Create Stream](https://github.com/livepeer/studio-sample-app/blob/main/pages/livestreamSDK/useCreateStream.tsx) page
* [ ] 🛠  Setup [Get Stream](https://github.com/livepeer/studio-sample-app/blob/main/pages/livestreamSDK/useStream.tsx) page
* [ ] 🛠  Setup [Get Sessions](https://github.com/livepeer/studio-sample-app/blob/main/pages/livestreamSDK/useStreamSessions.tsx) page
* [ ] 🛠  Setup [Update Stream](https://github.com/livepeer/studio-sample-app/blob/main/pages/livestreamSDK/useUpdateStream.tsx) page

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

## Create A Stream

* [ ] 🧱 Create a directory inside pages called `livestreamSDK`

* [ ] 🧱 Create a file inside the `pages/livestreamSDK` directory called `useCreateStream.tsx`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/livestreamSDK/useCreateStream.tsx)

  * 🔬 This code is using the [useCreateStream](https://livepeerjs.org/docs/stream/useCreateStream) hook to create an stream.

## Get A Stream

* [ ] 🧱 Create a file inside the `pages/livestreamSDK` directory called `useStream.tsx`.

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/livestreamSDK/useStream.tsx)

  * 🔬 This code is using the [useStream](https://livepeerjs.org/docs/stream/useStream) hook to retrieve an existing stream or one created with `useCreateStream` hook.

## Update A Stream

* [ ] 🧱 Create a file inside the `pages/livestreamSDK` directory called `useUpdateStream.tsx`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/livestreamSDK/useUpdateStream.tsx)

  * 🔬 This code is using the [useUpdateStream](https://livepeerjs.org/docs/stream/useUpdateStream) hook to update an exisitng stream.
  