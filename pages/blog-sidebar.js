import BlogSidebarPage from '../src/components/pages/blog/BlodSidebar/BlogSidebar';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';

const BlogSidebar = () => {
  return (
    <>
      <Header />
      <BlogSidebarPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export default BlogSidebar;
