import React from "react";

function GuideCardGama(props) {
  return (
    <>
      <div className="guide-card-gamma">
        <div className="guide-image">
          <img src={props.image} alt="GuideIMG" />
          <ul className="guide-social-links">
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <i className="bx bxl-instagram" />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/"
                target="_blank"
              >
                <i className="bx bxl-facebook" />
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.twitter.com/"
                target="_blank"
              >
                <i className="bx bxl-twitter" />
              </a>
            </li>
          </ul>
          <div className="contact-lavel">
            <a rel="noopener noreferrer" href="tel:+1-847-555-5555">
              Contact
            </a>
          </div>
        </div>
        <div className="guide-content">
          <h4 className="guide-name">{props.name}</h4>
          <h6 className="guide-designation">Tour Guide</h6>
        </div>
      </div>
    </>
  );
}

export default GuideCardGama;
