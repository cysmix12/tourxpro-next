import React from "react";
import { Link } from "react-router-dom";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectFade]);

function HeroArea() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const HeroSlider = {
    slidesPerView: 1,
    speed: 5000,
    spaceBetween: 0,
    loop: true,
    effect: "fade",

    centeredSlides: true,
    roundLengths: true,
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 700,
    },
    navigation: {
      nextEl: ".hero-next",
      prevEl: ".hero-prev",
    },
    pagination: {
      el: ".hero-pagination",
      type: "custom",
      clickable: true,
      renderCustom: function (swiper, current, total) {
        function numberAppend(d) {
          return d < 10 ? "0" + d.toString() : d.toString();
        }
        return numberAppend(current);
      },
    },
  };

  return (
    <>
      <div className="hero-area hero-style-one overflow-hidden">
        <div className="container-fluid p-0">
          <Swiper {...HeroSlider} className="swiper hero-slider-one">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="hero-single-slide">
                  <div className="hero-highlighted-bg">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/banner/bg-highlight1.png"
                      }
                      alt="images"
                    />
                  </div>
                  <div className="hero-content-bg">
                    <div className="hero-content position-relative">
                      <h2 className="hero-title">
                        Travel &amp; <span>Adventure</span>
                      </h2>
                      <p>
                        Sed convallis sit amet leo quis feugiat. Nunc interdum
                        mollis facilisis. feugi Donec id the urna aliquet,
                        suscipit turpis ut Donec id urna aliquet, suscipit
                        turpis ut, facilisis purus.Sed convallis sit amet leo
                        quis .
                      </p>
                      <div className="hero-btns">
                        <Link
                          to={`${process.env.PUBLIC_URL}/package`}
                          onClick={scrollTop}
                          className="button-fill-primary"
                        >
                          View Adventure
                        </Link>
                        <Link
                          to={`${process.env.PUBLIC_URL}/package`}
                          onClick={scrollTop}
                          className="button-outlined-primary"
                        >
                          Take A Tour
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="hero-single-slide">
                  <div className="hero-highlighted-bg">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/banner/bg-highlight2.png"
                      }
                      alt="images"
                    />
                  </div>
                  <div className="hero-content-bg">
                    <div className="hero-content position-relative">
                      <h2 className="hero-title">
                        {" "}
                        Move The <span>Earth</span>
                      </h2>
                      <p>
                        Sed convallis sit amet leo quis feugiat. Nunc interdum
                        mollis facilisis. feugi Donec id the urna aliquet,
                        suscipit turpis ut Donec id urna aliquet, suscipit
                        turpis ut, facilisis purus.Sed convallis sit amet leo
                        quis .
                      </p>
                      <div className="hero-btns">
                        <Link
                          to={`${process.env.PUBLIC_URL}/package`}
                          onClick={scrollTop}
                          className="button-fill-primary"
                        >
                          View Adventure
                        </Link>
                        <Link
                          to={`${process.env.PUBLIC_URL}/package`}
                          onClick={scrollTop}
                          className="button-outlined-primary"
                        >
                          Take A Tour
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="hero-single-slide">
                  <div className="hero-highlighted-bg">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/banner/bg-highlight3.png"
                      }
                      alt="images"
                    />
                  </div>
                  <div className="hero-content-bg">
                    <div className="hero-content position-relative">
                      <h2 className="hero-title">
                        Travel &amp; <span>Adventure</span>
                      </h2>
                      <p>
                        Sed convallis sit amet leo quis feugiat. Nunc interdum
                        mollis facilisis. feugi Donec id the urna aliquet,
                        suscipit turpis ut Donec id urna aliquet, suscipit
                        turpis ut, facilisis purus.Sed convallis sit amet leo
                        quis .
                      </p>
                      <div className="hero-btns">
                        <Link
                          to={`${process.env.PUBLIC_URL}/package`}
                          onClick={scrollTop}
                          className="button-fill-primary"
                        >
                          View Adventure
                        </Link>
                        <Link
                          to={`${process.env.PUBLIC_URL}/package`}
                          onClick={scrollTop}
                          className="button-outlined-primary"
                        >
                          Take A Tour
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
        <div className="slider-arrows text-center d-lg-flex d-none">
          <div
            className="hero-prev"
            tabIndex={0}
            role="button"
            aria-label="Previous slide"
          >
            {" "}
            <i className="bi bi-arrow-left" /> Prev{" "}
          </div>
          <div
            className="hero-next"
            tabIndex={0}
            role="button"
            aria-label="Next slide"
          >
            Next <i className="bi bi-arrow-right" />
          </div>
        </div>
        <div className="hero-pagination d-block w-auto"></div>
      </div>
    </>
  );
}

export default HeroArea;
