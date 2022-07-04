import React from "react";
import { Link } from "react-router-dom";

function DestinationCard2(props) {
  const scrollTop = () => window.scrollTo({ topo: 0, behavior: "smooth" });
  return (
    <>
      <div className="destination-card-style-two">
        <div className="d-card-thumb">
          <img src={props.image} alt={props.altNo} />
        </div>
        <div className="d-card-content">
          <h4 className="destination-title">
            <Link
              onClick={scrollTop}
              to={`${process.env.PUBLIC_URL}/destination-details`}
            >
              {props.placeName}
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

export default DestinationCard2;
