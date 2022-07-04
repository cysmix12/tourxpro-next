import React from 'react';
import Link from 'next/link';

function WidgetPackageTag() {
  return (
    <>
      <aside className="package-widget-style-2 widget-tag-cloud mt-30">
        <div className="widget-title text-center">
          <h4>Package Tag</h4>
        </div>
        <div className="tag-cloud widget-body">
          <Link href={'#'}>Adventure</Link>
          <Link href={'#'}>Trip</Link>
          <Link href={'#'}>Guided</Link>
          <Link href={'#'}>Historical</Link>
          <Link href={'#'}>Road Trips</Link>
          <Link href={'#'}>Tourist</Link>
          <Link href={'#'}>Weekend</Link>
          <Link href={'#'}>Hill</Link>
        </div>
      </aside>
    </>
  );
}

export default WidgetPackageTag;
