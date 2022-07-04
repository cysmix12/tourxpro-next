import React from 'react'
import { Link } from 'react-router-dom'

function BlogArea3() {
    const scrollTop = ()=>window.scrollTo({top: 0, behavior: "smooth" })
  return (
    <>
     <div className="blog-area blog-style-two pt-110 pb-110">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-sm-10">
              <div className="section-head-alpha">
                <h2>Recent Post</h2>
                <p>Duis rutrum nisl urna maecenas vel libero faucibus nisi vene natis hendrerit aid lectus suspendissendt.</p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-10">
              <div className="package-btn text-lg-end">
                <Link to={`${process.env.PUBLIC_URL}/blog-sidebar`} onClick={scrollTop} className="button-fill-primary all-package-btn">View All Post</Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-card-beta">
                <div className="blog-thumb">
                  <Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>
                    <img src={process.env.PUBLIC_URL + "images/blog/home3-blog1.png"} alt="" />
                  </Link>
                  <div className="blog-lavel">
                    <Link to={"#"}>Novembar 16, 2021</Link>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-body-top">
                    <Link to={"#"} className="blog-writer"><i className="bi bi-person-circle" /> By John Smith </Link>
                    <Link to={"#"} className="blog-comments"><i className="bi bi-calendar3" /> Novembar 16, 2021</Link>
                  </div>
                  <h4 className="blog-title"><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>vitae tempor convallis, mi ligula an
                      suscipit nunc, ornare suscipit.</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card-beta">
                <div className="blog-thumb">
                  <Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>
                    <img src={ process.env.PUBLIC_URL + "/images/blog/home3-blog2.png"} alt="" />
                  </Link>
                  <div className="blog-lavel">
                    <Link to={"#"}>Novembar 16, 2021</Link>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-body-top">
                    <Link to={"#"} className="blog-writer"><i className="bi bi-person-circle" /> By John Smith </Link>
                    <Link to={"#"} className="blog-comments"><i className="bi bi-calendar3" /> Novembar 16, 2021</Link>
                  </div>
                  <h4 className="blog-title"><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>Mauris commodo massa vel diamnat
                      feugiat sagittis Nunc maxim.</Link></h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-card-beta">
                <div className="blog-thumb">
                  <Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>
                    <img src={process.env.PUBLIC_URL +  "/images/blog/home3-blog3.png"} alt="" />
                  </Link>
                  <div className="blog-lavel">
                    <Link to={"#"}>Novembar 16, 2021</Link>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-body-top">
                    <Link to={"#"} className="blog-writer"><i className="bi bi-person-circle" /> By John Smith </Link>
                    <Link to={"#"} className="blog-comments"><i className="bi bi-calendar3" /> Novembar 16, 2021</Link>
                  </div>
                  <h4 className="blog-title"><Link to={`${process.env.PUBLIC_URL}/blog-details`} onClick={scrollTop}>Nulla urna leo, volutpat eu maurisa eget
                      luctus malesuada urna.</Link></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </>
  )
}

export default BlogArea3