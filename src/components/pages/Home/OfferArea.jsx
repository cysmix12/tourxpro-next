import React from "react";
import { Link } from "react-router-dom";
import PackageCard from "../packageGrid/PackageCard";

function OfferArea() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="package-area package-style-one pt-110 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Choose Holiday Offer</h2>
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
              <PackageCard
                title="Etiam placerat dictum consequat an pellentesque."
                date="3 Day & 2 Night"
                image={process.env.PUBLIC_URL + "/images/package/p-alpha1.png"}
                price="$91.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PackageCard
                title="Varius condimentum consequat frin pretium risus eu."
                date="4 Day & 3 Night"
                image={process.env.PUBLIC_URL + "/images/package/p-alpha2.png"}
                price="$191.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PackageCard
                title="Sed ultricies sapien arcu, sed cong feugiat sapien."
                date="4 Day & 3 Night"
                image={process.env.PUBLIC_URL + "/images/package/p-alpha3.png"}
                price="$191.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PackageCard
                title="Praesent sed elit mil In risus nullaam efficitur none."
                date="3 Day & 4 Night"
                image={process.env.PUBLIC_URL + "/images/package/p-alpha4.png"}
                price="$181.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PackageCard
                title="Pellentesque habitant morbi malesua tristique senectus."
                date="2 Day & 3 Night"
                image={process.env.PUBLIC_URL + "/images/package/p-alpha5.png"}
                price="$160.00"
              />
            </div>
            <div className="col-lg-4 col-md-6">
              <PackageCard
                title="San francisco golden gate bridge, cable fog."
                date="1 Day & 1 Night"
                image={process.env.PUBLIC_URL + "/images/package/p-alpha6.png"}
                price="$50.00"
              />
            </div>
          </div>
          <div className="row text-center">
            <div className="package-bottom-btn">
              <Link
                to={`${process.env.PUBLIC_URL}/package`}
                onClick={scrollTop}
                className="button-fill-primary"
              >
                View All Offer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferArea;
