import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

import DestinationCard2 from './DestinationCard2';
import { MockContext } from '../../../context';

// install Swiper modules
SwiperCore.use([Navigation, Autoplay]);

function DestinationArea() {
  const { data } = useContext(MockContext);

  const destinationSlider = {
    slidesPerView: 1,
    speed: 2000,
    spaceBetween: 24,

    loop: true,
    roundLengths: true,
    autoplay: {
      delay: 1500,
    },
    pagination: {
      el: '.testi-pagination',
      clickable: true,
    },
    breakpoints: {
      480: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <>
      <div className="destination-area destination-style-two pt-110">
        <div className="container">
          <div className="row ">
            <div className="col-lg-12">
              <div className="section-head-gamma">
                <h2>Top Destination</h2>
              </div>
            </div>
          </div>
          <Swiper
            {...destinationSlider}
            className="swiper destination-slider-two"
          >
            <div className="">
              {data.destinations.map((destination, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <DestinationCard2 {...destination} />
                  <DestinationCard2 {...destination} />
                </SwiperSlide>
              ))}
            </div>
            <div className="testi-pagination text-center" />
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default DestinationArea;
