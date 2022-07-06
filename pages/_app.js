import SimpleReactLightbox from 'simple-react-lightbox';
import Head from 'next/head';
import Script from 'next/script';

import { MockProvider } from '../src/context';

import '../src/index.scss';

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
      <Script src="/plugin/js/bootstrap.bundle.min.js" />
    </>
  );
}

export default MyApp;
