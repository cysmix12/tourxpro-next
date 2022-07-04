import React, { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";

function HeaderFour() {
  const [searchActive, setSearchActive] = useState(0);
  const [catagoryActive, setCatagoryActive] = useState(0);
  const [userDropdown, setuserDropdown] = useState(0);
  const [mobileSideberMenu, setMobileSideberMenu] = useState(0);
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  /*useing reducer to manage the active or inactive menu*/

  useEffect(() => {
    // Add scroll event when the component is loaded
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });
  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop >= 200
      ? header.classList.add("sticky")
      : header.classList.remove("sticky");
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
  const handleSearhBar = () => {
    if (searchActive === false || searchActive === 0) {
      setSearchActive(1);
    } else {
      setSearchActive(false);
    }
  };
  const handleCatagorybtn = () => {
    if (catagoryActive === false || catagoryActive === 0) {
      setCatagoryActive(1);
    } else {
      setCatagoryActive(false);
    }
  };
  const handleUserDropDown = () => {
    if (userDropdown === false || userDropdown === 0) {
      setuserDropdown(1);
    } else {
      setuserDropdown(false);
    }
  };
  const handleMobileSiderbar = () => {
    if (mobileSideberMenu === false || mobileSideberMenu === 0) {
      setMobileSideberMenu(1);
    } else {
      setMobileSideberMenu(false);
    }
  };
  return (
    <>
      <div
        className={searchActive === 1 ? "mobile-search slide" : "mobile-search"}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-md-11">
              <label>What are you lookking for?</label>
              <input
                type="text"
                placeholder="Search Products, Category, Brand"
              />
            </div>
            <div className="col-1 d-flex justify-content-end align-items-center">
              <div className="search-cross-btn" onClick={handleSearhBar}>
                <i className="bi bi-x" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          catagoryActive === 1
            ? "category-sidebar-wrapper category-active"
            : "category-sidebar-wrapper"
        }
      >
        <div className="category-sidebar">
          <div className="category-header d-flex justify-content-between align-items-center">
            <h4>Category</h4>
            <div className="category-toggle" onClick={handleCatagorybtn}>
              <i className="bi bi-x-lg" />
            </div>
          </div>
          <div className="row row-cols-lg-3 row-cols-2 gy-5 mt-3">
            <div className="col">
              <Link
                className="category-box"
                to={`${process.env.PUBLIC_URL}/package`}
                onClick={scrollTop}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate1.svg"}
                    alt=""
                  />
                </div>
                <h5>Adventure</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                to={`${process.env.PUBLIC_URL}/package`}
                onClick={scrollTop}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate2.svg"}
                    alt=""
                  />
                </div>
                <h5>Group Tour</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                to={`${process.env.PUBLIC_URL}/package`}
                onClick={scrollTop}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate3.svg"}
                    alt=""
                  />
                </div>
                <h5>Couple Tour</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                to={`${process.env.PUBLIC_URL}/package`}
                onClick={scrollTop}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate4.svg"}
                    alt=""
                  />
                </div>
                <h5>Single Tour</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                to={`${process.env.PUBLIC_URL}/package`}
                onClick={scrollTop}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate5.svg"}
                    alt=""
                  />
                </div>
                <h5>Honeymoon</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                to={`${process.env.PUBLIC_URL}/package`}
                onClick={scrollTop}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate6.svg"}
                    alt=""
                  />
                </div>
                <h5>Sea Beach</h5>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                to={`${process.env.PUBLIC_URL}/package`}
                onClick={scrollTop}
              >
                <div className="cate-icon mx-auto">
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons/cate7.svg"}
                    alt=""
                  />
                </div>
                <h5>Mountain Tour</h5>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="topbar-area topbar-style-two d-sm-flex d-none">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 d-md-flex d-none justify-content-start align-items-center">
              <div className="topbar-contact-left">
                <ul className="contact-list">
                  <li>
                    <i className="bi bi-telephone-fill" />{" "}
                    <a href="tel:+17632275032">+1 763-227-5032</a>
                  </li>
                  <li>
                    <i className="bi bi-envelope-fill" />{" "}
                    <a href="mailto:info@example.com">info@example.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 d-flex justify-content-md-end justify-content-center align-items-center">
              <ul className="topbar-social-links">
                <li>
                  <Link to={"#"}>
                    <i className="bx bxl-facebook" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <i className="bx bxl-instagram-alt" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <i className="bx bxl-twitter" />
                  </Link>
                </li>
                <li>
                  <Link to={"#"}>
                    <i className="bx bxl-pinterest" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="header-area header-style-four position-absolute w-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-2 col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 align-items-center d-xl-flex d-lg-block">
                <div className="nav-logo d-flex justify-content-between align-items-center">
                  <Link to={"#"} onClick={scrollTop}>
                    <img
                      src={process.env.PUBLIC_URL + "/images/logo-w.png"}
                      alt="logo"
                    />
                  </Link>
                  <div className="mobile-menu d-flex ">
                    <div className="d-flex align-items-center">
                      <div className="nav-right-icons d-xl-none d-flex align-items-center ">
                        <div
                          className="user-dropdown"
                          onClick={handleUserDropDown}
                        >
                          <i className="bx bx-user-circle" />
                          <ul
                            className={
                              userDropdown === 1
                                ? "user-drop-list account-drop-active"
                                : "user-drop-list"
                            }
                          >
                            <li>
                              <Link to={"#"}>My Account</Link>
                            </li>
                            <li>
                              <Link to={"#"}>Login</Link>
                            </li>
                            <li>
                              <Link to={"#"}>Registration</Link>
                            </li>
                            <li>
                              <Link to={"#"}>Setting</Link>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="category-toggle"
                          onClick={handleCatagorybtn}
                        >
                          <i className="bx bx-category" />
                        </div>
                      </div>
                      <Link
                        to={"#"}
                        className={
                          mobileSideberMenu === 1
                            ? "hamburger d-block d-xl-none h-active"
                            : "hamburger d-block d-xl-none"
                        }
                        onClick={handleMobileSiderbar}
                      >
                        <span className="h-top" />
                        <span className="h-middle" />
                        <span className="h-bottom" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-7 col-xl-8 col-lg-9 col-md-8 col-sm-6 col-xs-6">
                <nav
                  className={
                    mobileSideberMenu === 1 ? "main-nav slidenav" : "main-nav"
                  }
                >
                  <div className="inner-logo d-xl-none text-center">
                    <Link to={"#"}>
                      <img
                        src={process.env.PUBLIC_URL + "/images/logo.png"}
                        alt=""
                      />
                    </Link>
                  </div>
                  <ul>
                    <li
                      className="has-child-menu"
                      onClick={() => dispatch({ type: "homeOne" })}
                    >
                      <Link to={"#"}>Home</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === "homeOne"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/`}
                          >
                            Home Style 1
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}index2`}
                          >
                            Home Style 2
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/index3`}
                          >
                            Home Style 3
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/index4`}
                          >
                            Home Style 4
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/about`}
                      >
                        About Us
                      </Link>
                    </li>
                    <li
                      className="has-child-menu "
                      onClick={() => dispatch({ type: "destination" })}
                    >
                      <Link to={"#"}>Destination</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === "destination"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/destination`}
                          >
                            Destination
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/destination-details`}
                          >
                            Destination Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="has-child-menu"
                      onClick={() => dispatch({ type: "package" })}
                    >
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
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/package`}
                          >
                            Package Grid
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/package-sidebar`}
                          >
                            Package Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/package-standard`}
                          >
                            Package Standard
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/package-details`}
                          >
                            Package Details{" "}
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="has-child-menu"
                      onClick={() => dispatch({ type: "blog" })}
                    >
                      <Link to={"#"}>Blogs</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === "blog"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog`}
                          >
                            Blog Grid
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-sidebar`}
                          >
                            Blog Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-standard`}
                          >
                            Blog Standard{" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/blog-details`}
                          >
                            Blog Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li
                      className="has-child-menu"
                      onClick={() => dispatch({ type: "page" })}
                    >
                      <Link to={"#"}>Pages</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul
                        className={
                          state.activeMenu === "page"
                            ? "sub-menu d-block"
                            : "sub-menu d-none"
                        }
                      >
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/guide`}
                          >
                            Guide
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/gallery`}
                          >
                            Gallary
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/faq`}
                          >
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            to={`${process.env.PUBLIC_URL}/error`}
                          >
                            404
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link
                        onClick={scrollTop}
                        to={`${process.env.PUBLIC_URL}/contact`}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                  <div className="inner-contact-options d-xl-none">
                    <div className="contact-box-inner">
                      <i className="bi bi-telephone-fill" />{" "}
                      <a href="tel:+17632275032">+1 763-227-5032</a>
                    </div>
                    <div className="contact-box-inner">
                      <i className="bi bi-envelope-fill" />{" "}
                      <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-xxl-3 col-xl-2 col-lg-1">
                <div className="nav-right d-xl-flex d-none">
                  <div className="nav-right-icons gap-3">
                    <div
                      className="header-search search-btn"
                      onClick={handleSearhBar}
                    >
                      <i className="bx bx-search-alt" />
                    </div>
                    <div
                      className="category-toggle"
                      onClick={handleCatagorybtn}
                    >
                      <i className="bx bx-category" />
                    </div>
                  </div>
                  <div className="nav-right-hotline d-xxl-flex d-none">
                    <div className="hotline-icon">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "/images/icons/header-phone.svg"
                        }
                        alt=""
                      />
                    </div>
                    <div className="hotline-info">
                      <span>Hot Line Number</span>
                      <h6>
                        <a href="tel:8801761111456">+880 176 1111 456</a>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderFour;
