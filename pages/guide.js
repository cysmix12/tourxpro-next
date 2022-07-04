import GuidePage from '../src/components/pages/guide/GuidePage';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';

const Guide = () => {
  return (
    <>
      <Header />
      <GuidePage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export default Guide;
