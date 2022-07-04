import React from "react";
import { Link } from "react-router-dom";

function ContactWrapperArea() {
  return (
    <>
      <div className="contact-wrapper pt-110">
        <div className="container">
          <div className="row align-items-center justify-content-lg-center gy-5">
            <div className="col-lg-6">
              <div className="contatc-intro-figure">
                <img
                  src={process.env.PUBLIC_URL + "/images/banner/contact-bg.png"}
                  alt="ContactBannerIMG"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="contact-info">
                <h3>Contact Info.</h3>
                <ul>
                  <li>
                    <h6>Let’s Talk</h6>
                    <a href="mailto:info@example.com">info@example.com</a>
                    <a href="mailto:support@example.com">info@support.com</a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="tel:+88 0176 1111 456"
                    >
                      +88 0176 1111 456
                    </a>
                  </li>
                  <li>
                    <h6>Location.</h6>
                    <a href="https://goo.gl/maps/8cLmgUVZ322s9FLA6">
                      168/170, Ave 01, Streets Suite 666 Mirpur DOHS, Bangladesh
                    </a>
                  </li>
                  <li>
                    <h6>Visit Us.</h6>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://www.facebook.com/egenslab"
                    >
                      Facebook: https://www.facebook.com/egenslab
                    </a>
                    <a
                      rel="noopener noreferrer"
                      target="_blank"
                      href="https://twitter.com/EgensLab"
                    >
                      Twitter: https://www.twitter.com/egenslab
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <div className="contact-map mt-120">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  title="map"
                  id="gmap_canvas"
                  src={
                    "https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=9&ie=UTF8&iwloc=&output=embed"
                  }
                />
                <Link to={"https://123movies-to.org"} />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-110">
          <form onSubmit={(e) => e.preventDefault()} id="contact_form">
            <div className="contact-form-wrap">
              <h4>Get a free key stroke quote now</h4>
              <p>
                Your email address will not be published. Required fields are
                marked *
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="custom-input-group">
                    <label htmlFor="name">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      id="name"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="custom-input-group">
                    <label htmlFor="email">Email</label>
                    <input
                      required
                      type="text"
                      placeholder="Your Email"
                      id="email"
                    />
                  </div>
                </div>
              </div>
              <div className="custom-input-group">
                <textarea
                  cols={20}
                  rows={7}
                  required
                  placeholder="Your message"
                  defaultValue={""}
                />
              </div>
              <div className="custom-input-group">
                <div className="submite-btn">
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactWrapperArea;
