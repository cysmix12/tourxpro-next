import React from "react";
import StandardCard from "./StandardCard";
import Pagination from "../../../common/Pagination";
import SearchWidget from "./SearchWidget";
import BlogWidgetCategories from "./BlogWidgetCategories";
import BlogNewPostWidget from "./BlogNewPostWidget";
import TagWidget from "./TagWidget";
import GallaryWidget from "./GallaryWidget";

function BlogStandardWrap() {
  
  return (
    <>
      <div className="blog-sidebar-wrapper pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <StandardCard
                image={process.env.PUBLIC_URL + "/images/blog/blog-thumb-xl1.png"}
                writter="John Smith"
                date="September 10, 2022"
                title="Sed nec lacinia sapien. Sed pretium lorem at leo Sed necles lacinia sapien. Sed pretium lorem at leo pellentesque."
              />
              <StandardCard
                image={process.env.PUBLIC_URL + "/images/blog/blog-thumb-xl2.png"}
                writter="John Smith"
                date="September 10, 2022"
                title="Donec imperdiet est at ultrices sollicitudin urna metus iaculis odio eget efficitur leo eros id lectus."
              />
              <StandardCard
                image={process.env.PUBLIC_URL + "/images/blog/blog-thumb-xl3.png"}
                writter="John Smith"
                date="September 10, 2022"
                title="Mauris variusnibh nulla. Morbi convallis finibus mi, et tincidunt odio. Donec eu aliquam arcu."
              />
              <StandardCard
                image={process.env.PUBLIC_URL + "/images/blog/blog-thumb-xl4.png"}
                writter="John Smith"
                date="September 10, 2022"
                title="Fusce tristique placerat arcu, eget interdum lacus suscipit et. Aenean placerat efficitur dignissim."
              />
              <Pagination />
            </div>
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

export default BlogStandardWrap;
