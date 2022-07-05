import { useContext } from 'react';

import GuideCardAlpha from './GuideCardAlpha';
import { MockContext } from '../../../context';

function TourGideArea() {
  const { data } = useContext(MockContext);

  return (
    <>
      <div className="guide-area guide-style-one pt-110">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="section-head-alpha text-center mx-auto">
                <h2>Tour Guide</h2>
                <p>
                  Duis rutrum nisl urna. Maecenas vel libero faucibus nisi
                  venenatis hendrerit a id lectus. Suspendissendt blandit
                  interdum. Sed pellentesque at nunc eget consectetur.
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {data.tourGuides.map((tourGuide, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <GuideCardAlpha {...tourGuide} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TourGideArea;
