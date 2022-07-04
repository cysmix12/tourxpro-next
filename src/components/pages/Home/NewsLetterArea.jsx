import React from "react";
function NewsLetterArea() {
  return (
    <>
    <div className="newslatter-wrapper mt-110">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="newslatter-side text-center text-lg-start mx-auto mx-lg-0">
              <h2>
                Subscribe Our <span>Newsletter</span>
              </h2>
              <p>
                Sign up to receive the best offers on promotion and coupons.
                Don’t worry! It’s not Spam
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                action="#"
                method="post"
                id="newslatter-form"
              >
                <div className="newslatter-form-input">
                  <input
                    type="text"
                    name="newslatter"
                    id="newslatter-input"
                    placeholder="Email Here..."
                  />
                  <button type="submit" className="newslatter-submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-6 ">
            <div className="achievement-counter-side">
              <div className="row g-4">
                <div className="col-lg-6  col-md-6">
                  <div className="achievement-box-style-one">
                    <div className="achievement-icon">
                      <img src={process.env.PUBLIC_URL + "/images/icons/counter-icon2.svg"} alt="AchivementIMG" />
                    </div>
                    <div className="achievement-box-content">
                      <h2>500+</h2>
                      <h4>Awesome Tour</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  col-md-6">
                  <div className="achievement-box-style-one">
                    <div className="achievement-icon">
                      <img src={process.env.PUBLIC_URL + "/images/icons/counter-icon3.svg"} alt="AchivementIMG" />
                    </div>
                    <div className="achievement-box-content">
                      <h2>300+</h2>
                      <h4>New Destinations</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  col-md-6">
                  <div className="achievement-box-style-one">
                    <div className="achievement-icon">
                      <img src={process.env.PUBLIC_URL + "/images/icons/counter-icon1.svg"} alt="AchivementIMG" />
                    </div>
                    <div className="achievement-box-content">
                      <h2>05+</h2>
                      <h4>Years Experience</h4>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6  col-md-6">
                  <div className="achievement-box-style-one">
                    <div className="achievement-icon">
                      <img src={process.env.PUBLIC_URL + "/images/icons/counter-icon4.svg"} alt="AchivementIMG" />
                    </div>
                    <div className="achievement-box-content">
                      <h2>150+</h2>
                      <h4>Best Mountains</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default NewsLetterArea
