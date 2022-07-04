import React from "react";
import { Link } from "react-router-dom";

function BlogCardGama(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="blog-card-gamma">
        <div className="blog-thumb">
          <Link to={`${process.env.PUBLIC_URL}/blog-details`}>
            <img src={props.thumbImage} alt="BlogIMG" />
          </Link>
          <div className="blog-lavel">
            <Link to={"#"}>Tourist</Link>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-body-top">
            <Link to={"#"} className="blog-writer">
              <i className="bi bi-person-circle" /> {props.writter}
            </Link>
            <Link to={"#"} className="blog-comments">
              <i className="bi bi-calendar3" />
              {props.date}
            </Link>
          </div>
          <h4 className="blog-title">
            <Link
              onClick={scrollTop}
              to={`${process.env.PUBLIC_URL}/blog-details`}
            >
              {props.title}
            </Link>
          </h4>
        </div>
      </div>
    </>
  );
}

export default BlogCardGama;
