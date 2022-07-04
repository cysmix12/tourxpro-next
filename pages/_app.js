import SimpleReactLightbox from 'simple-react-lightbox';

import '../src/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  );
}

export default MyApp;
