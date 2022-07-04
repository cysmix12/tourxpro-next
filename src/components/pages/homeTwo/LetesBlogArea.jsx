import React from "react";
import { Link } from "react-router-dom";
import BlogCardGama from "../blog/BlogGrid/BlogCardGama";

function LetesBlogArea() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
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
                  onClick={scrollTop}
                  to={`${process.env.PUBLIC_URL}/blog`}
                  className="button-fill-round"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <BlogCardGama
                title="Variustempor convallis, mi ligula an suscipit nunc, ornare suscipit."
                thumbImage={
                  process.env.PUBLIC_URL + "/images/blog/blog-md-1.png"
                }
                writter="John Smith"
                date="Novembar 16, 2021"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <BlogCardGama
                title="Mauris commodo massa vel diamnat feugiat sagittis Nunc"
                thumbImage={
                  process.env.PUBLIC_URL + "/images/blog/blog-md-2.png"
                }
                writter="John Dou"
                date="Novembar 18, 2021"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <BlogCardGama
                title="Nulla urna leo, volutpat eu maurisa eget luctus malesuada urna."
                thumbImage={
                  process.env.PUBLIC_URL + "/images/blog/blog-md-3.png"
                }
                writter="Adam Sony"
                date="Novembar 18, 2021"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LetesBlogArea;
