import GalleryPage from '../src/components/pages/gallary/GallaryPage';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';

const Gallery = () => {
  return (
    <>
      <Header />
      <GalleryPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export default Gallery;
