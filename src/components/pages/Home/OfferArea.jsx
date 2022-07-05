import { useContext } from 'react';
import Link from 'next/link';

import PackageCard from '../packageGrid/PackageCard';
import { MockContext } from '../../../context';

function OfferArea() {
  const { data } = useContext(MockContext);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

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
            {data.tours.map((tour, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <PackageCard {...tour} />
              </div>
            ))}
          </div>
          <div className="row text-center">
            <div className="package-bottom-btn">
              <Link
                href={`/package`}
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
