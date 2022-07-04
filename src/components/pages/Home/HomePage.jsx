import React from "react";
import TestimonialArea from "../../common/TestimonialArea";
import DestinationArea from "./DestinationArea";
import GallaryArea from "./GallaryArea";
import HeroArea from "./HeroArea";
import LatestNews from "./LatestNews";
import NewsLetterArea from "./NewsLetterArea";
import OfferArea from "./OfferArea";
import PackageArea from "./PackageArea";
import TourGideArea from "./TourGideArea";

function HomePage() {
  return (
    <>
      <HeroArea />
      <PackageArea />
      <DestinationArea />
      <NewsLetterArea />
      <OfferArea />
      <GallaryArea />
      <TestimonialArea />
      <TourGideArea />
      <LatestNews />
    </>
  );
}

export default HomePage;
