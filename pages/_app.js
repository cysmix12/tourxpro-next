import SimpleReactLightbox from 'simple-react-lightbox';
import Head from 'next/head';

import '../src/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TourXPro - Travels Tourism Agency</title>
      </Head>
      <SimpleReactLightbox>
        <Component {...pageProps} />
      </SimpleReactLightbox>
    </>
  );
}

export default MyApp;
