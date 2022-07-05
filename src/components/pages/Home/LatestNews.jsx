import { useContext } from 'react';

import BlogCardAlpha from './BlogCardAlpha';
import { MockContext } from '../../../context';

function LatestNews() {
  const { data } = useContext(MockContext);

  return (
    <>
      {/* =============== Blog area start =============== */}
      <div className="blog-area blog-style-one pt-110  ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Latest News</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum. Sed pellentesque at nunc eget consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {data.blogs.map((blog, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <BlogCardAlpha {...blog} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* =============== Blog area end =============== */}
    </>
  );
}

export default LatestNews;
