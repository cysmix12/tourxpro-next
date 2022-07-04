import React from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

function SocialActivitisArea() {
  const socialSilder = {
    slidesPerView: 3,
    speed: 1000,
    spaceBetween: 24,
    centeredSlides: true,
    loop: true,
    roundLengths: true,
    autoplay: {
      delay: 1500,
    },
    pagination: {
      el: ".testi-pagination",
      clickable: true,
    },
    breakpoints: {
      380: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 4,
        centeredSlides: true,
      },
      1200: {
        slidesPerView: 5,
        centeredSlides: true,
      },
    },
  };
  return (
    <>
      <div className="social-activity-area pt-110">
        <div className="container-fluid p-0">
          <Swiper {...socialSilder} className="swiper social-activity-slider">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="social-card">
                  <div className="social-thumb">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/gallary/social1.png"
                      }
                      alt="SocialIMG"
                    />
                  </div>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="social-overlay"
                  >
                    <i className="bx bxl-facebook" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="social-card">
                  <div className="social-thumb">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/gallary/social2.png"
                      }
                      alt="SocialIMG"
                    />
                  </div>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="social-overlay"
                  >
                    <i className="bx bxl-facebook" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="social-card">
                  <div className="social-thumb">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/gallary/social3.png"
                      }
                      alt="SocialIMG"
                    />
                  </div>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="social-overlay"
                  >
                    <i className="bx bxl-facebook" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="social-card">
                  <div className="social-thumb">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/gallary/social4.png"
                      }
                      alt="SocialIMG"
                    />
                  </div>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="social-overlay"
                  >
                    <i className="bx bxl-facebook" />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="social-card">
                  <div className="social-thumb">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/gallary/social5.png"
                      }
                      alt="SocialIMG"
                    />
                  </div>
                  <a
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="social-overlay"
                  >
                    <i className="bx bxl-facebook" />
                  </a>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default SocialActivitisArea;
