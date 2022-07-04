import React from "react";
import { Link } from "react-router-dom";

function DestinationCart(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="destination-card-style-two mb-0">
        <div className="d-card-thumb">
          <img src={props.image} alt="CartIMG" />
        </div>
        <div className="d-card-content">
          <h4 className="destination-title">
            {" "}
            <Link
              onClick={scrollTop}
              to={`${process.env.PUBLIC_URL}/destination-details`}
            >
              {props.palce}
            </Link>
          </h4>
          <div className="place-count">
            <span>{props.palceCount}</span> Place
          </div>
        </div>
      </div>
    </>
  );
}

export default DestinationCart;
