import { useContext } from 'react';
import Link from 'next/link';

import PackageCardAlpha from '../packageSidebar/PackageCardAlpha';
import { MockContext } from '../../../context';

function Packages() {
  const { data } = useContext(MockContext);

  const scrollTop = () => window.scrollTo({ topo: 0, behavior: 'smooth' });

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
            {data.tours.map((tour, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <PackageCardAlpha {...tour} />
              </div>
            ))}
          </div>
          <div className="package-page-btn text-center mt-50">
            <Link
              onClick={scrollTop}
              href={`/package`}
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
