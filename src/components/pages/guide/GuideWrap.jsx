import React from "react";
import GuideCardGama from "../../common/GuideCardGama"

function GuideWrap() {
  return (
    <>
      <div className="guide-wrapper  pt-110">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <GuideCardGama image={process.env.PUBLIC_URL + "/images/guide/guide-md4.png"} name="Amam Groff" />
            </div>
            <div className="col-lg-4 col-md-6">
              <GuideCardGama image={process.env.PUBLIC_URL + "/images/guide/guide-md5.png"} name="Thoren Okendhild" />
            </div>
            <div className="col-lg-4 col-md-6">
              <GuideCardGama image={process.env.PUBLIC_URL + "/images/guide/guide-md7.png"} name="Lincoln Anthony" />
            </div>
            <div className="col-lg-4 col-md-6">
              <GuideCardGama image={process.env.PUBLIC_URL + "/images/guide/guide-md8.png"} name="Gambly Mateo" />
            </div>
            <div className="col-lg-4 col-md-6">
              <GuideCardGama image={process.env.PUBLIC_URL + "/images/guide/guide-md9.png"} name="Theodore Aiden" />
            </div>
            <div className="col-lg-4 col-md-6">
              <GuideCardGama image={process.env.PUBLIC_URL + "/images/guide/guide-md10.png"} name="Theon Anthony" />
            </div>
            <div className="col-lg-4 col-md-6">
              <GuideCardGama image={process.env.PUBLIC_URL + "/images/guide/guide-md11.png"} name="Sebastian Mateo" />
            </div>
            <div className="col-lg-4 col-md-6">
              <GuideCardGama image={process.env.PUBLIC_URL + "/images/guide/guide-md12.png"} name="Adrian Eodri" />
            </div>
            <div className="col-lg-4 col-md-6">
              <GuideCardGama image={process.env.PUBLIC_URL + "/images/guide/guide-md15.png"} name="Lotus Anthony" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GuideWrap;
