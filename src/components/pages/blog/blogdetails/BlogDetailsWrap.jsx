import React from "react";
import BlogNewPostWidget from "../BlogStandard/BlogNewPostWidget";
import BlogWidgetCategories from "../BlogStandard/BlogWidgetCategories";
import GallaryWidget from "../BlogStandard/GallaryWidget";
import SearchWidget from "../BlogStandard/SearchWidget";
import TagWidget from "../BlogStandard/TagWidget";
import BlogDetailsLeft from "./BlogDetailsLeft";


function BlogDetailsWrap() {
  return (
    <>
      <div className="blog-details-wrapper pt-110">
        <div className="container">
          <div className="row">
            <BlogDetailsLeft />
            <div className="col-lg-4">
              <div className="blog-sidebar">
                <SearchWidget />
                <BlogWidgetCategories />
                <BlogNewPostWidget />
                <TagWidget />
                <GallaryWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetailsWrap;
