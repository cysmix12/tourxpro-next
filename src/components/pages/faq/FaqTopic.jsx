import React from "react";

function FaqTopic() {
  return (
    <>
      <div className="faq-topics">
        <h3>FAQ Topic</h3>
        <div className="radio-group">
          <input
            className="form-check-input"
            type="radio"
            name="radioGroup"
            id="radioGroup1"
          />
          <label className="form-check-label" htmlFor="radioGroup1">
            General Question
          </label>
        </div>
        <div className="radio-group">
          <input
            className="form-check-input"
            type="radio"
            name="radioGroup"
            id="radioGroup2"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="radioGroup2">
            Financial Topic
          </label>
        </div>
        <div className="radio-group">
          <input
            className="form-check-input"
            type="radio"
            name="radioGroup"
            id="radioGroup3"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="radioGroup3">
            Privacy Policy
          </label>
        </div>
        <div className="radio-group">
          <input
            className="form-check-input"
            type="radio"
            name="radioGroup"
            id="radioGroup4"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="radioGroup4">
            Other Questions
          </label>
        </div>
      </div>
    </>
  );
}

export default FaqTopic;
