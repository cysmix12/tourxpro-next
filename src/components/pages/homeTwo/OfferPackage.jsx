import React from "react";

import { Link } from "react-router-dom";
import PackageCard from "../packageGrid/PackageCard";

function OfferPackage() {
  const scrollTop = () => window.scrollTo({ top: onabort, behavior: "smooth" });
  return (
    <div className="package-area offer-package-style-one pt-110">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="section-head-gamma">
              <h2>Choose Offer Package</h2>
            </div>
          </div>
          <div className="offer-switch-button">
            <ul
              className="nav nav-pills justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-offer1"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-offer-tab1"
                  type="button"
                  role="tab"
                  aria-controls="pills-offer-tab1"
                  aria-selected="true"
                >
                  10%
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-offer2"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-offer-tab2"
                  type="button"
                  role="tab"
                  aria-controls="pills-offer-tab2"
                  aria-selected="false"
                >
                  30%
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-offer3"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-offer-tab3"
                  type="button"
                  role="tab"
                  aria-controls="pills-offer-tab3"
                  aria-selected="false"
                >
                  20%
                </button>
              </li>
            </ul>
          </div>
          <div className="offer-single-tabs">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-offer-tab1"
                role="tabpanel"
                aria-labelledby="pills-offer1"
              >
                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <PackageCard
                      image={
                        process.env.PUBLIC_URL + "/images/package/p-alpha1.png"
                      }
                      title="Etiam placerat dictum consequat an pellentesque."
                      date=" 5 Day & 6 Night"
                      price="$79.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 ">
                    <PackageCard
                      image={
                        process.env.PUBLIC_URL + "/images/package/p-alpha2.png"
                      }
                      title="Varius condimentum consequat frin aenean pretium."
                      date=" 3 Day & 4 Night"
                      price="$82.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <PackageCard
                      image={
                        process.env.PUBLIC_URL + "/images/package/p-alpha3.png"
                      }
                      title="Varius condimentum consequat frin aenean pretium."
                      date=" 3 Day & 4 Night"
                      price="$82.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <PackageCard
                      image={
                        process.env.PUBLIC_URL + "/images/package/p-alpha4.png"
                      }
                      title="Praesent sed elit mi. In risus nullaam efficitur."
                      date=" 4 Day & 4 Night"
                      price="$89.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <PackageCard
                      image={
                        process.env.PUBLIC_URL + "/images/package/p-alpha5.png"
                      }
                      title="Sed ultricies sapien arcu, sed cong feugiat."
                      date=" 5 Day & 6 Night"
                      price="$189.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <PackageCard
                      image={
                        process.env.PUBLIC_URL + "/images/package/p-alpha6.png"
                      }
                      title="Pellentesque habitant morbi malesua tristique."
                      date="4 Day & 3 Night"
                      price="$129.00"
                    />
                  </div>
                </div>
                <div className="package-page-btn text-center mt-50">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/package`}
                    className="button-fill-round"
                  >
                    View All Offer
                  </Link>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-offer-tab2"
                role="tabpanel"
                aria-labelledby="pills-offer2"
              >
                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <PackageCard
                      image={
                        process.env.PUBLIC_URL + "/images/package/p-alpha6.png"
                      }
                      title="Pellentesque habitant morbi malesua tristique."
                      date="4 Day & 3 Night"
                      price="$129.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <PackageCard
                      image={
                        process.env.PUBLIC_URL + "/images/package/p-alpha5.png"
                      }
                      title="Sed ultricies sapien arcu, sed cong feugiat."
                      date=" 5 Day & 6 Night"
                      price="$189.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <PackageCard
                      image={
                        process.env.PUBLIC_URL + "/images/package/p-alpha4.png"
                      }
                      title="Praesent sed elit mi. In risus nullaam efficitur."
                      date=" 4 Day & 4 Night"
                      price="$89.00"
                    />
                  </div>
                </div>
                <div className="package-page-btn text-center mt-60">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/package`}
                    className="button-fill-round"
                  >
                    View All Offer
                  </Link>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-offer-tab3"
                role="tabpanel"
                aria-labelledby="pills-offer3"
              >
                <div className="row g-4">
                  <div className="col-lg-4 col-md-6">
                    <PackageCard
                      image={
                        process.env.PUBLIC_URL + "/images/package/p-alpha1.png"
                      }
                      title="Etiam placerat dictum consequat an pellentesque."
                      date=" 5 Day & 6 Night"
                      price="$79.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6 ">
                    <PackageCard
                      image={
                        process.env.PUBLIC_URL + "/images/package/p-alpha2.png"
                      }
                      title="Varius condimentum consequat frin aenean pretium."
                      date=" 3 Day & 4 Night"
                      price="$82.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <PackageCard
                      image={
                        process.env.PUBLIC_URL + "/images/package/p-alpha3.png"
                      }
                      title="Varius condimentum consequat frin aenean pretium."
                      date=" 3 Day & 4 Night"
                      price="$82.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <PackageCard
                      image={
                        process.env.PUBLIC_URL + "/images/package/p-alpha4.png"
                      }
                      title="Praesent sed elit mi. In risus nullaam efficitur."
                      date=" 4 Day & 4 Night"
                      price="$89.00"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <PackageCard
                      image={
                        process.env.PUBLIC_URL + "/images/package/p-alpha5.png"
                      }
                      title="Sed ultricies sapien arcu, sed cong feugiat."
                      date=" 5 Day & 6 Night"
                      price="$189.00"
                    />
                  </div>
                </div>
                <div className="package-page-btn text-center mt-60">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/package`}
                    className="button-fill-round"
                  >
                    View All Offer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfferPackage;
