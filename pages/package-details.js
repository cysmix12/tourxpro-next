import PackageDetailsPage from '../src/components/pages/packageDetails/PackageDetails';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';

const PackageDetails = () => {
  return (
    <>
      <Header />
      <PackageDetailsPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export default PackageDetails;
