import BlogStandardPage from '../src/components/pages/blog/BlogStandard/BlogStandard';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';

const BlogStandard = () => {
  return (
    <>
      <Header />
      <BlogStandardPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export default BlogStandard;
