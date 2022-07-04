import React from 'react';
import Link from 'next/link';

function BannerWidget() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <aside className="widget-banner mt-30">
        <Link onClick={scrollTop} href={`/package-details`}>
          <img
            src={'/images/banner/sidebar-banner.png'}
            alt="PackgerIMG"
            className="img-fluid"
          />
        </Link>
      </aside>
    </>
  );
}

export default BannerWidget;
