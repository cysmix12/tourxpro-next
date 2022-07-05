import { useContext, useEffect } from 'react';

import HomeFourLayout from '../src/components/layout/HomeFourLayout';
import {
  getTourPackages,
  getTourGuides,
  getBlogs,
  getDestinations,
} from '../src/mock-api';
import { MockContext } from '../src/context';

const Homepage4 = (props) => {
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
    if (props?.destinations)
      dispatch({
        type: 'SET_DESTINATIONS',
        payload: props.destinations,
      });
  }, [props]);

  return <HomeFourLayout />;
};

export async function getServerSideProps() {
  const tours = await getTourPackages();
  const tourGuides = await getTourGuides();
  const blogs = await getBlogs();
  const destinations = await getDestinations();

  return {
    props: {
      tours,
      tourGuides,
      blogs,
      destinations,
    },
  };
}

export default Homepage4;
