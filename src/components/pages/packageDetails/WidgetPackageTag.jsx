import React from "react";
import { Link } from "react-router-dom";

function WidgetPackageTag() {
  return (
    <>
      <aside className="package-widget-style-2 widget-tag-cloud mt-30">
        <div className="widget-title text-center">
          <h4>Package Tag</h4>
        </div>
        <div className="tag-cloud widget-body">
          <Link to={"#"}>Adventure</Link>
          <Link to={"#"}>Trip</Link>
          <Link to={"#"}>Guided</Link>
          <Link to={"#"}>Historical</Link>
          <Link to={"#"}>Road Trips</Link>
          <Link to={"#"}>Tourist</Link>
          <Link to={"#"}>Weekend</Link>
          <Link to={"#"}>Hill</Link>
        </div>
      </aside>
    </>
  );
}

export default WidgetPackageTag;
