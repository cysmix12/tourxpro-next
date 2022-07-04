import React from 'react'
import { Link } from 'react-router-dom'
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
const scrollTop = ()=>{window.scrollTo({top: 0, behavior: "smooth"})}
// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectFade]);
function UpcomingTour() {

    const upcommingTour = {
        slidesPerView: 1,
    speed: 1000,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    autoplay: {
      delay: 15000
    },
    navigation: {
      nextEl: '.testi-next4',
      prevEl: '.testi-prev4',
    },
    breakpoints: {
      480:{
        slidesPerView: 1
      },
      576:{
        slidesPerView: 2
      },
      992:{ 
        slidesPerView: 2
      },
      1200:{
        slidesPerView: 3
      },
      1400:{
        slidesPerView: 3
      },
     
    }
    }
  return (
    <>
     <div className="upcoming-tour-area pt-110 pb-110 chain">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-5 d-flex justify-content-lg-start justify-content-center">
              <div className="section-head-alpha text-lg-start text-center">
                <h2 className="text-white">Upcoming Best Tours</h2>
                <p className="text-white">Duis rutrum nisl urna maecenas vel libero faucibus nisi vene natis hendrerit aid lectus suspendissendt.</p>
              </div>
            </div>
            <div className="col-lg-7 d-flex justify-content-lg-end justify-content-center">
              <div className="slider-arrows text-center d-lg-flex flex-row justify-content-center d-none gap-5">
                <div className="testi-prev4" tabIndex={0} role="button" aria-label="Previous slide"><i className="bi bi-arrow-left" /></div>
                <div className="testi-next4" tabIndex={0} role="button" aria-label="Next slide"><i className="bi bi-arrow-right" /></div>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center fadeffect">
            <div className="col-lg-12">
              <Swiper className="swiper  upcoming-tour" {...upcommingTour}>
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                  <PackageCardBeta  image="/images/package/best-s1.png" time="8 Day &amp; 9 night" title="Sed ultricies sapien arcu, sed cong
                            feugiat sapien dignissim" price="$98.00" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                  <PackageCardBeta  image="/images/package/best-s2.png" time="4 Day &amp; 4 night" title="varius condimentum consequat frin
                            Aenean." price="$28.00" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                  <PackageCardBeta  image="/images/package/best-s3.png" time="1 Day &amp; 2 night" title="Praesent sed elit mi. In risus
                            nullaam ultricies sapien" price="$17.00" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                  <PackageCardBeta  image="/images/package/best-s4.png" time="2 Day &amp; 3 night" title="Sed ultricies sapien arcu, sed cong
                            feugiat sapien dignissim." price="$77.00" />
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <PackageCardBeta  image="/images/package/best-s5.png" time="4 Day &amp; 3 night" title="Pellentesque habitant morbi malesua
                            tristique senectus." price="$67.00" />
                    
                  </SwiperSlide>
                </div>
              </Swiper>
            </div>
          </div>
          <div className="row text-center d-flex justify-content-center">
            <div className="col-md-4">
              <a href="destination.html" className="button-outlined-primary upcoming-btn mt-50">View All Offer</a>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}
function PackageCardBeta(props){
    return(
        <>
        <div className="package-card-beta">
                      <div className="package-thumb">
                        <a href="package-details.html"><img src={`${process.env.PUBLIC_URL} ${props.image}`} alt="package images" /></a>
                        <p className="card-lavel">
                          <i className="bi bi-clock" /> <span>{props.time}</span>
                        </p>
                      </div>
                      <div className="package-card-body">
                        <h3 className="p-card-title"><Link to={`${process.env.PUBLIC_URL}/package-details`} onClick={scrollTop}>{props.title}</Link></h3>
                        <div className="p-card-bottom">
                          <div className="book-btn">
                            <Link to={`${process.env.PUBLIC_URL}/package-details`} onClick={scrollTop}>Book Now <i className="bx bxs-right-arrow-alt" /></Link>
                          </div>
                          <div className="p-card-info">
                            <span>From</span>
                            <h6>{props.price} <span>Per Person</span></h6>
                          </div>
                        </div>
                      </div>
                    </div>
        </>
    )
}
export default UpcomingTour