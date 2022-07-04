import React from "react";

function WidgetForm() {
  
  return (
    <>
      <aside className="package-widget-style-2 widget-form">
        <div className="widget-title text-center d-flex justify-content-between">
          <h4>Book This Tour</h4>
          <h3 className="widget-lavel">
            $75 <span>Per Person</span>
          </h3>
        </div>
        <div className="widget-body">
          <form
            onSubmit={(e) => e.preventDefault()}
            action="#"
            method="post"
            id="booking-form"
          >
            <div className="booking-form-wrapper">
              <div className="custom-input-group">
                <input type="text" placeholder="Your Full Name" id="name" />
              </div>
              <div className="custom-input-group">
                <input type="email" placeholder="Your Email" id="email" />
              </div>
              <div className="custom-input-group">
                <input type="tel" placeholder="Phone" id="phone" />
              </div>
              <div className="custom-input-group">
                <i className="bi bi-chevron-down" />
                <select id="ticket_type">
                  <option>Tickets Type</option>
                  <option value={1}>Tickets Type 1</option>
                  <option value={2}>Tickets Type 2</option>
                  <option value={3}>Tickets Type 3</option>
                </select>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="custom-input-group">
                    <i className="bi bi-chevron-down" />
                    <select id="truist-adult">
                      <option>Adult</option>
                      <option value={1}> 1</option>
                      <option value={2}> 2</option>
                      <option value={3}> 3</option>
                    </select>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="custom-input-group ">
                    <i className="bi bi-chevron-down" />
                    <select id="tourist-child">
                      <option>Child</option>
                      <option value={1}> 1</option>
                      <option value={2}>2</option>
                      <option value={3}> 3</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="custom-input-group">
                {/* <DatePicker
                              selected={startDate}
                              onChange={(date) =>
                                this.changeDatepickerHandeller(date)
                              }
                              className="input-field check-in"
                              placeholder="dd-mm-yy"
                            /> */}
              </div>
              <div className="custom-input-group">
                <textarea
                  cols={20}
                  rows={7}
                  placeholder="Your message"
                  defaultValue={""}
                />
              </div>
              <div className="custom-input-group">
                <div className="submite-btn">
                  <button type="submit">Book Now</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </aside>
    </>
  );
}

export default WidgetForm;
