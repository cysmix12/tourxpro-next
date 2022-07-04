import React from "react";
import { Link } from "react-router-dom";

function Pagination() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <nav>
            <ul className="pagination pagination-style-one justify-content-center pt-50">
              <li className="page-item page-arrow">
                <Link to={"#"} onClick={scrollTop} className="page-link">
                  <i className="bi bi-chevron-double-left" />
                </Link>
              </li>
              <li className="page-item active">
                <Link to={"#"} onClick={scrollTop} className="page-link">
                  01
                </Link>
              </li>
              <li className="page-item">
                <Link to={"#"} onClick={scrollTop} className="page-link">
                  02
                </Link>
              </li>
              <li className="page-item">
                <Link to={"#"} onClick={scrollTop} className="page-link">
                  03
                </Link>
              </li>
              <li className="page-item">
                <Link to={"#"} onClick={scrollTop} className="page-link">
                  04
                </Link>
              </li>
              <li className="page-item page-arrow">
                <Link to={"#"} onClick={scrollTop} className="page-link">
                  <i className="bi bi-chevron-double-right" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Pagination;
