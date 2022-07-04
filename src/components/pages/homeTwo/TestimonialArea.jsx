import React from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Navigation, Autoplay, Pagination]);

function TestimonialArea() {
  const slider = {
    slidesPerView: 1,
    speed: 3000,
    spaceBetween: 24,
    loop: true,
    roundLengths: true,
    autoplay: {
      delay: 1500,
    },
    pagination: {
      el: ".testimonial-pagination",
      clickable: true,
    },
  };
  return (
    <>
      <div className="testimonial-area testimonial-style-two pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head-gamma">
                <h2>What Our Travelar Say</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <Swiper {...slider} className=" testimonial-slider-two">
                <SwiperSlide className="slider-item">
                  <div className="testimonial-card-gamma mx-auto">
                    <div className="testimonial-quote-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/qoute-icon.svg"
                        }
                        alt="testimonialIMG"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-card-body">
                      <div className="review-texts">
                        <p>
                          Duis rutrum nisl urna. Maecenas vel libero faucibus
                          nisi venenatis hendrerit a id lectus. Suspendissendt
                          molestie turpis nec lacinia vehicula. Quisque eget
                          volutpat purus. Aenean blandit magna maximus landi
                          quam facilisis, tempor porttitor elit hendrerit.
                          Aliquam cursus arcu vel bibendum pulvinar. Sed
                          dictumtr blandit interdum. Sed pellentesque at nunc
                          eget consectetur.
                        </p>
                      </div>
                      <div className="testimonial-info">
                        <div className="reviewr-info">
                          <div className="single-thumb">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/reviewer/testti-thumb1.png"
                              }
                              alt="testimonialIMG"
                            />
                          </div>
                          <div className="reviwer-info-cotn">
                            <h5 className="reviewer-name">Jims Pull</h5>
                            <p>Traveller</p>
                          </div>
                        </div>
                        <ul className="reviewer-rating">
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
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider-item">
                  <div className="testimonial-card-gamma mx-auto">
                    <div className="testimonial-quote-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/qoute-icon.svg"
                        }
                        alt="testimonialIMG"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-card-body">
                      <div className="review-texts">
                        <p>
                          Duis rutrum nisl urna. Maecenas vel libero faucibus
                          nisi venenatis hendrerit a id lectus. Suspendissendt
                          molestie turpis nec lacinia vehicula. Quisque eget
                          volutpat purus. Aenean blandit magna maximus landi
                          quam facilisis, tempor porttitor elit hendrerit.
                          Aliquam cursus arcu vel bibendum pulvinar. Sed
                          dictumtr blandit interdum. Sed pellentesque at nunc
                          eget consectetur.
                        </p>
                      </div>
                      <div className="testimonial-info">
                        <div className="reviewr-info">
                          <div className="single-thumb">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/reviewer/testti-thumb2.png"
                              }
                              alt="testimonialIMG"
                            />
                          </div>
                          <div className="reviwer-info-cotn">
                            <h5 className="reviewer-name">Nahiw Pull</h5>
                            <p>Traveller</p>
                          </div>
                        </div>
                        <ul className="reviewer-rating">
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
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider-item">
                  <div className="testimonial-card-gamma mx-auto">
                    <div className="testimonial-quote-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/qoute-icon.svg"
                        }
                        alt="testimonialIMG"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-card-body">
                      <div className="review-texts">
                        <p>
                          Duis rutrum nisl urna. Maecenas vel libero faucibus
                          nisi venenatis hendrerit a id lectus. Suspendissendt
                          molestie turpis nec lacinia vehicula. Quisque eget
                          volutpat purus. Aenean blandit magna maximus landi
                          quam facilisis, tempor porttitor elit hendrerit.
                          Aliquam cursus arcu vel bibendum pulvinar. Sed
                          dictumtr blandit interdum. Sed pellentesque at nunc
                          eget consectetur.
                        </p>
                      </div>
                      <div className="testimonial-info">
                        <div className="reviewr-info">
                          <div className="single-thumb">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/reviewer/testti-thumb1.png"
                              }
                              alt="testimonialIMG"
                            />
                          </div>
                          <div className="reviwer-info-cotn">
                            <h5 className="reviewer-name">Wixtion Pull</h5>
                            <p>Traveller</p>
                          </div>
                        </div>
                        <ul className="reviewer-rating">
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
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider-item">
                  <div className="testimonial-card-gamma mx-auto">
                    <div className="testimonial-quote-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/qoute-icon.svg"
                        }
                        alt="testimonialIMG"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-card-body">
                      <div className="review-texts">
                        <p>
                          Duis rutrum nisl urna. Maecenas vel libero faucibus
                          nisi venenatis hendrerit a id lectus. Suspendissendt
                          molestie turpis nec lacinia vehicula. Quisque eget
                          volutpat purus. Aenean blandit magna maximus landi
                          quam facilisis, tempor porttitor elit hendrerit.
                          Aliquam cursus arcu vel bibendum pulvinar. Sed
                          dictumtr blandit interdum. Sed pellentesque at nunc
                          eget consectetur.
                        </p>
                      </div>
                      <div className="testimonial-info">
                        <div className="reviewr-info">
                          <div className="single-thumb">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/reviewer/testti-thumb1.png"
                              }
                              alt="testimonialIMG"
                            />
                          </div>
                          <div className="reviwer-info-cotn">
                            <h5 className="reviewer-name">Mxixs Pull</h5>
                            <p>Traveller</p>
                          </div>
                        </div>
                        <ul className="reviewer-rating">
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
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider-item">
                  <div className="testimonial-card-gamma mx-auto">
                    <div className="testimonial-quote-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/qoute-icon.svg"
                        }
                        alt="testimonialIMG"
                        className="img-fluid"
                      />
                    </div>
                    <div className="testimonial-card-body">
                      <div className="review-texts">
                        <p>
                          Duis rutrum nisl urna. Maecenas vel libero faucibus
                          nisi venenatis hendrerit a id lectus. Suspendissendt
                          molestie turpis nec lacinia vehicula. Quisque eget
                          volutpat purus. Aenean blandit magna maximus landi
                          quam facilisis, tempor porttitor elit hendrerit.
                          Aliquam cursus arcu vel bibendum pulvinar. Sed
                          dictumtr blandit interdum. Sed pellentesque at nunc
                          eget consectetur.
                        </p>
                      </div>
                      <div className="testimonial-info">
                        <div className="reviewr-info">
                          <div className="single-thumb">
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/reviewer/testti-thumb2.png"
                              }
                              alt="testimonialIMG"
                            />
                          </div>
                          <div className="reviwer-info-cotn">
                            <h5 className="reviewer-name">Shwan Pull</h5>
                            <p>Traveller</p>
                          </div>
                        </div>
                        <ul className="reviewer-rating">
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
                    </div>
                  </div>
                </SwiperSlide>
                <div className="testimonial-pagination text-center" />
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialArea;
