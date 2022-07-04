import React from "react";
import { Link } from "react-router-dom";
import PackageCard from "../packageGrid/PackageCard";


function PackageArea() {
  const scrolltop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="package-area package-style-one pt-110 ">
        <div className="container">
          <div className="row  align-items-center">
            <div className="col-lg-8">
              <div className="section-head-alpha">
                <h2>Popular Tour Package</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum. Sed pellentesque at nunc eget consectetur.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="package-btn text-lg-end">
                <Link
                  to={`${process.env.PUBLIC_URL}/package`}
                  onClick={scrolltop}
                  className="button-fill-primary"
                >
                  View All Tour
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha1.png"}
                date="2 Day &amp; 1 night"
                title="Etiam placerat dictum consequat nullaam an Pellentesque habitant."
                price="$88.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha2.png"}
                date="4 Day &amp; 3 night"
                title="Varius condimentum consequat nullaam frin Aenean pretium risus."
                price="$98.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha3.png"}
                date="6 Day &amp; 5 night"
                title="Praesent sed elit mi nullaam. In risus nullaam efficitur non."
                price="$102.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha4.png"}
                date="5 Day &amp; 4 night"
                title="Sed ultricies sapien arcu, nullaam sed cong feugiat sapien."
                price="$99.50"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha5.png"}
                date="6 Day &amp; 5 night"
                title="Pellentesque habitant morbi malesua tristique senectus."
                price="$120.50"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PackageCard
                image={process.env.PUBLIC_URL + "/images/package/p-alpha6.png"}
                date="3 Day &amp; 4 night"
                title="San francisco golden gate bridge, golden cable & fog."
                price="$110.50"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageArea;
