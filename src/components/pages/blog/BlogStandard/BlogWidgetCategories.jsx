import React from "react";
import { Link } from "react-router-dom";

function BlogWidgetCategories() {
  return (
    <>
      <aside className="blog-widget widget-categories mt-30">
        <div className="widget-title">
          <h4>Categories</h4>
        </div>
        <ul className="widget-body">
          <li>
            <Link to={"#"}>
              <h6>
                <i className="bi bi-chevron-double-right" /> New York City
              </h6>
              <span>(20)</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <h6>
                <i className="bi bi-chevron-double-right" />
                Adventure Tour
              </h6>
              <span>(08)</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <h6>
                <i className="bi bi-chevron-double-right" /> Couple Tour
              </h6>
              <span>(18)</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <h6>
                <i className="bi bi-chevron-double-right" /> Village Tour
              </h6>
              <span>(21)</span>
            </Link>
          </li>
          <li>
            <Link to={"#"}>
              <h6>
                <i className="bi bi-chevron-double-right" /> Group Tour
              </h6>
              <span>(09)</span>
            </Link>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default BlogWidgetCategories;
