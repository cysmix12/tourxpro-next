import { useContext } from 'react';

import { MockContext } from '../../../context';
import GuideCardGama from '../../common/GuideCardGama';

function GuideWrap() {
  const { data } = useContext(MockContext);

  return (
    <>
      <div className="guide-wrapper pt-110">
        <div className="container">
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

export default GuideWrap;
