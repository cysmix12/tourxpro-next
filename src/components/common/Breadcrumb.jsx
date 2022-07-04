import { Link } from "react-router-dom";
import React from "react";

function Breadcrumb(props) {
  return (
    <>
      <div className="breadcrumb breadcrumb-style-one">
        <div className="container">
          <div className="col-lg-12 text-center">
            <h2 className="breadcrumb-title">{props.name}</h2>
            <ul className="d-flex justify-content-center breadcrumb-items">
              <li className="breadcrumb-item">
                <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
              </li>
              <li className="breadcrumb-item active">{props.name}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Breadcrumb