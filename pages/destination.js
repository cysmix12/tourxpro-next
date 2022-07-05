import { useContext, useEffect } from 'react';

import DestinatinationPage from '../src/components/pages/destinetion/Destinatination';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';
import { getDestinations } from '../src/mock-api';
import { MockContext } from '../src/context';

const Destination = (props) => {
  const { dispatch } = useContext(MockContext);

  useEffect(() => {
    if (props?.destinations)
      dispatch({
        type: 'SET_DESTINATIONS',
        payload: props.destinations,
      });
  }, [props]);

  return (
    <>
      <Header />
      <DestinatinationPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export async function getServerSideProps() {
  const destinations = await getDestinations();

  return {
    props: {
      destinations,
    },
  };
}

export default Destination;
