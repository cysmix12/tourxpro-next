import DestinationDetailsPage from '../src/components/pages/destinationDetails/DestinationDetails';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';

const DestinationDetails = () => {
  return (
    <>
      <Header />
      <DestinationDetailsPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export default DestinationDetails;
