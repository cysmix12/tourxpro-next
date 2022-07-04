import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

function Hero2() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const hero2 = {
    slidesPerView: 1,
    speed: 1500,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    roundLengths: true,

    autoplay: {
      delay: 7000,
    },
    pagination: {
      el: ".hero-two-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
      },
    },
  };
  const optionsForDestination = [
    { value: "1", label: "India" },
        { value: "2", label: "Sri Lanka" },
        { value: "3", label: "Solt Lake" },
        { value: "4", label: " Kolkata" },
        { value: "6", label: " Mohania" },
        { value: "7", label: " Mumbai" },
        { value: "8", label: " New Delhi" },
  ];
  const optionsForTravel = [
    { value: "1", label: "Adventure Tour" },
        { value: "2", label: "Group Tour" },
        { value: "3", label: "Couple Tour" },
        { value: "4", label: "Sea Beach" },
        { value: "5", label: "Mountain Tour" },
  ];
  const optionsForPerson = [
    { value: "1", label: "01" },
    { value: "2", label: "02" },
    { value: "3", label: "03" },
    { value: "4", label: "04" },
    { value: "5", label: "05" },
  ];
  return (
    <>
      <div className="hero-area hero-style-two">
        <div className="container">
          <div className="multi-main-searchber">
            <div className="row g-4">
              <div className="col-lg-10">
                <div className="row gx-0 gy-4">
                  <div className="col-lg-3 col-md-6">
                    <div className="select-box">
                      <div className="searchbox-icons">
                        <i className="bi bi-geo-alt" />
                      </div>
                      <div className="searchbox-input">
                        <label htmlFor="activity-dropdown">Destination</label>
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={optionsForDestination}
                          placeholder="Where are you going?"
                          className="selectbox"
                        ></Select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="select-box">
                      <div className="searchbox-icons">
                        <i className="bi bi-text-paragraph" />
                      </div>
                      <div className="searchbox-input">
                        <label htmlFor="activity-dropdown">Travel Type</label>
                        <Select
                        className="selectbox"
                          defaultValue={selectedOption}
                          placeholder="All activities"
                          onChange={setSelectedOption}
                          options={optionsForTravel}

                        ></Select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="select-box">
                      <div className="searchbox-icons">
                        <i className="bi bi-person-plus" />
                      </div>
                      <div className="searchbox-input">
                        <label htmlFor="activity-dropdown">Person</label>
                        <Select
                        className="selectbox"
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={optionsForPerson}
                          placeholder="Select"
                        ></Select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="select-box">
                      <div className="searchbox-icons">
                        <i className="bi bi-capslock" />
                      </div>
                      <div className="searchbox-input">
                        <label htmlFor="activity-dropdown">Journey Date</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="main-form-submit">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/package`}
                  >
                    <button type="submit">Find Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-main-wrapper position-relative">
          <Swiper {...hero2} className="swiper hero-slider-two">
            <div className="swiper-wrapper">
              <SwiperSlide className="swiper-slide single-hero-slide">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="hero-content">
                        <h5 className="featured-location">
                          <i className="bi bi-geo-alt" /> Mount Dtna, Italy
                        </h5>
                        <h2 className="hero-title">
                          Most
                          <span>Attractive</span> Travel Places
                        </h2>
                        <h3 className="featured-price">
                          $250.00 /<span>Person</span>
                        </h3>
                        <p>
                          Sed convallis sit amet leo quis feugiat. Nunc interdum
                          mollis facilisis. Donec id the urna aliquet, suscipit
                          turpis ut Donec id urna aliquet, suscipit turpis ut,
                          facilisis purus.Sed convallis sit amet leo quis
                          feugiat.
                        </p>
                        <div className="hero-btns">
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/package-sidebar`}
                            className="button-fill-round"
                          >
                            Book Now
                          </Link>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/package-details`}
                            className="button-fill-round"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="hero-image-group">
                        <img
                          src={process.env.PUBLIC_URL + "/images/banner/hero2-image-group.png"}
                          alt="HeroIMG"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide single-hero-slide">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="hero-content">
                        <h5 className="featured-location">
                          <i className="bi bi-geo-alt" /> Mount Dtna, Italy
                        </h5>
                        <div className="hero-title">
                          Travel far enough, you meet <span>YOURSELF.</span>
                        </div>
                        <h3 className="featured-price">
                          $250.00 /<span>Person</span>
                        </h3>
                        <p>
                          Sed convallis sit amet leo quis feugiat. Nunc interdum
                          mollis facilisis. Donec id the urna aliquet, suscipit
                          turpis ut Donec id urna aliquet, suscipit turpis ut,
                          facilisis purus.Sed convallis sit amet leo quis
                          feugiat.
                        </p>
                        <div className="hero-btns">
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/package-details`}
                            className="button-fill-round"
                          >
                            Book Now
                          </Link>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/package-details`}
                            className="button-fill-round"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="hero-image-group">
                        <img
                          src={process.env.PUBLIC_URL + "/images/banner/hero2-image-group2.png"}
                          alt="HeroIMG"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide single-hero-slide">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-6">
                      <div className="hero-content">
                        <h5 className="featured-location">
                          <i className="bi bi-geo-alt" /> Mount Dtna, Italy
                        </h5>
                        <h2 className="hero-title">
                          Most
                          <span>Attractive</span> Travel Places
                        </h2>
                        <h3 className="featured-price">
                          $250.00 /<span>Person</span>
                        </h3>
                        <p>
                          Sed convallis sit amet leo quis feugiat. Nunc interdum
                          mollis facilisis. Donec id the urna aliquet, suscipit
                          turpis ut Donec id urna aliquet, suscipit turpis ut,
                          facilisis purus.Sed convallis sit amet leo quis
                          feugiat.
                        </p>
                        <div className="hero-btns">
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/package-details`}
                            className="button-fill-round"
                          >
                            Book Now
                          </Link>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/package-details`}
                            className="button-fill-round"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="hero-image-group">
                        <img
                          src={process.env.PUBLIC_URL + "/images/banner/hero2-image-group3.png"}
                          alt="HeroIMG"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="hero-two-pagination d-lg-inline-flex flex-column  d-none w-auto"></div>
        </div>
      </div>
    </>
  );
}

export default Hero2;
