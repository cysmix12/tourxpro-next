import React from "react";

function Faq() {
  return (
    <>
      <div className="faqs">
        <h2>
          Frequently <span>Asked </span>
          <br />
          Question
        </h2>
        <div
          className="accordion faq-accordion accordion-flush"
          id="faq-accordion-example"
        >
          <div className="accordion-item faq-accordion">
            <div className="accordion-header" id="faq-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapseOne"
                aria-expanded="false"
                aria-controls="faq-collapseOne"
              >
                Nulla sed volutpat libero In consequat feugia?
              </button>
            </div>
            <div
              id="faq-collapseOne"
              className="accordion-collapse collapse  show"
              aria-labelledby="faq-headingOne"
              data-bs-parent="#faq-accordion-example"
            >
              <div className="accordion-body">
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt molestie
                  turpis nec lacinia vehicula. Quisque eget volutpat purus.
                  Aenean blandit magna maximus landi quam facilisis, tempor
                  porttitor elit hendrerit. Aliquam cursus arcu vel bibendum
                  pulvinar.
                </p>
                <div className="row pt-2">
                  <div className="col-xl-6">
                    <ul className="faq-list">
                      <li>
                        <strong>01.</strong> Nullam eget mauris imperdiet
                        turpis.
                      </li>
                      <li>
                        <strong>02.</strong> lacus mi dictum urna, quis cursus.
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-6">
                    <ul className="faq-list">
                      <li>
                        <strong>03.</strong> Sed feugiat sed erat sed eleifend.
                        Done velit.
                      </li>
                      <li>
                        <strong>04.</strong> augue dignissim Sed vel molestie
                        ligula.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item faq-accordion">
            <div className="accordion-header" id="faq-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapseTwo"
                aria-expanded="false"
                aria-controls="faq-collapseTwo"
              >
                Aenean tempor ac odio ut placerat. Pellentesque ut?
              </button>
            </div>
            <div
              id="faq-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="faq-headingTwo"
              data-bs-parent="#faq-accordion-example"
            >
              <div className="accordion-body">
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt molestie
                  turpis nec lacinia vehicula. Quisque eget volutpat purus.
                  Aenean blandit magna maximus landi quam facilisis, tempor
                  porttitor elit hendrerit. Aliquam cursus arcu vel bibendum
                  pulvinar.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item faq-accordion">
            <div className="accordion-header" id="faq-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapseThree"
                aria-expanded="false"
                aria-controls="faq-collapseThree"
              >
                Donec ullamcorper dolor vel elit facilisis egestas?
              </button>
            </div>
            <div
              id="faq-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="faq-headingThree"
              data-bs-parent="#faq-accordion-example"
            >
              <div className="accordion-body">
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt molestie
                  turpis nec lacinia vehicula. Quisque eget volutpat purus.
                  Aenean blandit magna maximus landi quam facilisis, tempor
                  porttitor elit hendrerit. Aliquam cursus arcu vel bibendum
                  pulvinar.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item faq-accordion">
            <div className="accordion-header" id="faq-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapseFour"
                aria-expanded="false"
                aria-controls="faq-collapseFour"
              >
                Ut iaculis vulputate odio ac laoreet. Aliquam euontep bunt?
              </button>
            </div>
            <div
              id="faq-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="faq-headingFour"
              data-bs-parent="#faq-accordion-example"
            >
              <div className="accordion-body">
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt molestie
                  turpis nec lacinia vehicula. Quisque eget volutpat purus.
                  Aenean blandit magna maximus landi quam facilisis, tempor
                  porttitor elit hendrerit. Aliquam cursus arcu vel bibendum
                  pulvinar.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item faq-accordion">
            <div className="accordion-header" id="faq-headingFive">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq-collapseFive"
                aria-expanded="false"
                aria-controls="faq-collapseFive"
              >
                Suspendisse convallis dui eget orci mollis?
              </button>
            </div>
            <div
              id="faq-collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="faq-headingFive"
              data-bs-parent="#faq-accordion-example"
            >
              <div className="accordion-body">
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt molestie
                  turpis nec lacinia vehicula. Quisque eget volutpat purus.
                  Aenean blandit magna maximus landi quam facilisis, tempor
                  porttitor elit hendrerit. Aliquam cursus arcu vel bibendum
                  pulvinar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Faq;
