import React from "react";
import { Link } from "react-router-dom";

function TagWidget() {
  
  return (
    <>
      <aside className="blog-widget widget-tag-cloud mt-30">
        <div className="widget-title">
          <h4>Tags</h4>
        </div>
        <div className="tag-cloud widget-body">
          <Link to={"#"}>Adventure</Link>
          <Link to={"#"}>Trip</Link>
          <Link to={"#"}>Guided</Link>
          <Link to={"#"}>Historical</Link>
          <Link to={"#"}>Road Trips</Link>
          <Link to={"#"}>Tourist</Link>
          <Link to={"#"}>Cultural</Link>
          <Link to={"#"}>Natural Tour</Link>
          <Link to={"#"}>Journey</Link>
        </div>
      </aside>
    </>
  );
}

export default TagWidget;
