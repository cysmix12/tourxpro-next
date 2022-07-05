import { useContext } from 'react';

import Pagination from '../../../common/Pagination';
import BlogCardGama from '../BlogGrid/BlogCardGama';
import SearchWidget from '../BlogStandard/SearchWidget';
import BlogWidgetCategories from '../BlogStandard/BlogWidgetCategories';
import BlogNewPostWidget from '../BlogStandard/BlogNewPostWidget';
import TagWidget from '../BlogStandard/TagWidget';
import GallaryWidget from '../BlogStandard/GallaryWidget';
import { MockContext } from '../../../../context';

function BlogSiebarWrap() {
  const { data } = useContext(MockContext);

  return (
    <>
      <div className="blog-sidebar-wrapper pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row g-4">
                {data.blogs.map((blog, i) => (
                  <div key={i} className="col-md-6">
                    <BlogCardGama {...blog} />
                  </div>
                ))}
              </div>
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

export default BlogSiebarWrap;
