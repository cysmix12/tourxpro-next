import React from "react";
import WidgetPackageOffer from "../packageDetails/WidgetPackageOffer";
import BannerWidget from "../packageSidebar/BannerWidget";
import PackageWidgetCatagory from "../packageSidebar/PackageWidgetCatagory";
import WIdgetDureation from "../packageSidebar/WIdgetDureation";
import WidgetPackageSearch from "../packageSidebar/WidgetPackageSearch";
import PackageCardGamma from "./PackageCardGamma";
import Pagination from "../../common/Pagination";

function PackageStandardWrap() {
  return (
    <>
      <div className="package-standard-wrapper pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <PackageCardGamma
                image={process.env.PUBLIC_URL + "/images/package/p-gumma1.png"}
                cardLavel="3 Day &amp; 2 night"
                title="Donec imperdiet est at ultrices ande sollicitudin urna
                        metus."
                price=" $82.00"
              />
              <PackageCardGamma
                image={process.env.PUBLIC_URL + "/images/package/p-gumma5.png"}
                cardLavel="3 Day &amp; 2 night"
                title="Aenean auctor porta sodales nullam suspendisse fringilla neque."
                price=" $52.00"
              />
              <PackageCardGamma
                image={process.env.PUBLIC_URL + "/images/package/p-gumma2.png"}
                cardLavel="3 Day &amp; 2 night"
                title="San francisco golden gate bridge, cable cars & fog."
                price=" $55.00"
              />
              <PackageCardGamma
                image={process.env.PUBLIC_URL + "/images/package/p-gumma3.png"}
                cardLavel="3 Day &amp; 3 night"
                title="Duis pretium sit amet nisi a justont malesuada fusce congue."
                price=" $88.00"
              />
              <PackageCardGamma
                image={process.env.PUBLIC_URL + "/images/package/p-gumma4.png"}
                cardLavel="3 Day &amp; 3 night"
                title="Aliquam consequat ac eros vel tellu rutrum. mauris vitae risus."
                price=" $42.00"
              />
              <PackageCardGamma
                image={process.env.PUBLIC_URL + "/images/package/p-gumma5.png"}
                cardLavel="3 Day &amp; 2 night"
                title="Aenean auctor porta sodales nullam suspendisse fringilla neque."
                price=" $52.00"
              />
              <PackageCardGamma
                image={process.env.PUBLIC_URL + "/images/package/p-gumma6.png"}
                cardLavel="3 Day &amp; 2 night"
                title="Auris variusnibh nulla. Morbi themed convallis finibus miodio Donec."
                price=" $72.00"
              />
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
