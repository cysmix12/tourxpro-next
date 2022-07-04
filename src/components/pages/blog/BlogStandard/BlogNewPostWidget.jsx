import React from 'react';
import Link from 'next/link';

function BlogNewPostWidget() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <aside className="blog-widget widget-recent-entries-custom mt-30">
        <div className="widget-title">
          <h4>New Post</h4>
        </div>
        <ul className="widget-body">
          <li className="clearfix">
            <div className="wi">
              <Link onClick={scrollTop} href={`/blog-details`}>
                <img
                  src={'/images/blog/blog-thumb-sm1.png'}
                  alt="BlogStandardIMG"
                />
              </Link>
            </div>
            <div className="wb">
              <h6>
                <Link onClick={scrollTop} href={`/blog-details`}>
                  Map where your photos were taken and discover local points.
                </Link>
              </h6>
              <div className="wb-info">
                <span className="post-date">
                  <i className="bi bi-person-circle" /> By John Smith
                </span>
                <span className="post-date">
                  <i className="bi bi-calendar3" /> May 8, 2016
                </span>
              </div>
            </div>
          </li>
          <li className="clearfix">
            <div className="wi">
              <Link onClick={scrollTop} href={`/blog-details`}>
                <img
                  src={'/images/blog/blog-thumb-sm2.png'}
                  alt="BlogStandardIMG"
                />
              </Link>
            </div>
            <div className="wb">
              <h6>
                <Link onClick={scrollTop} href={`/blog-details`}>
                  San francisco golden gate bridge, cable cars &amp; fog.
                </Link>
              </h6>
              <div className="wb-info">
                <span className="post-date">
                  <i className="bi bi-person-circle" /> By John Smith
                </span>
                <span className="post-date">
                  <i className="bi bi-calendar3" /> May 8, 2016
                </span>
              </div>
            </div>
          </li>
          <li className="clearfix">
            <div className="wi">
              <Link onClick={scrollTop} href={`/blog-details`}>
                <img
                  src={'/images/blog/blog-thumb-sm3.png'}
                  alt="BlogStandardIMG"
                />
              </Link>
            </div>
            <div className="wb">
              <h6>
                <Link onClick={scrollTop} href={`/blog-details`}>
                  Vestibulum luctus hendrerit verba neque, et blandit.
                </Link>
              </h6>
              <div className="wb-info">
                <span className="post-date">
                  <i className="bi bi-person-circle" /> By John Smith
                </span>
                <span className="post-date">
                  <i className="bi bi-calendar3" /> May 8, 2016
                </span>
              </div>
            </div>
          </li>
          <li className="clearfix">
            <div className="wi">
              <Link onClick={scrollTop} href={`/blog-details`}>
                <img
                  src={'/images/blog/blog-thumb-sm4.png'}
                  alt="BlogStandardIMG"
                />
              </Link>
            </div>
            <div className="wb">
              <h6>
                <Link onClick={scrollTop} href={`/blog-details`}>
                  Aenean auctor porta sodales anve suspendisse fringilla.
                </Link>
              </h6>
              <div className="wb-info">
                <span className="post-date">
                  <i className="bi bi-person-circle" /> By John Smith
                </span>
                <span className="post-date">
                  <i className="bi bi-calendar3" /> May 8, 2016
                </span>
              </div>
            </div>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default BlogNewPostWidget;
