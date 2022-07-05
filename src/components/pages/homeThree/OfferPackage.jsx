import { useContext } from 'react';
import Link from 'next/link';

import { MockContext } from '../../../context';

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function OfferPackage() {
  const { data } = useContext(MockContext);

  return (
    <>
      <div className="package-area offer-package-style-one pt-110 pb-110">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-sm-10">
              <div className="section-head-alpha">
                <h2>Last Minute Offers</h2>
                <p>
                  Duis rutrum nisl urna maecenas vel libero faucibus nisi vene
                  natis hendrerit aid lectus suspendissendt.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-10">
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
          <div className="row align-items-center">
            <div className="offer-switch-button2">
              <ul
                className="nav nav-pills mb-3 justify-content-center gap-sm-4 gap-3"
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
                  <div className="row d-flex justify-content-center g-4">
                    {data.tours.map((tour, i) => (
                      <div key={i} className="col-lg-4 col-md-6 fadeffect">
                        <OfferPackageCardBeta {...tour} />
                      </div>
                    ))}
                  </div>
                  <div className="package-page-btn text-center mt-60">
                    <a href="package.html" className="button-fill-round">
                      View All Offer
                    </a>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="pills-offer-tab2"
                  role="tabpanel"
                  aria-labelledby="pills-offer2"
                >
                  <div className="row d-flex justify-content-center g-4">
                    {data.tours.slice(0, 3).map((tour, i) => (
                      <div key={i} className="col-lg-4 col-md-6 fadeffect">
                        <OfferPackageCardBeta {...tour} />
                      </div>
                    ))}
                  </div>
                  <div className="package-page-btn text-center mt-60">
                    <Link
                      href={`/package`}
                      onClick={scrollTop}
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
                  <div className="row d-flex justify-content-center g-4">
                    {data.tours.slice(0, 4).map((tour, i) => (
                      <div key={i} className="col-lg-4 col-md-6 fadeffect">
                        <OfferPackageCardBeta {...tour} />
                      </div>
                    ))}
                  </div>
                  <div className="package-page-btn text-center mt-60">
                    <Link
                      href={`/package`}
                      onClick={scrollTop}
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
    </>
  );
}

function OfferPackageCardBeta(props) {
  return (
    <>
      <div className="package-card-beta">
        <div className="package-thumb">
          <Link href={`/package-details`} onClick={scrollTop}>
            <img src={` ${props.image}`} alt="" />
          </Link>
          <p className="card-lavel">
            <i className="bi bi-clock" /> <span>{props.date}</span>
          </p>
        </div>
        <div className="package-card-body">
          <h3 className="p-card-title">
            <Link href={`/package-details`} onClick={scrollTop}>
              {props.title}
            </Link>
          </h3>
          <div className="p-card-bottom">
            <div className="book-btn">
              <Link href={`/package-details`} onClick={scrollTop}>
                <>
                  Book Now <i className="bx bxs-right-arrow-alt" />
                </>
              </Link>
            </div>
            <div className="p-card-info">
              <span>From</span>
              <h6>
                {props.price}
                <span>Per Person</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OfferPackage;
