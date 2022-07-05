import { useContext } from 'react';
import BlogCardGama from './BlogCardGama';

import { MockContext } from '../../../../context';

function BlogCardWrap() {
  const { data } = useContext(MockContext);

  return (
    <>
      <div className="row g-4">
        {data.blogs.map((blog, i) => (
          <div key={i} className="col-lg-4 col-md-6">
            <BlogCardGama {...blog} />
          </div>
        ))}
      </div>
    </>
  );
}

export default BlogCardWrap;
