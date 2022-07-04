import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation } from "swiper";
SwiperCore.use([Navigation, Autoplay]);

function TestimonialArea() {
  const testimonialSlider = {
    slidesPerView: 1,
    speed: 2000,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    autoplay: {
      delay: 1500,
    },
    navigation: {
      nextEl: ".testi-next",
      prevEl: ".testi-prev",
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <>
      <div className="testimonial-area testimonial-style-one mt-110">
        <div className="testimonial-shape-group" />
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="section-head-alpha">
                <h2>What Our Client Say About Us</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum. Sed pellentesque at nunc eget consectetur.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="slider-arrows text-center d-lg-flex d-none justify-content-end mb-3">
                <div
                  className="testi-prev custom-swiper-prev"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <i className="bi bi-chevron-left" />
                </div>
                <div
                  className="testi-next custom-swiper-next"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <i className="bi bi-chevron-right" />
                </div>
              </div>
            </div>
          </div>
          <Swiper
            {...testimonialSlider}
            className="swiper testimonial-slider-one position-relative"
          >
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card testimonial-card-alpha">
                  <div className="testimonial-overlay-img">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/reviewer/reviewer.png"
                      }
                      alt="images"
                    />
                  </div>
                  <div className="testimonial-card-top">
                    <div className="qoute-icon">
                      <i className="bx bxs-quote-left" />
                    </div>
                    <div className="testimonial-thumb">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/reviewer/r-sm1.png"
                        }
                        alt="images"
                      />
                    </div>
                    <h3 className="testimonial-count">01</h3>
                  </div>
                  <div className="testimonial-body">
                    <p>
                      Duis rutrum nisl urna. Maecenas vel libero this faucibus
                      nisi venenatis hendrerit a id lectus.P Suspendissendt
                      molestie turpis nec laciniane vehicula volutpat purus.
                    </p>
                    <div className="testimonial-bottom">
                      <div className="reviewer-info">
                        <h4 className="reviewer-name">Shwan Pull</h4>
                        <h6>Traveller</h6>
                      </div>
                      <ul className="testimonial-rating">
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
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card testimonial-card-alpha">
                  <div className="testimonial-overlay-img">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/reviewer/reviewer.png"
                      }
                      alt="images"
                    />
                  </div>
                  <div className="testimonial-card-top">
                    <div className="qoute-icon">
                      <i className="bx bxs-quote-left" />
                    </div>
                    <div className="testimonial-thumb">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/reviewer/r-sm2.png"
                        }
                        alt="images"
                      />
                    </div>
                    <h3 className="testimonial-count">02</h3>
                  </div>
                  <div className="testimonial-body">
                    <p>
                      Duis rutrum nisl urna. Maecenas vel libero this faucibus
                      nisi venenatis hendrerit a id lectus.P Suspendissendt
                      molestie turpis nec laciniane vehicula volutpat purus.
                    </p>
                    <div className="testimonial-bottom">
                      <div className="reviewer-info">
                        <h4 className="reviewer-name">Adam Groff</h4>
                        <h6>Traveller</h6>
                      </div>
                      <ul className="testimonial-rating">
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
              <SwiperSlide className="swiper-slide">
                <div className="testimonial-card testimonial-card-alpha">
                  <div className="testimonial-overlay-img">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/reviewer/reviewer.png"
                      }
                      alt="images"
                    />
                  </div>
                  <div className="testimonial-card-top">
                    <div className="qoute-icon">
                      <i className="bx bxs-quote-left" />
                    </div>
                    <div className="testimonial-thumb">
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/reviewer/r-sm3.png"
                        }
                        alt="images"
                      />
                    </div>
                    <h3 className="testimonial-count">03</h3>
                  </div>
                  <div className="testimonial-body">
                    <p>
                      Duis rutrum nisl urna. Maecenas vel libero this faucibus
                      nisi venenatis hendrerit a id lectus.P Suspendissendt
                      molestie turpis nec laciniane vehicula volutpat purus.
                    </p>
                    <div className="testimonial-bottom">
                      <div className="reviewer-info">
                        <h4 className="reviewer-name">Lilyan Danclark</h4>
                        <h6>Traveller</h6>
                      </div>
                      <ul className="testimonial-rating">
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
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default TestimonialArea;
