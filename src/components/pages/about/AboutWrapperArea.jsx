import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

function AboutWrapperArea() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="about-main-wrappper pt-110">
        <div className="container">
          <div className="about-tab-wrapper">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="about-tab-image-grid text-center">
                  <div className="about-video d-inline-block">
                    <img src={process.env.PUBLIC_URL + "/images/about/about-g2.png"} alt="aboutIMG" />
                    <div className="video-overlay">
                      <div className="play-icon video-popup">
                        <i
                          onClick={() => setOpen(true)}
                          className="bi bi-play-fill"
                        ></i>
                      </div>
                    </div>
                  </div>
                  <div className="row float-images g-4">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="about-image">
                        <img src={process.env.PUBLIC_URL + "/images/about/about-g1.png"} alt="aboutIMG" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="about-image">
                        <img src={process.env.PUBLIC_URL + "/images/about/about-g3.png"} alt="aboutIMG" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="about-tab-wrap">
                  <h2 className="about-wrap-title">
                    About Our Company And <span>What We Are</span> Offer.
                  </h2>
                  <div className="about-tab-switcher">
                    <ul
                      className="nav nav-pills mb-3 justify-content-md-between justify-content-center"
                      id="about-tab-pills"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <div
                          className="nav-link active"
                          id="pills-about1"
                          data-bs-toggle="pill"
                          data-bs-target="#about-pills1"
                          role="tab"
                          aria-controls="about-pills1"
                          aria-selected="true"
                        >
                          <h3>10</h3>
                          <h6>Years Experience</h6>
                        </div>
                      </li>
                      <li className="nav-item" role="presentation">
                        <div
                          className="nav-link"
                          id="pills-about2"
                          data-bs-toggle="pill"
                          data-bs-target="#about-pills2"
                          role="tab"
                          aria-controls="about-pills2"
                          aria-selected="false"
                        >
                          <h3>100+</h3>
                          <h6>Tour Guide</h6>
                        </div>
                      </li>
                      <li className="nav-item" role="presentation">
                        <div
                          className="nav-link"
                          id="pills-about3"
                          data-bs-toggle="pill"
                          data-bs-target="#about-pills3"
                          role="tab"
                          aria-controls="about-pills3"
                          aria-selected="false"
                        >
                          <h3>500+</h3>
                          <h6>Travelar Connect</h6>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="tab-content about-tab-content"
                    id="pills-tabContent"
                  >
                    <div
                      className="tab-pane fade show active"
                      id="about-pills1"
                      role="tabpanel"
                      aria-labelledby="pills-about1"
                    >
                      <p>
                        Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                        venenatis hendrerit a id lectus. Suspendissendt blandit
                        interdum. Sed pellentesque at nunc eget consente
                        consectetur.Duis rutrum nisl urna. Maecenas vel libero
                        faucibus nisi venenatis hendrerit a id lectus.
                        Suspendissendt blandit interdum. Sed pellentesque at
                        nunc consectetur.Duis rutrum nisl urna. Maecenas vel
                        libero faucibus nisi venenatis hendrerit a id lectus.
                        Suspendissendt blandit interdum. Sed pellentesque at
                        nunc consectetur.Duis rutrum nisl urna. Maecenas vel
                        libero faucibus nisi venenatis hendrerit a id lectus.
                        Suspendissendt blandit interdum. Sed pellentesque at
                        nunc consectetur.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="about-pills2"
                      role="tabpanel"
                      aria-labelledby="pills-about2"
                    >
                      <p>
                        Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                        venenatis hendrerit a id lectus. Suspendissendt blandit
                        interdum. Sed pellentesque at nunc eget consente
                        consectetur.Duis rutrum nisl urna. Maecenas vel libero
                        faucibus nisi venenatis hendrerit a id lectus.
                        Suspendissendt blandit interdum. Sed pellentesque at
                        nunc consectetur.Duis rutrum nisl urna. Maecenas vel
                        libero faucibus nisi venenatis hendrerit.
                      </p>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="about-pills3"
                      role="tabpanel"
                      aria-labelledby="pills-about3"
                    >
                      <p>
                        Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                        venenatis hendrerit a id lectus. Suspendissendt blandit
                        interdum. Sed pellentesque at nunc eget consente
                        consectetur.Duis rutrum nisl urna. Maecenas vel libero
                        faucibus nisi venenatis hendrerit a id lectus.
                        Suspendissendt blandit interdum. Sed pellentesque at
                        nunc consectetur.Duis rutrum nisl urna. Maecenas vel
                        libero faucibus nisi venenatis hendrerit a id lectus.
                        Suspendissendt blandit interdum. Sed pellentesque at
                        nunc consectetur.Duis rutrum nisl urna. Maecenas vel
                        libero faucibus nisi venenatis hendrerit a id lectus.
                        Suspendissendt blandit interdum. Sed pellentesque at
                        nunc consectetur.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-110">
            <div className="col-lg-6">
              <div className="achievement-counter-wrap">
                <h2 className="about-wrap-title">
                  Why Package Book With
                  <span>TourX Pro?</span>
                </h2>
                <div className="achievement-counter-cards">
                  <div className="achievement-counter-card flex-sm-row flex-column text-sm-start text-center ">
                    <div className="counter-box mb-sm-0 mb-3">
                      <h2>500+</h2>
                      <h6>Awesome Tour</h6>
                    </div>
                    <p>
                      Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                      venenatis hendrerit a id lectus. Suspendissendt enlane
                      molestie turpis nec lacinia vehicula.
                    </p>
                  </div>
                  <div className="achievement-counter-card flex-sm-row flex-column text-sm-start text-center">
                    <div className="counter-box">
                      <h2>300+</h2>
                      <h6>Destinations</h6>
                    </div>
                    <p>
                      Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                      venenatis hendrerit a id lectus. Suspendissendt enlane
                      molestie turpis nec lacinia vehicula.
                    </p>
                  </div>
                  <div className="achievement-counter-card flex-sm-row flex-column text-sm-start text-center">
                    <div className="counter-box">
                      <h2>150+</h2>
                      <h6> Mountains</h6>
                    </div>
                    <p>
                      Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                      venenatis hendrerit a id lectus. Suspendissendt enlane
                      molestie turpis nec lacinia vehicula.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-image-group mt-5 mt-lg-0">
                <img src={process.env.PUBLIC_URL + "/images/about/about-image-group2.png"} alt="aboutIMG" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <React.Fragment>
        <ModalVideo
          channel="youtube"
          autoplay
          isOpen={isOpen}
          videoId="3SsK-cxlj_w"
          onClose={() => setOpen(false)}
        />
      </React.Fragment>
    </>
  );
}

export default AboutWrapperArea;
