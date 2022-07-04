import React from 'react'
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/App";
import MainLayout from "./components/layout/MainLayout";
import HomePageTwoLayout from "./components/layout/HomeageTowLayout";
import About from "./components/pages/about/About";
import BlogSidebar from "./components/pages/blog/BlodSidebar/BlogSidebar";
import BlogDetailsPage from "./components/pages/blog/blogdetails/BlogDetailsPage";
import BlogStandard from "./components/pages/blog/BlogStandard/BlogStandard";
import Contact from "./components/pages/contact/Contact";
import DestinationDetails from "./components/pages/destinationDetails/DestinationDetails";
import Destinations from "./components/pages/destinetion/Destinatination";
import Error from "./components/pages/error/Error";
import FaqPage from "./components/pages/faq/FaqPage";
import GuidePage from "./components/pages/guide/GuidePage";
import PackageDetails from "./components/pages/packageDetails/PackageDetails";
import PackageGrid from "./components/pages/packageGrid/PackageGrid";
import PackageSidebar from "./components/pages/packageSidebar/PackageSIdebar";
import PackageStandard from "./components/pages/packageStandard/PackageStandard";
import GallaryPage from "./components/pages/gallary/GallaryPage";
import BlogGridPage from "./components/pages/blog/BlogGrid/BlogGridPage";
import SimpleReactLightbox from "simple-react-lightbox";

// import all css
import "./index.css";
import HomethreeLayout from './components/layout/HomethreeLayout';
import HomeFourLayout from './components/layout/HomeFourLayout';

/*
 * Version :Tourx-pro 0.1
 * Event : Rendering all content to web.
 * Actions: Define all routes and page.
 * @return html
 * */
// default Warning Error hide



function Root() {
  return (
    <>
    <BrowserRouter basename="/">
      <Switch>
        {/*main layout*/}
        <Route exact path="/" component={MainLayout} />
        {/* secound layout */}
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/index2`}
          component={HomePageTwoLayout}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/index3`}
          component={HomethreeLayout}
        />
        <Route
          exact
          path={`${process.env.PUBLIC_URL}/index4`}
          component={HomeFourLayout}
        />
        {/* all inner page load layout component */}
        <Layout>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about`}
            component={About}
          />

          {/* desination pages */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/destination`}
            component={Destinations}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/destination-details`}
            component={DestinationDetails}
          />

          {/* all package pages component */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/package`}
            component={PackageGrid}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/package-sidebar`}
            component={PackageSidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/package-standard`}
            component={PackageStandard}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/package-details`}
            component={PackageDetails}
          />

          {/* all blog pages */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog`}
            component={BlogGridPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-details`}
            component={BlogDetailsPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-standard`}
            component={BlogStandard}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-sidebar`}
            component={BlogSidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/guide`}
            component={GuidePage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/faq`}
            component={FaqPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/gallary`}
            component={GallaryPage}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact`}
            component={Contact}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/error`}
            component={Error}
          />
        </Layout>
      </Switch>
    </BrowserRouter>
  </>
  )
}

export default Root
ReactDOM.render(
  <React.StrictMode>
    <SimpleReactLightbox>
      <Root />
    </SimpleReactLightbox>
  </React.StrictMode>,
  document.getElementById("root")
);
