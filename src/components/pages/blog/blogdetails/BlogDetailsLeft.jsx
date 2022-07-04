import React from "react";
import { Link } from "react-router-dom";

function BlogDetailsLeft() {
  return (
    <>
      <div className="col-lg-8">
        <div className="blog-details">
          <div className="post-header">
            <h2 className="post-title">
              Sed nec lacinia sapien. Sed pretium lorem at leo sed necles
              lacinia sapien. Sed pretium.
            </h2>
            <div className="post-meta">
              <Link to={"#"} className="blog-writer">
                <i className="bi bi-person-circle" /> By John Smith
              </Link>
              <Link to={"#"} className="blog-comments">
                <i className="bi bi-calendar3" /> Novembar 16, 2021
              </Link>
              <Link to={"#"} className="blog-comments">
                <i className="bi bi-chat-left-quote" /> Comment (08)
              </Link>
            </div>
          </div>

          <div className="post-thumb">
            <img
              src={process.env.PUBLIC_URL + "/images/blog/blog-thumb-xl1.png"}
              alt="blogDetailsIMG"
            />
          </div>
          <div className="post-header"></div>
          <div className="post-body">
            <p>
              Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis
              hendrerit a id lectus. Suspendissendt blandit interdum. Sed
              pellentesque at nunc eget consente Duis rutrum nisl urna. Maecenas
              vel libero faucibus nisiteden venenatis hendrerit a id lectus.
              Suspendissendt blandit interdum. Sed pellentesque at nunc eget
              consente andit consectetur.Duis rutrum nisl urna. Maecenas vel
              libero faucibus nisi venenatis hendrerit a id lectus. Maecenas
              Suspendissendt blandit interdum. libero faucibus nisi venenatis
              hendrerit a id lectus. <br /> Suspendissendt blandit interdum. Sed
              pellentesque at nunc consectetur.Duis rutrum nisl urna. Maecenas
              vel libero faucibus nisi venenatis hendrerit a id lectus.
              Suspendissendt blandit interdum. Sed pellentesque at nunc
              consectetur.Duis rutrum nisl urna. Maecenas vel libero faucibus
              nisi venenatis hendrerit a id lectus. Suspendissendt blandit
              interdum. Sed pellentesque at nunc consectetur.Duis rutrum nisl
              urna.
            </p>
            <div className="blog-quote-box-one d-flex flex-column flex-sm-row">
              <div className="quote-icon">
                <img
                  src={process.env.PUBLIC_URL + "/images/icons/blogquote.svg"}
                  alt="blogDetailsIMG"
                />
              </div>
              <blockquote>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis themex hendrerit a id lectus. Suspendissendt blandit
                  interdum. Sed pellentesque at nunc eget consente Duis rutrum
                  nisl urna.
                </p>
              </blockquote>
            </div>
            <p>
              Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis
              hendrerit a id lectus. Suspendissendt blandit interdum. Sed
              pellentesque at nunc eget consente Duis rutrum nisl urna. Maecenas
              vel libero faucibus nisiteden venenatis hendrerit a id lectus.
              Suspendissendt blandit interdum. Sed pellentesque at nunc eget
              consente andit consectetur.Duis rutrum nisl urna. Maecenas vel
              libero faucibus nisi venenatis hendrerit a id lectus. Maecenas
              Suspendissendt blandit interdum.
            </p>
            <div className="post-innner-image">
              <img
                src={process.env.PUBLIC_URL + "/images/blog/blog-d-inner.png"}
                alt="blogDetailsIMG"
              />
            </div>
            <h3 className="sub-title">Things You Can Do to a vibe</h3>
            <p className="mt-1">
              Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis
              hendrerit a id lectus. Suspendissendt blandit interdum. Sed
              pellentesque at nunc eget consente Duis rutrum nisl urna. Maecenas
              vel libero faucibus nisiteden venenatis hendrerit a id lectus.
              Suspendissendt blandit interdum. Sed pellentesque at nunc eget
              consente andit consectetur.Duis rutrum nisl urna. Maecenas vel
              libero faucibus nisi venenatis hendrerit a id lectus. Maecenas
              Suspendissendt blandit interdum.
            </p>
            <div className="blog-quote-box-two text-center">
              <div className="quote-icon">
                <img
                  src={process.env.PUBLIC_URL + "/images/icons/blogquote.svg"}
                  alt="blogDetailsIMG"
                />
              </div>
              <blockquote>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis themex hendrerit a id lectus. Suspendissendt blandit
                  interdum. Sed pellentesque at nunc eget consente Duis rutrum
                  nisl urna.
                </p>
              </blockquote>
            </div>
            <p>
              Duis rutrum nisl urna. Maecenas vel libero faucibus nisi venenatis
              hendrerit a id lectus. Suspendissendt blandit interdum. Sed
              pellentesque at nunc eget consente Duis rutrum nisl urna. Maecenas
              vel libero faucibus nisiteden venenatis hendrerit a id lectus.
              Suspendissendt blandit interdum. Sed pellentesque at nunc eget
              consente andit consectetur.Duis rutrum nisl urna. Maecenas vel
              libero faucibus nisi venenatis hendrerit a id lectus. Maecenas
              Suspendissendt blandit interdum.Suspendissendt blandit interdum.
              Sed pellentesque at nunc eget moris.
            </p>
          </div>
          <div className="post-footer flex-wrap flex-md-nowrap">
            <Link to={"#"} className="post-switcher prev-post">
              <i className="bi bi-chevron-left" /> Previous
            </Link>
            <Link to={"#"} className="next-post-link">
              Hendrerit a id lectus. Suspendissendt blandit interdum. Sed
              pellentesque at nunc eget consente.
            </Link>
            <Link to={"#"} className="post-switcher next-post">
              Next <i className="bi bi-chevron-right" />
            </Link>
          </div>
        </div>
        <div className="comment-section">
          <h4>Comment (05)</h4>
          <ul className="comment-list">
            <li className="single-comment d-flex flex-sm-row flex-column ">
              <div className="commmentor">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/reviewer/commertor2.png"
                  }
                  alt="BlogDetails"
                />
              </div>
              <div className="comment mt-4 mt-sm-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="info">
                    <h6>Silvia Perry</h6>
                    <span>2 April, 2021 10.00PM</span>
                  </div>
                  <ul className="rating d-flex ">
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                  </ul>
                </div>
                <p>
                  Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed
                  lacinia ipsum. Cibuses acUt sed lacinia ipsum. Suspendisse
                </p>
                <div className="reply-btn">
                  <Link to={"#"}>
                    <i className="bi bi-reply-all-fill" /> Reply
                  </Link>
                </div>
              </div>
            </li>
            <li className="single-comment d-flex flex-sm-row flex-column">
              <div className="commmentor">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/reviewer/commertor3.png"
                  }
                  alt="BlogDetails"
                />
              </div>
              <div className="comment mt-4 mt-sm-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="info">
                    <h6>Lilyan Antu</h6>
                    <span>2 April, 2021 10.00PM</span>
                  </div>
                  <ul className="rating d-flex ">
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                  </ul>
                </div>
                <p>
                  Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed
                  lacinia ipsum. Cibuses acUt sed lacinia ipsum. Suspendisse
                </p>
                <div className="reply-btn">
                  <Link to={"#"}>
                    <i className="bi bi-reply-all-fill" /> Reply
                  </Link>
                </div>
              </div>
            </li>
            <li className="single-comment d-flex flex-sm-row flex-column">
              <div className="commmentor">
                <img
                  src={
                    process.env.PUBLIC_URL + "/images/reviewer/commertor1.png"
                  }
                  alt="BlogDetails"
                />
              </div>
              <div className="comment mt-4 mt-sm-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="info">
                    <h6>Adama Grof</h6>
                    <span>2 April, 2021 10.00PM</span>
                  </div>
                  <ul className="rating d-flex ">
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                  </ul>
                </div>
                <p>
                  Morbi dictum pulvinar velit, id mollis lorem faucibus acUt sed
                  lacinia ipsum. Cibuses acUt sed lacinia ipsum. Suspendisse
                </p>
                <div className="reply-btn">
                  <Link to={"#"}>
                    <i className="bi bi-reply-all-fill" /> Reply
                  </Link>
                </div>
              </div>
            </li>
          </ul>
          <div className="comment-btn text-center">
            <Link to={"#"}>View All Comment</Link>
          </div>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          action="#"
          id="comment_form"
          method="post"
        >
          <div className="comment-form">
            <h4>Leave Your Comment</h4>
            <div className="row">
              <div className="col-lg-6">
                <div className="custom-input-group">
                  <input type="text" placeholder="Your Full Name" id="name" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="custom-input-group">
                  <input type="text" placeholder="Your Email" id="email" />
                </div>
              </div>
            </div>
            <div className="custom-input-group">
              <input type="text" placeholder="Tour Type" id="type" />
            </div>
            <div className="custom-input-group">
              <textarea
                cols={20}
                rows={7}
                placeholder="Write Message"
                defaultValue={""}
              />
            </div>
            <ul className="form-rating d-flex">
              <li>
                <i className="bi bi-star" />
              </li>
              <li>
                <i className="bi bi-star" />
              </li>
              <li>
                <i className="bi bi-star" />
              </li>
              <li>
                <i className="bi bi-star" />
              </li>
              <li>
                <i className="bi bi-star" />
              </li>
            </ul>
            <div className="custom-input-group">
              <div className="submite-btn">
                <button type="submit">Send Message</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default BlogDetailsLeft;
