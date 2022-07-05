import { useContext } from 'react';

import WidgetPackageOffer from '../packageDetails/WidgetPackageOffer';
import BannerWidget from '../packageSidebar/BannerWidget';
import PackageWidgetCatagory from '../packageSidebar/PackageWidgetCatagory';
import WIdgetDureation from '../packageSidebar/WIdgetDureation';
import WidgetPackageSearch from '../packageSidebar/WidgetPackageSearch';
import PackageCardGamma from './PackageCardGamma';
import Pagination from '../../common/Pagination';
import { MockContext } from '../../../context';

function PackageStandardWrap() {
  const { data } = useContext(MockContext);

  return (
    <>
      <div className="package-standard-wrapper pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {data.tours.map((tour, i) => (
                <PackageCardGamma key={i} {...tour} />
              ))}
              <Pagination />
            </div>
            <div className="col-lg-4">
              <div className="package-sidebar">
                <WidgetPackageSearch />
                <PackageWidgetCatagory />
                <WIdgetDureation />
                <WidgetPackageOffer />
                <BannerWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageStandardWrap;
