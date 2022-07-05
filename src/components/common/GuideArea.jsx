import { useContext } from 'react';

import GuideCardGama from './GuideCardGama';
import { MockContext } from '../../context';

function GuideArea() {
  const { data } = useContext(MockContext);

  return (
    <>
      <div className="guide-area guide-style-one pt-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-head-gamma">
                <h2>Tour Guide</h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            {data.tourGuides.map((tourGuide, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <GuideCardGama {...tourGuide} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default GuideArea;
