import { useContext, useEffect } from 'react';

import HomeageTowLayout from '../src/components/layout/HomeageTowLayout';
import {
  getTourPackages,
  getTourGuides,
  getBlogs,
  getDestinations,
} from '../src/mock-api';
import { MockContext } from '../src/context';

const Homepage2 = (props) => {
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

  return <HomeageTowLayout />;
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

export default Homepage2;
