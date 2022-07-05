import { useContext } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation, Pagination } from 'swiper';

import { MockContext } from '../../../context';

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

SwiperCore.use([Navigation, Pagination, EffectFade]);

function UpcomingTour() {
  const { data } = useContext(MockContext);

  const upcommingTour = {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 20,
    loop: true,
    roundLengths: true,
    autoplay: {
      delay: 15000,
    },
    navigation: {
      nextEl: '.testi-next4',
      prevEl: '.testi-prev4',
    },
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <>
      <div className="upcoming-tour-area pt-110 pb-110 chain">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-5 d-flex justify-content-lg-start justify-content-center">
              <div className="section-head-alpha text-lg-start text-center">
                <h2 className="text-white">Upcoming Best Tours</h2>
                <p className="text-white">
                  Duis rutrum nisl urna maecenas vel libero faucibus nisi vene
                  natis hendrerit aid lectus suspendissendt.
                </p>
              </div>
            </div>
            <div className="col-lg-7 d-flex justify-content-lg-end justify-content-center">
              <div className="slider-arrows text-center d-lg-flex flex-row justify-content-center d-none gap-5">
                <div
                  className="testi-prev4"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
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
          <div className="row align-items-center justify-content-center fadeffect">
            <div className="col-lg-12">
              <Swiper className="swiper upcoming-tour" {...upcommingTour}>
                <div className="swiper-wrapper">
                  {data.tours.map((tour, i) => (
                    <SwiperSlide key={i} className="swiper-slide">
                      <PackageCardBeta {...tour} />
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
          <div className="row text-center d-flex justify-content-center">
            <div className="col-md-4">
              <a
                href="destination.html"
                className="button-outlined-primary upcoming-btn mt-50"
              >
                View All Offer
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function PackageCardBeta(props) {
  return (
    <>
      <div className="package-card-beta">
        <div className="package-thumb">
          <a href="package-details.html">
            <img src={` ${props.image}`} alt="package images" />
          </a>
          <p className="card-lavel">
            <i className="bi bi-clock" /> <span>{props.date}</span>
          </p>
        </div>
        <div className="package-card-body">
          <h3 className="p-card-title">
            <Link href={`/package-details`} onClick={scrollTop}>
              {props.title}
            </Link>
          </h3>
          <div className="p-card-bottom">
            <div className="book-btn">
              <Link href={`/package-details`} onClick={scrollTop}>
                <>
                  Book Now <i className="bx bxs-right-arrow-alt" />
                </>
              </Link>
            </div>
            <div className="p-card-info">
              <span>From</span>
              <h6>
                {props.price} <span>Per Person</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UpcomingTour;
