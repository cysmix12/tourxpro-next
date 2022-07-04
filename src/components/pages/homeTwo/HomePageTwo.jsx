import React from "react";
import DestinationArea from "./DestinationArea";
import NewsLetterArea from "./NewsLetterArea";
import TestimonialArea from "./TestimonialArea";
import WorldMapArea from "./WorldMapArea";
import GuideArea from "../../common/GuideArea";
import LetesBlogArea from "./LetesBlogArea";
import SocialActivitisArea from "./SocialActivitisArea";
import OfferPackage from "./OfferPackage";
import Package from "./Packages";
import Hero2 from "./Hero2";

function HomePageTwo() {
  return (
    <>
      <Hero2 />
      <Package />
      <DestinationArea />
      <NewsLetterArea />
      <OfferPackage />
      <WorldMapArea />
      <TestimonialArea />
      <GuideArea />
      <LetesBlogArea />
      <SocialActivitisArea />
    </>
  );
}

export default HomePageTwo;
