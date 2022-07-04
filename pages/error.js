import ErrorPage from '../src/components/pages/error/Error';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';

const Error = () => {
  return (
    <>
      <Header />
      <ErrorPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export default Error;
