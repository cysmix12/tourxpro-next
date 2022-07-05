import { useContext, useEffect } from 'react';

import MainLayout from '../src/components/layout/MainLayout';
import { getTourPackages, getTourGuides, getBlogs } from '../src/mock-api';
import { MockContext } from '../src/context';

const Homepage = (props) => {
  const { dispatch } = useContext(MockContext);

  useEffect(() => {
    if (props?.tours)
      dispatch({
        type: 'SET_TOURS',
        payload: props.tours,
      });
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

  return <MainLayout />;
};

export async function getServerSideProps() {
  const tours = await getTourPackages();
  const tourGuides = await getTourGuides();
  const blogs = await getBlogs();

  return {
    props: {
      tours,
      tourGuides,
      blogs,
    },
  };
}

export default Homepage;
