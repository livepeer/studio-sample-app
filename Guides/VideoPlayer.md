# Livepeer Studio Sample App - Livepeer Video Player

## Setting up the Video Player

## Objectives

* [ ] 🛠 [Install](https://livepeerjs.org/) SDK

* [ ] 🛠 [Install](https://livepeerjs.org/docs/VideoPlayer) Video Player from SDK
* [ ] 🛠  Setup [VideoPlayer](https://github.com/livepeer/studio-sample-app/blob/main/pages/videoPlayer.sx) page

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

## Setup Video Player Page

* [ ] 🧱 Create a file inside the `pages` directory called `videoPlayer.tsx`

* [ ] ⌨️ Insert [this code](https://github.com/livepeer/studio-sample-app/blob/main/pages/videoPlayer.tsx)

  * 🔬 This code is using the `VideoPlayer` component to create a video player within a page to allow livestreams or assets to be viewed. The player can playback livestreams or assets by providing either the `playbackURL` or the `playbackId`.
  