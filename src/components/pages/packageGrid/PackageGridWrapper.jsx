import { useContext } from 'react';

import Pagination from '../../common/Pagination';
import PackageCard from './PackageCard';
import { MockContext } from '../../../context';

function PackageGridWrapper() {
  const { data } = useContext(MockContext);

  return (
    <>
      {/* ===============  Package gird area start =============== */}
      <div className="package-wrapper pt-110">
        <div className="container">
          <div className="row g-4">
            {data.tours.map((tour, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <PackageCard {...tour} />
              </div>
            ))}
          </div>
          <Pagination />
        </div>
      </div>
      {/* ===============  Package gird area end =============== */}
    </>
  );
}

export default PackageGridWrapper;
