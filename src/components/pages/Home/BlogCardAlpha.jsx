import React from 'react';
import Link from 'next/link';

function BlogCardAlpha(props) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  return (
    <>
      <div className="blog-card-alpha">
        <div className="blog-thumb">
          <Link onClick={scrollTop} href={`/blog-details`}>
            <img src={props.image} alt="BlogIMG" />
          </Link>
          <div className="blog-lavel">
            <Link href={'#'}>
              <>
                <i className="bi bi-calendar3" /> {props.date}
              </>
            </Link>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-body-top">
            <Link href={'#'} className="blog-writer">
              <>
                <i className="bi bi-person-circle" /> By {props.name}
              </>
            </Link>
            <Link href={'#'} className="blog-comments">
              <>
                <i className="bi bi-chat-dots-fill" /> Comment ({props.comments}
                )
              </>
            </Link>
          </div>
          <h4 className="blog-title">
            <Link onClick={scrollTop} href={`/blog-details`}>
              {props.title}
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
}

export default BlogCardAlpha;
