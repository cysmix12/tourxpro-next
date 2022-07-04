import React from "react";
import GuideCardAlpha from "./GuideCardAlpha";

function TourGideArea() {
  return (
    <>
      <div className="guide-area guide-style-one pt-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Tour Guide</h2>
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
              <GuideCardAlpha image={process.env.PUBLIC_URL + "/images/guide/guide-md1.png"} name="Marvin McKinney" />
            </div>
            <div className="col-lg-4 col-md-6">
              <GuideCardAlpha image={process.env.PUBLIC_URL + "/images/guide/guide-m2.png"} name="Charlotte Sophia" />
            </div>
            <div className="col-lg-4 col-md-6">
              <GuideCardAlpha image={process.env.PUBLIC_URL + "/images/guide/guide-md3.png"} name="Brooklyn Simmons" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TourGideArea;
