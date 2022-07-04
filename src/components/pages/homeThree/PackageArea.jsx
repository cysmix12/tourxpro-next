import React from "react";
import { Link } from "react-router-dom";

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

function PackageArea() {
  return (
    <>
      <div className="package-area package-style-two pt-110 chain">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-8 col-sm-10">
              <div className="section-head-alpha">
                <h2>Best Selling Tours</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum. Sed pellentesque at nunc eget consectetur.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-10">
              <div className="package-btn text-lg-end">
                <a
                  href="package.html"
                  className="button-fill-primary all-package-btn"
                >
                  View All Tour
                </a>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-4 col-md-6 col-sm-10  fadeffect">
              <PackageCardBeta
                image="/images/package/best-s1.png"
                time="1 Day &amp; 2 night"
                title="Etiam placerat dictum consequat an Pellentesque habitant morbi."
                price="$10.00"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10  fadeffect">
              <PackageCardBeta
                image="/images/package/best-s2.png"
                time="5 Day &amp; 4 night"
                title="varius condimentum consequat frin Aenean pretium risus eu."
                price="$120.00"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 fadeffect">
              <PackageCardBeta
                image="/images/package/best-s5.png"
                time="2 Day &amp; 3 night"
                title="Praesent sed elit mi. In risus nullaam efficitur non elementum eget."
                price="$99.00"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 fadeffect">
              <PackageCardBeta
                image="/images/package/best-s5.png"
                time="5 Day &amp; 6 night"
                title="Sed ultricies sapien arcu, sed cong
                      feugiat sapien dignissim id."
                price="$87.00"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 fadeffect">
              <PackageCardBeta
                image="/images/package/best-s4.png"
                time="3 Day &amp; 2 night"
                title="Pellentesque habitant morbi malesua
                tristique senectus et netus et."
                price="$69.00"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-10 fadeffect">
              <PackageCardBeta
                image="/images/package/best-s6.png"
                time="3 Day &amp; 2 night"
                title="Pellentesque habitant morbi malesua
                tristique senectus et netus et."
                price="$69.00"
              />
            </div>
          </div>
          <div className="package-page-btn text-center mt-60">
            <a href="package.html" className="button-fill-round">
              View All
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function PackageCardBeta(props) {
  return (
    <>
      <div className="package-card-beta">
        <div className="package-thumb">
          <Link
            to={`${process.env.PUBLIC_URL}/package-details`}
            onClick={scrollTop}
          >
            <img
              src={`${process.env.PUBLIC_URL} ${props.image}`}
              alt="package-details img"
            />
          </Link>
          <p className="card-lavel">
            <i className="bi bi-clock" /> <span>{props.time}</span>
          </p>
        </div>
        <div className="package-card-body">
          <h3 className="p-card-title">
            <Link
              to={`${process.env.PUBLIC_URL}/package-details`}
              onClick={scrollTop}
            >
              {props.title}
            </Link>
          </h3>
          <div className="p-card-bottom">
            <div className="book-btn">
              <Link
                to={`${process.env.PUBLIC_URL}/package-details`}
                onClick={scrollTop}
              >
                Book Now <i className="bx bxs-right-arrow-alt" />
              </Link>
            </div>
            <div className="p-card-info">
              <span>From</span>
              <h6>
                {props.price} <span>Per Person</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageArea;
