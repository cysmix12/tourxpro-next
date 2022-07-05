import { useContext } from 'react';
import Link from 'next/link';

import PackageCard from '../packageGrid/PackageCard';
import { MockContext } from '../../../context';

function PackageArea() {
  const { data } = useContext(MockContext);

  const scrolltop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

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
                  href={`/package`}
                  onClick={scrolltop}
                  className="button-fill-primary"
                >
                  View All Tour
                </Link>
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
        </div>
      </div>
    </>
  );
}

export default PackageArea;
