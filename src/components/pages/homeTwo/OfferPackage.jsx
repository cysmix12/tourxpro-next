import { useContext } from 'react';
import Link from 'next/link';

import PackageCard from '../packageGrid/PackageCard';
import { MockContext } from '../../../context';

function OfferPackage() {
  const { data } = useContext(MockContext);

  const scrollTop = () => window.scrollTo({ top: onabort, behavior: 'smooth' });

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
                  {data.tours.map((tour, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                      <PackageCard {...tour} />
                    </div>
                  ))}
                </div>
                <div className="package-page-btn text-center mt-50">
                  <Link
                    onClick={scrollTop}
                    href={`/package`}
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
                  {data.tours.slice(0, 2).map((tour, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                      <PackageCard {...tour} />
                    </div>
                  ))}
                </div>
                <div className="package-page-btn text-center mt-60">
                  <Link
                    onClick={scrollTop}
                    href={`/package`}
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
                  {data.tours.slice(0, 4).map((tour, i) => (
                    <div key={i} className="col-lg-4 col-md-6">
                      <PackageCard {...tour} />
                    </div>
                  ))}
                </div>
                <div className="package-page-btn text-center mt-60">
                  <Link
                    onClick={scrollTop}
                    href={`/package`}
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
