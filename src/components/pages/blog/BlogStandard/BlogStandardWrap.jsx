import { useContext } from 'react';

import StandardCard from './StandardCard';
import Pagination from '../../../common/Pagination';
import SearchWidget from './SearchWidget';
import BlogWidgetCategories from './BlogWidgetCategories';
import BlogNewPostWidget from './BlogNewPostWidget';
import TagWidget from './TagWidget';
import GallaryWidget from './GallaryWidget';
import { MockContext } from '../../../../context';

function BlogStandardWrap() {
  const { data } = useContext(MockContext);

  return (
    <>
      <div className="blog-sidebar-wrapper pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {data.blogs.map((blog, i) => (
                <StandardCard key={i} {...blog} />
              ))}
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
