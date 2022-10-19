import '../styles/globals.css'
import Layout from '../components/Layout';
import { LivepeerConfig, createReactClient, studioProvider } from '@livepeer/react';



function MyApp( { Component, pageProps } ) {
   const client = createReactClient({
     provider: studioProvider({ apiKey: process.env.NEXT_PUBLIC_API_CORS }),
   });
  return (
    <>
      <LivepeerConfig client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LivepeerConfig>
    </>
  );
}

export default MyApp
