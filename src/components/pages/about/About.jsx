import React from "react";
import AboutWrapperArea from "./AboutWrapperArea";
import BlogArea from "./BlogArea";
import GuideArea from "../../common/GuideArea";
import TestimonialArea from "../../common/TestimonialArea";
import Breadcrumb from "../../common/Breadcrumb";

function About() {
  return (
    <>
      <Breadcrumb name="About" />
      <AboutWrapperArea />
      <TestimonialArea />
      <GuideArea />
      <BlogArea />
    </>
  );
}

export default About;
