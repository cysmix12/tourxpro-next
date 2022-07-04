import React from 'react';
import Link from 'next/link';

function DestinationCart(props) {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className="destination-card-style-two mb-0">
        <div className="d-card-thumb">
          <img src={props.image} alt="CartIMG" />
        </div>
        <div className="d-card-content">
          <h4 className="destination-title">
            {' '}
            <Link onClick={scrollTop} href={`/destination-details`}>
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
