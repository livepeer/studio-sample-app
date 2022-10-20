import '../styles/globals.css'
import Layout from '../components/Layout';
import { LivepeerConfig, createReactClient, studioProvider } from "@livepeer/react";
import { ConnectKitProvider, getDefaultClient } from 'connectkit';
import { WagmiConfig, chain, createClient } from 'wagmi';


function MyApp( { Component, pageProps } ) {

  const wagmiClient = createClient(
    getDefaultClient({
      appName: 'livepeer.js',
      chains: [ chain.polygonMumbai ],
      infuraId: process.env.NEXT_PUBLIC_INFURA_API_KEY
    })
  )

   const client = createReactClient({
     provider: studioProvider({ apiKey: process.env.NEXT_PUBLIC_API_CORS }),
   });
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <ConnectKitProvider>
          <LivepeerConfig client={client}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </LivepeerConfig>
        </ConnectKitProvider>
      </WagmiConfig>
    </>
  );
}

export default MyApp
