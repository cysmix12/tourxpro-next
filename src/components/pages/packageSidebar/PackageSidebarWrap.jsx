import { useContext } from 'react';

import WidgetPackageOffer from '../packageDetails/WidgetPackageOffer';
import PackageCardAlpha from './PackageCardAlpha';
import PackageWidgetCatagory from './PackageWidgetCatagory';
import WIdgetDureation from './WIdgetDureation';
import WidgetPackageSearch from './WidgetPackageSearch';
import Paginnation from '../../common/Pagination';
import BannerWidget from './BannerWidget';
import { MockContext } from '../../../context';

function PackageSidebarWrap() {
  const { data } = useContext(MockContext);

  return (
    <>
      <div className="package-sidebar-wrapper pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row g-4">
                {data.tours.map((tour, i) => (
                  <div key={i} className="col-md-6">
                    <PackageCardAlpha {...tour} />
                  </div>
                ))}
                <Paginnation />
              </div>
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

export default PackageSidebarWrap;
