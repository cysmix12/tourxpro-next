import { useContext } from 'react';
import Link from 'next/link';

import BlogCardGama from '../blog/BlogGrid/BlogCardGama';
import { MockContext } from '../../../context';

function LetesBlogArea() {
  const { data } = useContext(MockContext);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="blog-area blog-style-two pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-head-gamma text-start">
                <h2>Latest Blog</h2>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="blog-btn text-lg-end">
                <Link
                  onClick={scrollTop}
                  href={`/blog`}
                  className="button-fill-round"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {data.blogs.map((blog, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <BlogCardGama {...blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default LetesBlogArea;
