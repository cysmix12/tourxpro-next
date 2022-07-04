import React from "react";

function FaqQuestionForm() {
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        action="#"
        id="faq-form"
        method="post"
      >
        <div className="faq-form">
          <h3>Ask Your Question</h3>
          <div className="custom-input-group">
            <input type="text" required placeholder="Your Name" id="name" />
          </div>
          <div className="custom-input-group">
            <input type="email" placeholder="Your Email" id="email" required />
          </div>
          <div className="custom-input-group">
            <input
              type="number"
              required
              placeholder="Phone Number"
              id="phone"
            />
          </div>
          <div className="custom-input-group">
            <textarea
              cols={20}
              rows={6}
              placeholder="Your message"
              defaultValue={""}
            />
          </div>
          <div className="custom-input-group">
            <div className="submite-btn">
              <button type="submit">Submit Now</button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default FaqQuestionForm;
