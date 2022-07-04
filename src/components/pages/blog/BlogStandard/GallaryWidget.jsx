import React from "react";
import {SRLWrapper} from "simple-react-lightbox";
function GallaryWidget() {
  
  return (
    <>
    <SRLWrapper>
      <aside className="blog-widget widget-gallary mt-30">
        <div className="widget-title">
          <h4>Gallery</h4>
        </div>
        <ul className=" widget-body">
          <li>
            <a
              href={process.env.PUBLIC_URL + "/images/gallary/WidgetfullIMG1.png"}
              data-fancybox="gallery"
              data-caption="Caption Here"
              className="gallary-overlay"
            >
              <img src={process.env.PUBLIC_URL + "/images/gallary/sb-gallary-1.png"} alt="BlogStandardIMG" />
            </a>
          </li>
          <li>
            <a
              href={process.env.PUBLIC_URL + "/images/gallary/WidgetfullIMG3.png"}
              data-fancybox="gallery"
              data-caption="Caption Here"
              className="gallary-overlay"
            >
              <img src={process.env.PUBLIC_URL + "/images/gallary/sb-gallary-2.png"} alt="BlogStandardIMG" />
            </a>
          </li>
          <li>
            <a
              href={process.env.PUBLIC_URL + "/images/gallary/WidgetfullIMG5.png"}
              data-fancybox="gallery"
              data-caption="Caption Here"
              className="gallary-overlay"
            >
              <img src={process.env.PUBLIC_URL + "/images/gallary/sb-gallary-3.png"} alt="BlogStandardIMG" />
            </a>
          </li>
          <li>
            <a
              href={process.env.PUBLIC_URL + "/images/gallary/WidgetfullIMG2.png"}
              data-fancybox="gallery"
              data-caption="Caption Here"
              className="gallary-overlay"
            >
              <img src={process.env.PUBLIC_URL + "/images/gallary/sb-gallary-4.png"} alt="BlogStandardIMG" />
            </a>
          </li>
          <li>
            <a
              href={process.env.PUBLIC_URL + "/images/gallary/WidgetfullIMG4.png"}
              data-fancybox="gallery"
              data-caption="Caption Here"
              className="gallary-overlay"
            >
              <img src={process.env.PUBLIC_URL + "/images/gallary/sb-gallary-5.png"} alt="BlogStandardIMG" />
            </a>
          </li>
          <li>
            <a
              href={process.env.PUBLIC_URL + "/images/gallary/WidgetfullIMG6.png"}
              data-fancybox="gallery"
              data-caption="Caption Here"
              className="gallary-overlay"
            >
              <img src={process.env.PUBLIC_URL + "/images/gallary/sb-gallary-6.png"} alt="BlogStandardIMG" />
            </a>
          </li>
        </ul>
      </aside>
      </SRLWrapper>
    </>
  );
}

export default GallaryWidget;
