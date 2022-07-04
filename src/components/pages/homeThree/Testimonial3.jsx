import React from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectFade]);
function Testimonial3() {
  const testimonial3slide = {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    autoplay: {
      delay: 15000,
    },
    navigation: {
      nextEl: ".testi-next4",
      prevEl: ".testi-prev4",
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
      <div className="testimonial-area testimonial-style-three pt-110 pb-110">
        <div className="container-fluid">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-5 col-sm-10">
              <div className="section-head-alpha text-lg-start text-center">
                <h2 className="text-white">Travelers Review</h2>
                <p className="text-white">
                  Duis rutrum nisl urna maecenas vel libero faucibus nisi vene
                  natis hendrerit aid lectus suspendissendt.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-10 d-flex justify-content-end">
              <div className="slider-arrows text-center d-lg-flex flex-row d-none gap-5">
                <div
                  className="testi-prev4"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  {" "}
                  <i className="bi bi-arrow-left" />
                </div>
                <div
                  className="testi-next4"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <i className="bi bi-arrow-right" />
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-12">
              <Swiper
                className="swiper testimonial-slider-three"
                {...testimonial3slide}
              >
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <TestimonialCardBeta
                      image="/images/reviewer/testi31.png"
                      name="Jims Pull"
                      review="Amazing team, effective solutions that resulted in high rated search optimization &amp; catchy branding. Running our tourist &amp; I am very satisfied and have been a customer."
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <TestimonialCardBeta
                      image="/images/reviewer/testi32.png"
                      name="Shwan Pull"
                      review="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
                    />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <TestimonialCardBeta
                      image="/images/reviewer/testi33.png"
                      name="Mixis Pull"
                      review="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy."
                    />
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function TestimonialCardBeta(props) {
  return (
    <>
      <div className="testimonial-card-beta mx-auto">
        <div className="testimonial-quote-icon">
          <img
            src={process.env.PUBLIC_URL + "/images/icons/quote-review.svg"}
            alt="testimonial-img"
            className="img-fluid"
          />
        </div>
        <div className="testimonial-card-body">
          <div className="testimonial-info">
            <div className="reviewr-info">
              <div className="single-thumb">
                <img src={`${process.env.PUBLIC_URL} ${props.image}`} alt="" />
              </div>
              <div className="reviwer-info-cotn">
                <h5 className="reviewer-name">{props.name}</h5>
                <ul className="reviewer-rating gap-2">
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
          <div className="review-texts">
            <p>{props.review} </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Testimonial3;
