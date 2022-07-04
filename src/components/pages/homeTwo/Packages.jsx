import React from "react";
import { Link } from "react-router-dom";
import PackageCardAlpha from "../packageSidebar/PackageCardAlpha";

function Packages() {
  const scrollTop = () => window.scrollTo({ topo: 0, behavior: "smooth" });
  return (
    <>
      <div className="package-area package-style-two pt-110 ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="section-head-gamma">
                <h2>Choose Your Package</h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <PackageCardAlpha
                image={process.env.PUBLIC_URL + "/images/package/p-alpha1.png"}
                date=" 3 Day & 2 Night"
                price="$79.00"
                title="Etiam placerat dictum an Pellentesque habitant morbi."
              />
            </div>
            <div className="col-lg-4 col-md-6 ">
              <PackageCardAlpha
                image={process.env.PUBLIC_URL + "/images/package/p-alpha2.png"}
                date=" 4 Day & 3 Night"
                price="$89.00"
                title="Varius condimentum frin risus eu Aenean pretium risus."
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PackageCardAlpha
                image={process.env.PUBLIC_URL + "/images/package/p-alpha3.png"}
                date=" 5 Day & 5 Night"
                price="$119.00"
                title="Praesent sed elit mi. In risus nullaam efficitur non eget."
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PackageCardAlpha
                image={process.env.PUBLIC_URL + "/images/package/p-alpha4.png"}
                date=" 2 Day & 3 Night"
                price="$75.00"
                title="Sed ultricies sapien arcu, sed cong sapien dignissim id."
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PackageCardAlpha
                image={process.env.PUBLIC_URL + "/images/package/p-alpha5.png"}
                date=" 7 Day & 8 Night"
                price="$275.00"
                title="Pellentesque morbi malesua tristique senectus et netus et."
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PackageCardAlpha
                image={process.env.PUBLIC_URL + "/images/package/p-alpha6.png"}
                date=" 5 Day & 6 Night"
                price="$155.85"
                title="San francisco golden gate bridge, gate bridge cars & fog."
              />
            </div>
          </div>
          <div className="package-page-btn text-center mt-50">
            <Link
              onClick={scrollTop}
              to={`${process.env.PUBLIC_URL}/package`}
              className="button-fill-round"
            >
              View All
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Packages;
