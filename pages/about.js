import AboutPage from '../src/components/pages/about/About';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';

const About = () => {
  return (
    <>
      <Header />
      <AboutPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export default About;
