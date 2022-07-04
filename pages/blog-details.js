import BlogDetailsPage from '../src/components/pages/blog/blogdetails/BlogDetailsPage';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';

const BlogDetails = () => {
  return (
    <>
      <Header />
      <BlogDetailsPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export default BlogDetails;
