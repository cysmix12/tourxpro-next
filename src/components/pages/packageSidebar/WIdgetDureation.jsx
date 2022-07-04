import React from "react";

function WIdgetDureation() {
  
  return (
    <>
      <aside className="package-widget widget-duration mt-30">
        <div className="widget-title">
          <h4>Chooes Your Duration</h4>
        </div>
        <div className="widget-body">
          <ul>
            <li className="deration-check">
              <input className="form-check-input" type="checkbox" id="dura1" />
              <label className="form-check-label" htmlFor="dura1">
                1 - 3 Days
              </label>
            </li>
            <li className="deration-check">
              <input className="form-check-input" type="checkbox" id="dura2" />
              <label className="form-check-label" htmlFor="dura2">
                3 - 5 Days
              </label>
            </li>
            <li className="deration-check">
              <input className="form-check-input" type="checkbox" id="dura3" />
              <label className="form-check-label" htmlFor="dura3">
                5 - 7 Days
              </label>
            </li>
            <li className="deration-check">
              <input className="form-check-input" type="checkbox" id="dura4" />
              <label className="form-check-label" htmlFor="dura4">
                7 - 9 Days
              </label>
            </li>
            <li className="deration-check">
              <input className="form-check-input" type="checkbox" id="dura5" />
              <label className="form-check-label" htmlFor="dura5">
                9 - 11 Days
              </label>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default WIdgetDureation;
