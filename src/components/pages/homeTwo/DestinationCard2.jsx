import React from 'react';
import Link from 'next/link';

function DestinationCard2(props) {
  const scrollTop = () => window.scrollTo({ topo: 0, behavior: 'smooth' });
  return (
    <>
      <div className="destination-card-style-two">
        <div className="d-card-thumb">
          <img src={props.image} />
        </div>
        <div className="d-card-content">
          <h4 className="destination-title">
            <Link onClick={scrollTop} href={`/destination-details`}>
              {props.place}
            </Link>
          </h4>
          <div className="place-count">
            <span>{props.placeCount}</span> Places
          </div>
        </div>
      </div>
    </>
  );
}

export default DestinationCard2;
