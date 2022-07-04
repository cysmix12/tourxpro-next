import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { SRLWrapper } from "simple-react-lightbox";

// install Swiper modules
SwiperCore.use([Navigation]);

function GallaryWrapper() {
  const gallarySlideOne = {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    roundLengths: true,
    autoplay: {
      delay: 9000,
    },
    navigation: {
      nextEl: ".gallary-next1",
      prevEl: ".gallary-prev1",
    },

    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  const gallaryslidertwo = {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 24,
    loop: true,
    centeredSlides: true,
    roundLengths: true,
    autoplay: {
      delay: 12000,
    },
    navigation: {
      nextEl: ".gallary-next2",
      prevEl: ".gallary-prev2",
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <>
      <SRLWrapper>
        <div className="gallary-wrapper">
          <div className="container">
            <div className="gallary-group pt-110">
              <div className="gallary-group-header">
                <h4 className="gallary-group-title">Tour Gallery</h4>
                <div className="gallary-arrows text-center d-lg-block d-none">
                  <div
                    className="gallary-button-prev gallary-prev1"
                    tabIndex={0}
                    role="button"
                    aria-label="Previous slide"
                  >
                    <i className="bi bi-chevron-double-left" />
                  </div>
                  <div
                    className="gallary-button-next gallary-next1"
                    tabIndex={0}
                    role="button"
                    aria-label="Next slide"
                  >
                    <i className="bi bi-chevron-double-right" />
                  </div>
                </div>
              </div>
              <div className="gallery-wrapper">
                <div className="row">
                  <Swiper
                    {...gallarySlideOne}
                    className="swiper  gallary-slider"
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-sm1.png"
                            }
                            alt="ImageGallery"
                          />
                          <a
                            href={
                              process.env.PUBLIC_URL +
                              "/images/gallary/tourfullscreen02.png"
                            }
                            className="gallary-item-overlay"
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/gallary/g-sm1.png"
                              }
                              alt="ImageGallery"
                            />
                          </a>
                        </div>
                        <div className="gallary-item">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-sm2.png"
                            }
                            alt="ImageGallery"
                          />
                          <a
                            href={
                              process.env.PUBLIC_URL +
                              "/images/gallary/tourfullscreen07.png"
                            }
                            className="gallary-item-overlay"
                          >
                             <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/gallary/g-sm2.png"
                              }
                              alt="ImageGallery"
                            />
                          </a>
                        </div>
                        <div className="gallary-item">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-11.png"
                            }
                            alt="ImageGallery"
                          />
                          <a
                            href={
                              process.env.PUBLIC_URL +
                              "/images/gallary/tourfullscreen03.png"
                            }
                            className="gallary-item-overlay"
                          >
                            {" "}
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/gallary/g-11.png"
                              }
                              alt="ImageGallery"
                            />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-xl1.png"
                            }
                            alt="ImageGallery"
                          />
                          <a
                            className="gallary-item-overlay"
                            href={
                              process.env.PUBLIC_URL +
                              "/images/gallary/tourfullscreen04.png"
                            }
                          >
                            <img
                              src={
                                process.env.PUBLIC_URL +
                                "/images/gallary/g-xl1.png"
                              }
                              alt="ImageGallery"
                            />
                          </a>
                        </div>
                        <div className="gallary-item">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-12.png"
                            }
                            alt="ImageGallery"
                          />
                          <a
                            href={
                              process.env.PUBLIC_URL +
                              "/images/gallary/tourfullscreen05.png"
                            }
                            className="gallary-item-overlay"
                          >
                             <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-12.png"
                            }
                            alt="ImageGallery"
                          />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-xl2.png"
                            }
                            alt="ImageGallery"
                          />
                          <a
                            href={
                              process.env.PUBLIC_URL +
                              "/images/gallary/tourfullscreen01.png"
                            }
                            className="gallary-item-overlay"
                          >
                               <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-xl2.png"
                            }
                            alt="ImageGallery"
                          />
                          </a>
                        </div>
                        <div className="gallary-item">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-13.png"
                            }
                            alt="ImageGallery"
                          />
                          <a
                            href={
                              process.env.PUBLIC_URL +
                              "/images/gallary/tourfullscreen06.png"
                            }
                            className="gallary-item-overlay"
                          >
                               <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-13.png"
                            }
                            alt="ImageGallery"
                          />
                          </a>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="gallary-group pt-110">
              <div className="gallary-group-header">
                <h4 className="gallary-group-title">Tour Guide Gallery</h4>
                <div className="gallary-arrows text-center d-lg-block d-none">
                  <div
                    className="gallary-button-prev gallary-prev2"
                    tabIndex={0}
                    role="button"
                    aria-label="Previous slide"
                  >
                    <i className="bi bi-chevron-double-left" />
                  </div>
                  <div
                    className="gallary-button-next gallary-next2"
                    tabIndex={0}
                    role="button"
                    aria-label="Next slide"
                  >
                    <i className="bi bi-chevron-double-right" />
                  </div>
                </div>
              </div>
              <div className="gallery-wrapper">
                <div className="row">
                  <Swiper
                    {...gallaryslidertwo}
                    className="swiper gallary-slider2"
                  >
                    <div className="swiper-wrapper">
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-sm3.png"
                            }
                            alt="ImageGallery"
                          />
                          <a
                            href={
                              process.env.PUBLIC_URL +
                              "/images/gallary/tourgideFullimg2.png"
                            }
                            className="gallary-item-overlay"
                          >
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-sm3.png"
                            }
                            alt="ImageGallery"
                          />
                          </a>
                        </div>
                        <div className="gallary-item">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-sm4.png"
                            }
                            alt="ImageGallery"
                          />
                          <a
                            href={
                              process.env.PUBLIC_URL +
                              "/images/gallary/tourgideFullimg4.png"
                            }
                            className="gallary-item-overlay"
                          >
                            <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-sm4.png"
                            }
                            alt="ImageGallery"
                          />
                          </a>
                        </div>
                        <div className="gallary-item">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-16.png"
                            }
                            alt="ImageGallery"
                          />
                          <a
                            href={
                              process.env.PUBLIC_URL +
                              "/images/gallary/tourgideFullimg7.png"
                            }
                            className="gallary-item-overlay"
                          >
                            <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-16.png"
                            }
                            alt="ImageGallery"
                          />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-xl4.png"
                            }
                            alt="ImageGallery"
                          />
                          <a
                            className="gallary-item-overlay"
                            href={
                              process.env.PUBLIC_URL +
                              "/images/gallary/tourgideFullimg5.png"
                            }
                          >
                           <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-xl4.png"
                            }
                            alt="ImageGallery"
                          />
                          </a>
                        </div>
                        <div className="gallary-item">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-15.png"
                            }
                            alt="ImageGallery"
                          />
                          <a
                            href={
                              process.env.PUBLIC_URL +
                              "/images/gallary/tourgideFullimg1.png"
                            }
                            className="gallary-item-overlay"
                          >
                           <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-15.png"
                            }
                            alt="ImageGallery"
                          />
                          </a>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="gallary-item">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-xl3.png"
                            }
                            alt="ImageGallery"
                          />
                          <a
                            href={
                              process.env.PUBLIC_URL +
                              "/images/gallary/tourgideFullimg3.png"
                            }
                            className="gallary-item-overlay"
                          >
                              <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-xl3.png"
                            }
                            alt="ImageGallery"
                          />
                          </a>
                        </div>
                        <div className="gallary-item">
                          <img
                            src={
                              process.env.PUBLIC_URL +
                              "/images/gallary/g-14.png"
                            }
                            alt="ImageGallery"
                          />
                          <a
                            href={
                              process.env.PUBLIC_URL +
                              "/images/gallary/tourgideFullimg6.png"
                            }
                            className="gallary-item-overlay"
                          ><img
                          src={
                            process.env.PUBLIC_URL +
                            "/images/gallary/g-14.png"
                          }
                          alt="ImageGallery"
                        />
                          </a>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}
export default GallaryWrapper;
