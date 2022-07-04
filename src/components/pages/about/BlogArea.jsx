import React from "react";
import { Link } from "react-router-dom";
import BlogCardGama from "../blog/BlogGrid/BlogCardGama";

function BlogArea() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="blog-area blog-style-two pt-110">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="section-head-gamma text-start">
              <h2>Latest Blog</h2>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="blog-btn text-lg-end">
              <Link
                to={`${process.env.PUBLIC_URL}/blog`}
                onClick={scrollTop}
                className="button-fill-round"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <BlogCardGama
              thumbImage={process.env.PUBLIC_URL + "/images/blog/blog-md-1.png"}
              writter="John Smith"
              date="November 17, 2022"
              title="Sollicitudin urna metus iaculis odio eget efficitur leo."
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <BlogCardGama
              thumbImage={process.env.PUBLIC_URL + "/images/blog/blog-md-2.png"}
              writter="John Smith"
              date="November 18, 2022"
              title="Aenean auctor porta sodales. Suspendisse fringilla neque."
            />
          </div>
          <div className="col-lg-4 col-md-6">
            <BlogCardGama
              thumbImage={process.env.PUBLIC_URL + "/images/blog/blog-md-3.png"}
              writter="John Smith"
              date="November 19, 2022"
              title="Variustempor convallis, mi ligula an suscipit nunc."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogArea;
