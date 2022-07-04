import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";
function SearchBarFour() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [startDate, setStartDate] = useState(new Date());
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
    const optionsForDestination = [
        { value: "1", label: "India" },
            { value: "2", label: "Sri Lanka" },
            { value: "3", label: "Solt Lake" },
            { value: "4", label: " Kolkata" },
            { value: "6", label: " Mohania" },
            { value: "7", label: " Mumbai" },
            { value: "8", label: " New Delhi" },
      ];
      const optionsForTravel = [
        { value: "1", label: "Adventure Tour" },
            { value: "2", label: "Group Tour" },
            { value: "3", label: "Couple Tour" },
            { value: "4", label: "Sea Beach" },
            { value: "5", label: "Mountain Tour" },
      ];
      const optionsForPerson = [
        { value: "1", label: "01" },
        { value: "2", label: "02" },
        { value: "3", label: "03" },
        { value: "4", label: "04" },
        { value: "5", label: "05" },
      ];
  return (
    <>
      <div className="searchbar-section home4">
        <div className="container">
        <div className="multi-main-searchber">
            <div className="row g-4">
              <div className="col-lg-10">
                <div className="row gx-0 gy-4">
                  <div className="col-lg-3 col-md-6">
                    <div className="select-box">
                      <div className="searchbox-icons">
                        <i className="bi bi-geo-alt" />
                      </div>
                      <div className="searchbox-input">
                        <label htmlFor="activity-dropdown">Destination</label>
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={optionsForDestination}
                          placeholder="Where are you going?"
                          className="selectbox"
                        ></Select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="select-box">
                      <div className="searchbox-icons">
                        <i className="bi bi-text-paragraph" />
                      </div>
                      <div className="searchbox-input">
                        <label htmlFor="activity-dropdown">Travel Type</label>
                        <Select
                        className="selectbox"
                          defaultValue={selectedOption}
                          placeholder="All activities"
                          onChange={setSelectedOption}
                          options={optionsForTravel}

                        ></Select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="select-box">
                      <div className="searchbox-icons">
                        <i className="bi bi-person-plus" />
                      </div>
                      <div className="searchbox-input">
                        <label htmlFor="activity-dropdown">Person</label>
                        <Select
                        className="selectbox"
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={optionsForPerson}
                          placeholder="Select"
                        ></Select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="select-box">
                      <div className="searchbox-icons">
                        <i className="bi bi-capslock" />
                      </div>
                      <div className="searchbox-input">
                        <label htmlFor="activity-dropdown">Journey Date</label>
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2">
                <div className="main-form-submit">
                  <Link
                    onClick={scrollTop}
                    to={`${process.env.PUBLIC_URL}/package`}
                  >
                    <button type="submit">Find Now</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBarFour;
