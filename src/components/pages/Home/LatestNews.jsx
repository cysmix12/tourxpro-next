import React from "react";
import BlogCardAlpha from "./BlogCardAlpha";

function LatestNews() {
  return (
    <>
      {/* =============== Blog area start =============== */}
      <div className="blog-area blog-style-one pt-110  ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Latest News</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum. Sed pellentesque at nunc eget consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <BlogCardAlpha
                image={process.env.PUBLIC_URL + "/images/blog/blog-md-1.png"}
                date="16 May 2022"
                name="John Smith"
                comments="5"
                title="Mauris commodo massa vel diamnat feugiat sagittis"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <BlogCardAlpha
                image={process.env.PUBLIC_URL + "/images/blog/blog-md-2.png"}
                date="26 May 2022"
                name="John Maria"
                comments="7"
                title="In tristique ultrices odio quis gravida. Pellentesque"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <BlogCardAlpha
                image={process.env.PUBLIC_URL + "/images/blog/blog-md-3.png"}
                date="17 May 2022"
                name="Willium Crinchi"
                comments="2"
                title="Consequat lacus libero et leo viva ac sapien dui"
              />
            </div>
          </div>
        </div>
      </div>
      {/* =============== Blog area end =============== */}
    </>
  );
}

export default LatestNews;
