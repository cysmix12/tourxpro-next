import React from 'react';
import Link from 'next/link';

function TagWidget() {
  return (
    <>
      <aside className="blog-widget widget-tag-cloud mt-30">
        <div className="widget-title">
          <h4>Tags</h4>
        </div>
        <div className="tag-cloud widget-body">
          <Link href={'#'}>Adventure</Link>
          <Link href={'#'}>Trip</Link>
          <Link href={'#'}>Guided</Link>
          <Link href={'#'}>Historical</Link>
          <Link href={'#'}>Road Trips</Link>
          <Link href={'#'}>Tourist</Link>
          <Link href={'#'}>Cultural</Link>
          <Link href={'#'}>Natural Tour</Link>
          <Link href={'#'}>Journey</Link>
        </div>
      </aside>
    </>
  );
}

export default TagWidget;
