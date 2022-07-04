import React from "react";
import { Link } from "react-router-dom";

function PackageCardGamma(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="package-card-gamma">
        <div className="package-thumb">
          <Link
            onClick={scrollTop}
            to={`${process.env.PUBLIC_URL}/package-details`}
          >
            <img src={props.image} alt="PackageIMG" />
          </Link>
        </div>
        <div className="package-card-body">
          <p className="card-lavel">
            <i className="bi bi-clock" /> <span>{props.cardLavel}</span>
          </p>
          <h3 className="p-card-title">
            <Link
              onClick={scrollTop}
              to={`${process.env.PUBLIC_URL}/package-details`}
            >
              {props.title}
            </Link>
          </h3>
          <div className="p-card-bottom">
            <div className="book-btn">
              <Link
                onClick={scrollTop}
                to={`${process.env.PUBLIC_URL}/package-details`}
              >
                Book Now <i className="bx bxs-right-arrow-alt" />
              </Link>
            </div>
            <div className="p-card-info">
              <span>From</span>
              <h6>
                {props.price} <span>/Person</span>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PackageCardGamma;
