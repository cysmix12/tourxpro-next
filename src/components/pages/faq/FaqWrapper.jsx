import React from "react";
import Faq from "./Faq";
import FaqQuestionForm from "./FaqQuestionForm";
import FaqTopic from "./FaqTopic";

function FaqWrapper() {
  return (
    <>
      <div className="faq-wrapper pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <Faq />
            </div>
            <div className="col-lg-4">
              <div className="faq-sidebar">
                <FaqTopic />
                <FaqQuestionForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqWrapper;
