import React from "react";
import Breadcrumb from "../../../common/Breadcrumb";
import Pagination from "../../../common/Pagination";
import BlogCardWrap from "./BlogCardWrap";

function BlogGridPage() {
  return (
    <>
      <Breadcrumb name="Blog" />
      <div className="blog-wrapper pt-110">
        <div className="container">
          <BlogCardWrap />
          <Pagination/>
        </div>
      </div>
    </>
  );
}

export default BlogGridPage;
