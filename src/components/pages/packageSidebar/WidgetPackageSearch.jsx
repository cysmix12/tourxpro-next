import React from "react";

function WidgetPackageSearch() {
  return (
    <>
      <aside className="package-widget widget-search">
        <div className="widget-title">
          <h4>Search Here</h4>
        </div>
        <div className="widget-body">
          <form
            onSubmit={(e) => e.preventDefault()}
            action="#"
            method="post"
            id="blog-sidebar-search"
          >
            <div className="search-input-group">
              <input type="search" placeholder="Search" />
              <button type="submit">SEARCH</button>
            </div>
          </form>
        </div>
      </aside>
    </>
  );
}

export default WidgetPackageSearch;
