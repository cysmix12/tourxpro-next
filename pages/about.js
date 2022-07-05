import { useContext, useEffect } from 'react';

import AboutPage from '../src/components/pages/about/About';
import Header from '../src/components/common/Header';
import Footer from '../src/components/common/Footer';
import { getTourGuides, getBlogs } from '../src/mock-api';
import { MockContext } from '../src/context';

const About = (props) => {
  const { dispatch } = useContext(MockContext);

  useEffect(() => {
    if (props?.tourGuides)
      dispatch({
        type: 'SET_TOUR_GUIDES',
        payload: props.tourGuides,
      });
    if (props?.blogs)
      dispatch({
        type: 'SET_BLOGS',
        payload: props.blogs,
      });
  }, [props]);

  return (
    <>
      <Header />
      <AboutPage />
      <Footer className="footer-area mt-110" />
    </>
  );
};

export async function getServerSideProps() {
  const tourGuides = await getTourGuides();
  const blogs = await getBlogs();

  return {
    props: {
      tourGuides,
      blogs,
    },
  };
}

export default About;
