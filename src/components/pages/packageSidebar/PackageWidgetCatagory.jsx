import React from "react";

function PackageWidgetCatagory() {
  
  return (
    <>
      <aside className="package-widget widget-tour-categoris mt-30">
        <div className="widget-title">
          <h4>Category</h4>
        </div>
        <div className="widget-body">
          <ul>
            <li className="category-check">
              <label className="form-check-label" htmlFor="cate">
                <i className="bi bi-chevron-double-right" /> New York City
              </label>
              <input className="form-check-input" type="checkbox" id="cate" />
            </li>
            <li className="category-check">
              <label className="form-check-label" htmlFor="cate2">
                <i className="bi bi-chevron-double-right" />
                Adventure Tour
              </label>
              <input className="form-check-input" type="checkbox" id="cate2" />
            </li>
            <li className="category-check">
              <label className="form-check-label" htmlFor="cate3">
                <i className="bi bi-chevron-double-right" /> Couple Tour
              </label>
              <input className="form-check-input" type="checkbox" id="cate3" />
            </li>
            <li className="category-check">
              <label className="form-check-label" htmlFor="cate4">
                <i className="bi bi-chevron-double-right" /> Village Tour
              </label>
              <input className="form-check-input" type="checkbox" id="cate4" />
            </li>
            <li className="category-check">
              <label className="form-check-label" htmlFor="cate5">
                <i className="bi bi-chevron-double-right" />
                Group Tour
              </label>
              <input className="form-check-input" type="checkbox" id="cate5" />
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default PackageWidgetCatagory;
