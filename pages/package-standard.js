import PackageStandardPage from '../src/components/pages/packageStandard/PackageStandard';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';

const PackageStandard = () => {
  return (
    <>
      <Header />
      <PackageStandardPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export default PackageStandard;
