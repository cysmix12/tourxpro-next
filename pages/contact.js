import ContactPage from '../src/components/pages/contact/Contact';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <ContactPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export default Contact;
