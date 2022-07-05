import { useContext, useEffect } from 'react';

import PackageStandardPage from '../src/components/pages/packageStandard/PackageStandard';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';
import { getTourPackages } from '../src/mock-api';
import { MockContext } from '../src/context';

const PackageStandard = (props) => {
  const { dispatch } = useContext(MockContext);

  useEffect(() => {
    if (props?.tours)
      dispatch({
        type: 'SET_TOURS',
        payload: props.tours,
      });
  }, [props]);

  return (
    <>
      <Header />
      <PackageStandardPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export async function getServerSideProps() {
  const tours = await getTourPackages();

  return {
    props: {
      tours,
    },
  };
}

export default PackageStandard;
