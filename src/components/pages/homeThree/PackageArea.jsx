import { useContext } from 'react';
import Link from 'next/link';

import { MockContext } from '../../../context';

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

function PackageArea() {
  const { data } = useContext(MockContext);

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
            {data.tours.map((tour, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-10  fadeffect">
                <PackageCardBeta {...tour} />
              </div>
            ))}
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
          <Link href={`/package-details`} onClick={scrollTop}>
            <img src={` ${props.image}`} alt="package-details img" />
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
