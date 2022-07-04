import BlogGridPage from '../src/components/pages/blog/BlogGrid/BlogGridPage';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';

const Blog = () => {
  return (
    <>
      <Header />
      <BlogGridPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export default Blog;
