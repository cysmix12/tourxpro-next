import React from "react";
import { Link } from "react-router-dom";

function NewsLetterArea() {
  const scrollTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  return (
    <>
      <div className="newslatter-area newslatter-style-two pt-110">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="newslatter-offer-side">
                <div className="newslatter-offer-content">
                  <h2>
                    Get 10% Off On <br />
                    <span>Family &amp; Group</span> Tour
                  </h2>
                  <h6>
                    Sign up to receive the best offers on promotion and coupons.
                    Don’t worry! It’s not Spam
                  </h6>
                  <div className="explore-btn">
                    <Link
                      onClick={scrollTop}
                      to={`${process.env.PUBLIC_URL}/package`}
                      className="button-fill-round"
                    >
                      Explore Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="newslatter-form-side">
                <div className="newslatter-form-content">
                  <h2>
                    Subscribe Our <br /> <span>Newsletter</span>
                  </h2>
                  <h6>
                    Sign up to receive the best offers on promotion and coupons.
                    Don’t worry! It’s not Spam
                  </h6>
                  <form
                    onSubmit={(e) => e.preventDefault()}
                    action="#"
                    method="post"
                    id="newslatter-forem2"
                  >
                    <div className="newslatter-form-wrap">
                      <input
                        type="text"
                        placeholder="Enter Your Email Here..."
                      />
                      <button type="submit">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsLetterArea;
