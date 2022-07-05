import SimpleReactLightbox from 'simple-react-lightbox';
import Head from 'next/head';

import { MockProvider } from '../src/context';

import '../src/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TourXPro - Travels Tourism Agency</title>
      </Head>
      <MockProvider>
        <SimpleReactLightbox>
          <Component {...pageProps} />
        </SimpleReactLightbox>
      </MockProvider>
    </>
  );
}

export default MyApp;
