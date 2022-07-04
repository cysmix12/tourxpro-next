import React from "react";
import { Link } from "react-router-dom";
import WidgetForm from "./WidgetForm";
import WidgetPackageOffer from "./WidgetPackageOffer";
import WidgetPackageTag from "./WidgetPackageTag";
import PackageHeader from "./PackageHeader";
import PackageDetailsTab from "./PackageDetailsTab";

function PackageDetailsWrap() {

  return (
    <>
      <div className="package-details-wrapper pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tour-package-details">
                <PackageHeader />
                <PackageDetailsTab />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="package-sidebar">
                <WidgetForm />
                <WidgetPackageOffer />
                <WidgetPackageTag />
                <aside className="widget-banner mt-30">
                  <Link to={"#"}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/banner/sidebar-banner.png"}
                      alt="PackageIMG"
                      className="img-fluid"
                    />
                  </Link>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageDetailsWrap;
