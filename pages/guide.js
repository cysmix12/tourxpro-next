import { useContext, useEffect } from 'react';

import GuidePage from '../src/components/pages/guide/GuidePage';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';
import { getTourGuides } from '../src/mock-api';
import { MockContext } from '../src/context';

const Guide = (props) => {
  const { dispatch } = useContext(MockContext);

  useEffect(() => {
    if (props?.tourGuides)
      dispatch({
        type: 'SET_TOUR_GUIDES',
        payload: props.tourGuides,
      });
  }, [props]);

  return (
    <>
      <Header />
      <GuidePage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export async function getServerSideProps() {
  const tourGuides = await getTourGuides();

  return {
    props: {
      tourGuides,
    },
  };
}

export default Guide;
