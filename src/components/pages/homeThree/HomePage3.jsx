import React from "react";
import BlogArea3 from "./BlogArea3";
import Home3HeroArea from "./Home3HeroArea";
import MoreUpdate from "./MoreUpdate";
import OfferPackage from "./OfferPackage";
import PackageArea from "./PackageArea";
import SearchBar from "./SearchBar";
import Testimonial3 from "./Testimonial3";
import TopDestination from "./TopDestination";
import Tourguide3 from "./Tourguide3";
import UpcomingTour from "./UpcomingTour";

function HomePage3() {
  return (
    <>
      <Home3HeroArea />
      <SearchBar/>
      <PackageArea/>
      <TopDestination/>
      <UpcomingTour/>
      <OfferPackage/>
      <Testimonial3/>
      <Tourguide3/>
      <BlogArea3/>
      <MoreUpdate/>
    </>
  );
}

export default HomePage3;
