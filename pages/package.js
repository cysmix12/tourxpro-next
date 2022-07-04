import PackageGrid from '../src/components/pages/packageGrid/PackageGrid';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';

const Package = () => {
  return (
    <>
      <Header />
      <PackageGrid />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export default Package;
