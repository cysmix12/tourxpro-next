import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
function GallaryArea() {
  return (
    <>
      <SRLWrapper>
        <div className="gallary-area gallary-style-one pt-110">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-head-alpha text-center mx-auto">
                  <h2>Travel Gallery</h2>
                  <p>
                    Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                    venenatis hendrerit a id lectus. Suspendissendt blandit
                    interdum. Sed pellentesque at nunc eget consectetur.
                  </p>
                </div>
              </div>
            </div>
            <div className="gallery-wrapper">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="gallary-item">
                    <img
                      src={process.env.PUBLIC_URL + "/images/gallary/g-xl1.png"}
                      alt="ImageGallery"
                    />
                    <a
                      className="gallary-item-overlay"
                      href={
                        process.env.PUBLIC_URL +
                        "/images/gallary/tourfullscreen04.png"
                      }
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/gallary/g-xl1.png"
                        }
                        alt="ImageGallery"
                      />
                    </a>
                  </div>
                  <div className="gallary-item">
                    <img
                      src={process.env.PUBLIC_URL + "/images/gallary/g-md1.png"}
                      alt="ImageGallery"
                    />
                    <a
                      className="gallary-item-overlay"
                      href={
                        process.env.PUBLIC_URL +
                        "/images/gallary/tourfullscreen06.png"
                      }
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/gallary/g-md1.png"
                        }
                        alt="ImageGallery"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="gallary-item">
                    <img
                      src={process.env.PUBLIC_URL + "/images/gallary/g-sm1.png"}
                      alt="ImageGallery"
                    />
                    <a
                      className="gallary-item-overlay"
                      href={
                        process.env.PUBLIC_URL +
                        "/images/gallary/tourfullscreen02.png"
                      }
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/gallary/g-sm1.png"
                        }
                        alt="ImageGallery"
                      />
                    </a>
                  </div>
                  <div className="gallary-item">
                    <img
                      src={process.env.PUBLIC_URL + "/images/gallary/g-sm2.png"}
                      alt="ImageGallery"
                    />
                    <a
                      className="gallary-item-overlay"
                      href={
                        process.env.PUBLIC_URL +
                        "/images/gallary/tourfullscreen07.png"
                      }
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/gallary/g-sm2.png"
                        }
                        alt="ImageGallery"
                      />
                    </a>
                  </div>
                  <div className="gallary-item">
                    <img
                      src={process.env.PUBLIC_URL + "/images/gallary/g-md2.png"}
                      alt="ImageGallery"
                    />
                    <a
                      className="gallary-item-overlay"
                      href={
                        process.env.PUBLIC_URL +
                        "/images/gallary/tourfullscreen05.png"
                      }
                    >
                      <img
                      src={process.env.PUBLIC_URL + "/images/gallary/g-md2.png"}
                      alt="ImageGallery"
                    />
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="gallary-item">
                    <img
                      src={process.env.PUBLIC_URL + "/images/gallary/g-xl2.png"}
                      alt="ImageGallery"
                    />
                    <a
                      className="gallary-item-overlay"
                      href={
                        process.env.PUBLIC_URL +
                        "/images/gallary/tourfullscreen01.png"
                      }
                    >
                       <img
                      src={process.env.PUBLIC_URL + "/images/gallary/g-xl2.png"}
                      alt="ImageGallery"
                    />
                    </a>
                  </div>
                  <div className="gallary-item">
                    <img
                      src={process.env.PUBLIC_URL + "/images/gallary/g-md3.png"}
                      alt="ImageGallery"
                    />
                    <a
                      className="gallary-item-overlay"
                      href={
                        process.env.PUBLIC_URL +
                        "/images/gallary/tourfullscreen03.png"
                      }
                    >
                      <img
                      src={process.env.PUBLIC_URL + "/images/gallary/g-md3.png"}
                      alt="ImageGallery"
                    />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SRLWrapper>
    </>
  );
}

export default GallaryArea;
