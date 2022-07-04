import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function HomePageTwoHeader() {
  const [isCatagoryActive, setCatagoryActive] = useState(false);
  const [isUserDropdown, setUserDropdown] = useState(false);
  const [mobileSideberMenu, setMobileSideberMenu] = useState(0);
  const handleUserDropDown = () => {
    if (isUserDropdown === false || isUserDropdown === 0) {
      setUserDropdown(1);
    } else {
      setUserDropdown(false);
    }
  };
  const handleMobileSiderbar = () => {
    if (mobileSideberMenu === false || mobileSideberMenu === 0) {
      setMobileSideberMenu(1);
    } else {
      setMobileSideberMenu(false);
    }
  };
  const handleCatagorybtn = () => {
    if (isCatagoryActive === false || isCatagoryActive === 0) {
      setCatagoryActive(1);
    } else {
      setCatagoryActive(false);
    }
  };
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
    scrollTop >= 200
      ? header.classList.add('sticky')
      : header.classList.remove('sticky');
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div
        className={`${'category-sidebar-wrapper'} ${
          isCatagoryActive === 1 ? 'category-active' : ''
        } `}
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
                href={`/package`}
              >
                <>
                  <div className="cate-icon mx-auto">
                    <img src={'/images/icons/cate1.svg'} alt="images" />
                  </div>
                  <h5>Adventure</h5>
                </>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                href={`/package`}
              >
                <>
                  <div className="cate-icon mx-auto">
                    <img src={'/images/icons/cate2.svg'} alt="images" />
                  </div>
                  <h5>Group Tour</h5>
                </>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                href={`/package`}
              >
                <>
                  <div className="cate-icon mx-auto">
                    <img src={'/images/icons/cate3.svg'} alt="images" />
                  </div>
                  <h5>Couple Tour</h5>
                </>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                href={`/package`}
              >
                <>
                  <div className="cate-icon mx-auto">
                    <img src={'/images/icons/cate4.svg'} alt="images" />
                  </div>
                  <h5>Single Tour</h5>
                </>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                href={`/package`}
              >
                <>
                  <div className="cate-icon mx-auto">
                    <img src={'/images/icons/cate5.svg'} alt="images" />
                  </div>
                  <h5>Honeymoon</h5>
                </>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                href={`/package`}
              >
                <>
                  <div className="cate-icon mx-auto">
                    <img src={'/images/icons/cate6.svg'} alt="images" />
                  </div>
                  <h5>Sea Beach</h5>
                </>
              </Link>
            </div>
            <div className="col">
              <Link
                className="category-box"
                onClick={scrollTop}
                href={`/package`}
              >
                <>
                  <div className="cate-icon mx-auto">
                    <img src={'/images/icons/cate7.svg'} alt="images" />
                  </div>
                  <h5>Mountain Tour</h5>
                </>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div
          className={`${'header-area header-style-two'} ${
            isSticky && 'sticky'
          }`}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-7 col-lg-8 col-md-8 col-sm-6 col-xs-6">
                <nav
                  className={
                    mobileSideberMenu === 1 ? 'main-nav slidenav' : 'main-nav'
                  }
                >
                  <div className="inner-logo d-xl-none text-center">
                    <Link onClick={scrollTop} href={`/`}>
                      <img src={'/images/logo.png'} alt="Logo" />
                    </Link>
                  </div>
                  <ul>
                    <li className="has-child-menu">
                      <Link href={'#'}>Home</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <Link href={`/`}>Home Style 1</Link>
                        </li>
                        <li>
                          <Link href={`/index2`}>Home Style 2</Link>
                        </li>
                        <li>
                          <Link href={`/index3`}>Home Style 3</Link>
                        </li>
                        <li>
                          <Link href={`/index4`}>Home Style 4</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={scrollTop} href={`/about`}>
                        About Us
                      </Link>
                    </li>
                    <li className="has-child-menu">
                      <Link onClick={scrollTop} href={'#'}>
                        Destination
                      </Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={scrollTop} href={`/destination`}>
                            Destination
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={scrollTop}
                            href={`/destination-details`}
                          >
                            Destination Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <Link href={'#'}>Package</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={scrollTop} href={`/package`}>
                            Package Grid
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/package-sidebar`}>
                            Package Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/package-standard`}>
                            Package Standard
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/package-details`}>
                            Package Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <Link href={'#'}>Blogs</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={scrollTop} href={`/blog`}>
                            Blog Grid
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/blog-sidebar`}>
                            Blog Sidebar
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/blog-standard`}>
                            Blog Standard
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/blog-details`}>
                            Blog Details
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-child-menu">
                      <Link href={'#'}>Pages</Link>
                      <i className="fl flaticon-plus">+</i>
                      <ul className="sub-menu">
                        <li>
                          <Link onClick={scrollTop} href={`/guide`}>
                            Guide
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/gallary`}>
                            Gallary
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/faq`}>
                            FAQ
                          </Link>
                        </li>
                        <li>
                          <Link onClick={scrollTop} href={`/error`}>
                            404
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link onClick={scrollTop} href={`/contact`}>
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                  <div className="inner-contact-options d-xl-none">
                    <div className="contact-box-inner">
                      <i className="bi bi-telephone-fill" />
                      <Link href={'tel:+17632275032'}>+1 763-227-5032</Link>
                    </div>
                    <div className="contact-box-inner">
                      <i className="bi bi-envelope-fill" />
                      <Link href={'mailto:info@domainname.com'}>
                        info@domainname.com
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
              <div className="col-xl-2 col-lg-12 col-md-12 col-sm-12 col-xs-12 align-items-center d-xl-flex d-lg-block">
                <div className="nav-logo d-flex justify-content-between align-items-center">
                  <Link onClick={scrollTop} href={`/`}>
                    <img src={'/images/logo-w.png'} alt="logo" />
                  </Link>
                  <div className="mobile-menu d-flex ">
                    <div className="d-flex align-items-center">
                      <div className="nav-right-icons d-xl-none d-flex align-items-center ">
                        <div className="user-dropdown">
                          <i
                            onClick={handleUserDropDown}
                            className="bx bx-user-circle"
                          />
                          <ul
                            className={`${'user-drop-list'} ${
                              isUserDropdown === 1 ? 'account-drop-active' : ''
                            }`}
                          >
                            <li>
                              <Link href={'#'}>My Account</Link>
                            </li>
                            <li>
                              <Link href={'#'}>Login</Link>
                            </li>
                            <li>
                              <Link href={'#'}>Registration</Link>
                            </li>
                            <li>
                              <Link href={'#'}>Setting</Link>
                            </li>
                          </ul>
                        </div>
                        <div
                          onClick={handleCatagorybtn}
                          className="category-toggle"
                        >
                          <i className="bx bx-category" />
                        </div>
                      </div>
                      <Link
                        href={'#'}
                        onClick={handleMobileSiderbar}
                        className={
                          mobileSideberMenu === 1
                            ? 'hamburger d-block d-xl-none h-active'
                            : 'hamburger d-block d-xl-none'
                        }
                      >
                        <>
                          <span className="h-top" />
                          <span className="h-middle" />
                          <span className="h-bottom" />
                        </>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="nav-right d-xl-flex d-none">
                  <div className="nav-right-icons">
                    <div className="user-dropdown">
                      <i
                        onClick={handleUserDropDown}
                        className="bx bx-user-circle"
                      />
                      <ul
                        className={`${'user-drop-list'} ${
                          isUserDropdown === 1 ? 'account-drop-active' : ''
                        }`}
                      >
                        <li>
                          <Link href={'#'}>My Account</Link>
                        </li>
                        <li>
                          <Link href={'#'}>Login</Link>
                        </li>
                        <li>
                          <Link href={'#'}>Registration</Link>
                        </li>
                        <li>
                          <Link href={'#'}>Setting</Link>
                        </li>
                      </ul>
                    </div>
                    <div
                      onClick={handleCatagorybtn}
                      className="category-toggle"
                    >
                      <i className="bx bx-category" />
                    </div>
                  </div>
                  <div className="nav-right-hotline">
                    <div className="hotline-icon">
                      <i className="bi bi-phone-vibrate" />
                    </div>
                    <div className="hotline-info">
                      <span>Hot Line Number</span>
                      <h6>
                        <a
                          rel="noopener noreferrer"
                          href="tel: +880 176 1111 456"
                        >
                          +880 176 1111 456
                        </a>
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

export default HomePageTwoHeader;
