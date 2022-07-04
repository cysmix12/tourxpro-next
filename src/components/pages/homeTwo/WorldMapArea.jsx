import React from "react";

function WorldMapArea() {
  return (
    <div className="world-map-area mt-110">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-head-gamma">
              <h2>Explore The world</h2>
            </div>
          </div>
        </div>
        <div className="world-map-wrap">
          <div className="world-map-background">
            <img src={process.env.PUBLIC_URL + "/images/banner/map-bg.png"} alt="mapIMG" />
          </div>
          <div className="single-location location-1">
            <div className="location-icon">
              <i className="bi bi-geo-alt-fill" />
            </div>
            <div className="location-disc">
              <h6>United States</h6>
              <p>
                Sed rhoncus eros eu est faucibuses rhoncus. In lobortis, ex sit
                ametend ultricies blandit, dui arcu conguepor urna eu ultricies
                metus.
              </p>
            </div>
          </div>
          <div className="single-location location-2">
            <div className="location-icon">
              <i className="bi bi-geo-alt-fill" />
            </div>
            <div className="location-disc">
              <h6>United Kingdom</h6>
              <p>
                Sed rhoncus eros eu est faucibuses rhoncus. In lobortis, ex sit
                ametend ultricies blandit, dui arcu conguepor urna eu ultricies
                metus.
              </p>
            </div>
          </div>
          <div className="single-location location-3">
            <div className="location-icon">
              <i className="bi bi-geo-alt-fill" />
            </div>
            <div className="location-disc">
              <h6>Chaina</h6>
              <p>
                Sed rhoncus eros eu est faucibuses rhoncus. In lobortis, ex sit
                ametend ultricies blandit, dui arcu conguepor urna eu ultricies
                metus.
              </p>
            </div>
          </div>
          <div className="single-location location-4">
            <div className="location-icon">
              <i className="bi bi-geo-alt-fill" />
            </div>
            <div className="location-disc">
              <h6>Brazil</h6>
              <p>
                Sed rhoncus eros eu est faucibuses rhoncus. In lobortis, ex sit
                ametend ultricies blandit, dui arcu conguepor urna eu ultricies
                metus.
              </p>
            </div>
          </div>
          <div className="single-location location-5">
            <div className="location-icon">
              <i className="bi bi-geo-alt-fill" />
            </div>
            <div className="location-disc">
              <h6>Singapore</h6>
              <p>
                Sed rhoncus eros eu est faucibuses rhoncus. In lobortis, ex sit
                ametend ultricies blandit, dui arcu conguepor urna eu ultricies
                metus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldMapArea;
