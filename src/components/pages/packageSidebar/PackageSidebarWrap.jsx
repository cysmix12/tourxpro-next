import React from "react";

import WidgetPackageOffer from "../packageDetails/WidgetPackageOffer";
import PackageCardAlpha from "./PackageCardAlpha";
import PackageWidgetCatagory from "./PackageWidgetCatagory";
import WIdgetDureation from "./WIdgetDureation";
import WidgetPackageSearch from "./WidgetPackageSearch";
import Paginnation from "../../common/Pagination";
import BannerWidget from "./BannerWidget";

function PackageSidebarWrap() {

  return (
    <>
      <div className="package-sidebar-wrapper pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row g-4">
                <div className="col-md-6">
                  <PackageCardAlpha
                    image={process.env.PUBLIC_URL + "/images/package/p-alpha1.png"}
                    date=" 3 Day & 2 Night"
                    title="Pellentesque habitant morbi malesua tristique senectus et netus et."
                    price="$67.00"
                  />
                </div>
                <div className="col-md-6">
                  <PackageCardAlpha
                    image={process.env.PUBLIC_URL + "/images/package/p-alpha2.png"}
                    date=" 3 Day & 3 Night"
                    title="San francisco golden gate bridge, cable cars & fog."
                    price="$91.00"
                  />
                </div>
                <div className="col-md-6">
                  <PackageCardAlpha
                    image={process.env.PUBLIC_URL + "/images/package/p-alpha3.png"}
                    date=" 2 Day & 3 Night"
                    title="Etiam placerat dictum consequat an pellentesque habitant morbi."
                    price="$51.00"
                  />
                </div>
                <div className="col-md-6">
                  <PackageCardAlpha
                    image={process.env.PUBLIC_URL + "/images/package/p-alpha4.png"}
                    date=" 3 Day & 3 Night"
                    title="Etiam placerat dictum consequat an pellentesque habitant morbi."
                    price="$81.00"
                  />
                </div>
                <div className="col-md-6">
                  <PackageCardAlpha
                    image={process.env.PUBLIC_URL + "/images/package/p-alpha5.png"}
                    date=" 4 Day & 3 Night"
                    title="Pellentesque habitant morbi malesua tristique senectus et netus et."
                    price="$71.00"
                  />
                </div>
                <div className="col-md-6">
                  <PackageCardAlpha
                    image={process.env.PUBLIC_URL + "/images/package/p-alpha6.png"}
                    date=" 2 Day & 3 Night"
                    title="Etiam placerat dictum consequat an pellentesque habitant morbi."
                    price="$61.00"
                  />
                </div>
                <div className="col-md-6">
                  <PackageCardAlpha
                    image={process.env.PUBLIC_URL + "/images/package/p-alpha1.png"}
                    date=" 2 Day & 3 Night"
                    title="San francisco golden gate bridge, cable cars & fog."
                    price="$61.00"
                  />
                </div>
                <div className="col-md-6">
                  <PackageCardAlpha
                    image={process.env.PUBLIC_URL + "/images/package/p-alpha3.png"}
                    date=" 2 Day & 3 Night"
                    title="Pellentesque habitant morbi malesua tristique senectus et netus et."
                    price="$61.00"
                  />
                </div>
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
