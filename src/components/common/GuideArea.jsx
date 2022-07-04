import React from "react";
import GuideCardGama from "./GuideCardGama";

function GuideArea() {
  return (
    <>
      <div className="guide-area guide-style-one pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head-gamma">
                <h2>Tour Guide</h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <GuideCardGama
                image={process.env.PUBLIC_URL + "/images/guide/guide-md4.png"}
                name="Amam Groff"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <GuideCardGama
                image={process.env.PUBLIC_URL + "/images/guide/guide-md5.png"}
                name="Sebastian Mateo"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <GuideCardGama
                image={process.env.PUBLIC_URL + "/images/guide/guide-md6.png"}
                name="Theodore Aiden"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuideArea;
