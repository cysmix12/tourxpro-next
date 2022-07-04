import React from "react";
import { Link } from "react-router-dom";

function Tourguide3() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <>
      <div className="guide-area guide-style-one pt-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-sm-10">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Tour Guide</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center g-4">
            <div className="col-lg-4 col-md-6 col-md-10">
              <div className="guide-card-beta">
                <div className="guide-image">
                  <img
                    src={process.env.PUBLIC_URL + "/images/guide/guide31.png"}
                    alt="guide images"
                  />
                  <ul className="guide-social-links d-flex justify-content-center flex-column gap-3">
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-whatsapp" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="guide-content">
                  <Link
                    to={`${process.env.PUBLIC_URL}/guide`}
                    onClick={scrollTop}
                  >
                    <h4 className="guide-name">Sebastian Mateo</h4>
                  </Link>
                  <h6 className="guide-designation">Tour Guide</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-md-10">
              <div className="guide-card-beta">
                <div className="guide-image">
                  <img
                    src={process.env.PUBLIC_URL + "/images/guide/guide32.png"}
                    alt=""
                  />
                  <ul className="guide-social-links d-flex justify-content-center flex-column gap-3">
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-whatsapp" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="guide-content">
                  <Link
                    to={`${process.env.PUBLIC_URL}/guide`}
                    onClick={scrollTop}
                  >
                    <h4 className="guide-name">Theodore Aiden</h4>
                  </Link>
                  <h6 className="guide-designation">Tour Guide</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-md-10">
              <div className="guide-card-beta">
                <div className="guide-image">
                  <img
                    src={process.env.PUBLIC_URL + "/images/guide/guide33.png"}
                    alt=""
                  />
                  <ul className="guide-social-links d-flex justify-content-center flex-column gap-3">
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-twitter" />
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"}>
                        <i className="bx bxl-whatsapp" />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="guide-content">
                  <Link
                    to={`${process.env.PUBLIC_URL}/guide`}
                    onClick={scrollTop}
                  >
                    <h4 className="guide-name">Lincoln Anthony</h4>
                  </Link>
                  <h6 className="guide-designation">Tour Guide</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tourguide3;
