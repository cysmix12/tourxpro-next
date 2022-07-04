import React from 'react'
import { Link } from 'react-router-dom'
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectFade]);
function HeroFourArea() {
    const heroslide4 = {
        slidesPerView: 1,
        speed: 1500,
        loop: true,
        spaceBetween: 0,
        centeredSlides: true,
        roundLengths: true,
        effect: 'fade',
        navigation: {
          nextEl: '.hero-next3',
          prevEl: '.hero-prev3',
        },
        
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: ".hero-two-pagination",
          clickable: true,
          renderBullet: function(index, className) {
            return '<span class="' + className + '">' +  0  + (index + 1) + "</span>";
          }
        }
    }
  return (
    <>
     <div className="hero-area hero-style-four">
        <img src={process.env.PUBLIC_URL + "/images/banner/banner-plane.svg"} className="img-fluid banner-plane" alt="hero img" />
        <img src={process.env.PUBLIC_URL +  "/images/banner/banner-star1.svg"} className="banner-star1" alt="hero img" />
        <img src={process.env.PUBLIC_URL + "/images/banner/banner-star2.svg"} className="banner-star2" alt="hero img" />
        <img src={process.env.PUBLIC_URL + "/images/banner/banner-star3.svg"} className="banner-star3" alt="hero img" />
        <div className="hero-main-wrapper position-relative">
          <Swiper className="swiper hero-slider-four" {...heroslide4}>
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide">
                <div className="slider-bg-1">
                  <div className="container">
                    <div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
                      <div className="col-xl-7 col-lg-7">
                        <div className="hero4-content">
                          <h1>LET’S YOUR JOURNEY BEGINS WITH TRAVELLAB</h1>
                          <p>A charitable organization or charity is an organization whose primary objectives are philanthr</p>
                          <Link to={"#"} className="button-fill-primary banner3-btn">View Adventures</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide">
                <div className="slider-bg-2">
                  <div className="container">
                    <div className="row d-flex justify-content-lg-start justify-content-center align-items-center">
                      <div className="col-xl-7 col-lg-7">
                        <div className="hero4-content">
                          <h1>ENJOY YOUR HOLIDAYS WITH TRAVELLAB</h1>
                          <p>A charitable organization or charity is an organization whose primary objectives are philanthr</p>
                          <Link to={"#"} className="button-fill-primary banner3-btn">View Adventures</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="slider-arrows text-center d-lg-flex flex-column d-none gap-5">
            <div className="hero-prev3" tabIndex={0} role="button" aria-label="Previous slide"> <i className="bi bi-arrow-left" /></div>
            <div className="hero-next3" tabIndex={0} role="button" aria-label="Next slide"><i className="bi bi-arrow-right" /></div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default HeroFourArea