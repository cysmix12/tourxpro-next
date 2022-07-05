import { useContext, useEffect } from 'react';

import BlogGridPage from '../src/components/pages/blog/BlogGrid/BlogGridPage';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';
import { getBlogs } from '../src/mock-api';
import { MockContext } from '../src/context';

const Blog = (props) => {
  const { dispatch } = useContext(MockContext);

  useEffect(() => {
    if (props?.blogs)
      dispatch({
        type: 'SET_BLOGS',
        payload: props.blogs,
      });
  }, [props]);

  return (
    <>
      <Header />
      <BlogGridPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export async function getServerSideProps() {
  const blogs = await getBlogs();

  return {
    props: {
      blogs,
    },
  };
}

export default Blog;
