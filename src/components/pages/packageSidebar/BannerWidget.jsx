import React from "react";
import { Link } from "react-router-dom";

function BannerWidget() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <aside className="widget-banner mt-30">
        <Link
          onClick={scrollTop}
          to={`${process.env.PUBLIC_URL}/package-details`}
        >
          <img src={process.env.PUBLIC_URL + "/images/banner/sidebar-banner.png"} alt="PackgerIMG" className="img-fluid" />
        </Link>
      </aside>
    </>
  );
}

export default BannerWidget;
