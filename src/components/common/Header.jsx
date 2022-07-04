import React, { useState, useReducer, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Select from "react-select";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

function Header() {
  const [isSearchActive, setSearchActive] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [isCatagoryActive, setCatagoryActive] = useState(false);
  const [isOpenActive, setOpenActive] = useState(false);

  /*useing reducer to manage the active or inactive menu*/



  useEffect(() => {
    // Add scroll event when the component is loaded
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
  });
  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector('header');
    const scrollTop = window.scrollY;
    scrollTop >= 200 ? header.classList.add('sticky') : header.classList.remove('sticky');
};

  
  const initialState = { activeMenu: "" };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case "homeOne":
        return { activeMenu: "homeOne" };
      case "page":
        return { activeMenu: "page" };
      case "package":
        return { activeMenu: "package" };
      case "blog":
        return { activeMenu: "blog" };
      case "destination":
        return { activeMenu: "destination" };
      default:
        return { activeMenu: " " };
    }
  }

  const handleSearcghBtn = () => {
    if (isSearchActive === false || isSearchActive === 0) {
      setSearchActive(1);
    } else {
      setSearchActive(false);
    }
  };

  const handleCatagorybtn = () => {
    if (isCatagoryActive === false || isCatagoryActive === 0) {
      setCatagoryActive(1);
    } else {
      setCatagoryActive(false);
    }
  };
  const handleOpenBtn = () => {
    if (isOpenActive === false || isOpenActive === 0) {
      setOpenActive(1);
    } else {
      setOpenActive(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      <div
        className={`${"main-searchbar-wrapper"} ${
          isSearchActive === 1 ? "search-active" : ""
        }`}
      >
        <div className="container">
          <div className="multi-main-searchber">
            <div
              onClick={handleSearcghBtn}
              className="main-searchbar-close search-toggle"
            >
              <i className="bi bi-x-lg" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} id="main_searchbar">
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
                            placeholder="Whare are you going?"
                            className="selectbox"
                            onChange={setSelectedOption}
                            defaultValue={selectedOption}
                            options={optionsForDestination}
                            touchUi={false}
                            showGroupWheel={true}
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
                            placeholder="All activities"
                            defaultValue={selectedOption}
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
                            onChange={setSelectedOption}
                            placeholder="Person"
                            defaultValue={selectedOption}
                            options={optionsForPerson}
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
                          <label htmlFor="activity-dropdown">
                            Journey Date
                          </label>
                          <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="main-form-submit">
                    <Link
                      to={`${process.env.PUBLIC_URL}/package`}
                      onClick={scrollTop}
                    >
                      <button type="submit">Find Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        className={`${"category-sidebar-wrapper"} ${
          isCatagoryActive === 1 ? "category-active" : ""
        }`}
      >
        <div className="category-sidebar">
          <div className="category-header d-flex justify-content-between align-items-center">
            <h4>Category</h4>
            <div onClick={handleCatagorybtn} className="category-toggle">
              <i className="bi bi-x-lg" />
            </div>
          </div>
          <div className="row row-cols-lg-3 row-cols-2 gy-5 mt-3">
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                to={`${process.env.PUBLIC_URL}/package`}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate1.svg"}
                    alt="catagoryIMG"
                  />
                </div>
                <h5>Adventure</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                to={`${process.env.PUBLIC_URL}/package`}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate2.svg"}
                    alt="catagoryIMG"
                  />
                </div>
                <h5>Group Tour</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                to={`${process.env.PUBLIC_URL}/package`}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate3.svg"}
                    alt="catagoryIMG"
                  />
                </div>
                <h5>Couple Tour</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                to={`${process.env.PUBLIC_URL}/package`}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate4.svg"}
                    alt="catagoryIMG"
                  />
                </div>
                <h5>Single Tour</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                to={`${process.env.PUBLIC_URL}/package`}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate5.svg"}
                    alt="catagoryIMG"
                  />
                </div>
                <h5>Honeymoon</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                to={`${process.env.PUBLIC_URL}/package`}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate6.svg"}
                    alt="catagoryIMG"
                  />
                </div>
                <h5>Sea Beach</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                to={`${process.env.PUBLIC_URL}/package`}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate7.svg"}
                    alt="catagoryIMG"
                  />
                </div>
                <h5>Mountain Tour</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="topbar-area topbar-style-one">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 align-items-center d-xl-flex d-none">
              <div className="topbar-contact-left">
                <ul className="contact-list">
                  <li>
                    <i className="bi bi-telephone-fill" />
                    <a href="tel:+1-847-555-5555"> +1 763-227-5032</a>
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill" />
                    <a href="mailto:someone@example.com">info@example.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 col-md-6 text-xl-center text-md-start text-center">
              <div className="topbar-ad">
                <Link
                  onClick={scrollTop}
                  to={`${process.env.PUBLIC_URL}/package`}
                >
                  Black Friday Big Offer
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 d-md-flex  d-none align-items-center justify-content-end">
              <ul className="topbar-social-links">
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.facebook.com/"
                  >
                    <i className="bx bxl-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.instagram.com/"
                  >
                    <i className="bx bxl-instagram-alt" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://twitter.com/"
                  >
                    <i className="bx bxl-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.whatsapp.com/"
                  >
                    <i className="bx bxl-whatsapp-square" />
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://www.pinterest.com/"
                  >
                    <i className="bx bxl-pinterest" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header>
        <div className="header-area header-style-one">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 align-items-center d-xl-flex d-lg-block">
                <div className="logo d-flex justify-content-between align-items-center">
                  <Link onClick={scrollTop} to={`${process.env.PUBLIC_URL}/`}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/logo.png"}
                      alt="logo"
                    />
                  </Link>
                  <div className="d-flex align-items-center gap-4">
                    <div className="nav-right d-xl-none">
                      <ul className="nav-actions">
                        <li
                          onClick={handleCatagorybtn}
                          className="category-toggle"
                        >
                          <i className="bx bx-category" />
                        </li>
                        <li
                          className="search-toggle"
                          onClick={handleSearcghBtn}
                        >
                          <i className="bx bx-search-alt" />
                        </li>
                      </ul>
                    </div>
                    <div
                      className="mobile-menu d-flex "
                      onClick={handleOpenBtn}
                    >
                      <Link
                        to={"#"}
                        className={
                          isOpenActive
                            ? "hamburger d-block d-xl-none h-active"
                            : "hamburger d-block d-xl-none"
                        }
                      >
                        <span className="h-top" />
                        <span className="h-middle" />
                        <span className="h-bottom" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 col-md-8 col-sm-6 col-xs-6">
                <nav
                  className={
                    isOpenActive
                      ? "main-nav float-end slidenav"
                      : "main-nav float-end"
                  }
                >
                  <div className="logo d-xl-none text-center">
                    <Link to={"#"}>
                      <img
                        src={process.env.PUBLIC_URL + "/images/logo.png"}
                        alt="catagoryIMG"
                      />
                    </Link>
                  </div>
                  <ul>
                    <li className="has-child-menu"  onClick={() => dispatch({type: 'homeOne'})}>
                      <Link to={"#"} >Home</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className={
                        state.activeMenu ==='homeOne'
                          ? "sub-menu d-block"
                          : "sub-menu d-none"
                      }>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/`}
                          >
                            Home Style 1
                          </Link>
                        </li>
                        <li>
                          <NavLink
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/index2`}
                          >
                            Home Style 2
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/index3`}
                          >
                            Home Style 3
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/index4`}
                          >
                            Home Style 4
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/about`}
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li className="has-child-menu" onClick={()=> dispatch({type: 'destination'})}>
                      <Link to={"#"}>Destination</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className={state.activeMenu === "destination" ? "sub-menu d-block" : "sub-menu d-none"}>
                        <li>
                          <NavLink
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/destination`}
                          >
                            Destination
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/destination-details`}
                          >
                            Destination Details
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu" onClick={()=> dispatch({type: 'package'})}>
                      <Link to={"#"}>Package</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === "package"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <NavLink
                            to={`${process.env.PUBLIC_URL}/package`}
                            onClick={scrollTop}
                          >
                            Package Grid
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/package-sidebar`}
                          >
                            Package Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/package-standard`}
                          >
                            Package Standard
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/package-details`}
                          >
                            Package Details
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu" onClick={()=> dispatch ({type: 'blog'})}>
                      <Link to={"#"}>Blogs</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className={state.activeMenu ==="blog" ?"sub-menu d-block":"sub-menu d-none"}>
                        <li>
                          <NavLink
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog`}
                          >
                            Blog Grid
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-sidebar`}
                          >
                            Blog Sidebar
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-standard`}
                          >
                            Blog Standard
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}
                          >
                            Blog Details
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu" onClick={()=> dispatch ({type: 'page'})}>
                      <Link to={"#"}>Pages</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className={state.activeMenu ==="page"? "sub-menu d-block" : "sub-menu d-none"}>
                        <li>
                          <NavLink
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/guide`}
                          >
                            Guide
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/gallary`}
                          >
                            Gallery
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/faq`}
                          >
                            FAQ
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/error`}
                          >
                            404
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <NavLink
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/contact`}
                      >
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                  <div className="inner-contact-options d-xl-none">
                    <div className="contact-box-inner">
                      <i className="bi bi-telephone-fill" />
                      <Link to="tel:+17632275032">+1 763-227-5032</Link>
                    </div>
                    <div className="contact-box-inner">
                      <i className="bi bi-envelope-fill" />
                      <Link to="mailto:info@example.com">info@example.com</Link>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-xl-2">
                <div className="nav-right float-end d-xl-flex d-none ">
                  <ul className="nav-actions">
                    <li className="category-toggle" onClick={handleCatagorybtn}>
                      <i className="bx bx-category" />
                    </li>
                    <li className="search-toggle" onClick={handleSearcghBtn}>
                      <i className="bx bx-search-alt" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* ===============  header area end =============== */}
    </>
  );
}

export default Header;
