import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import HomePageTwoHeader from "../common/HomePageTwoHeader";
import Loading from "../common/Loading";
import HomePageTwo from "../pages/homeTwo/HomePageTwo";

function HomeageTowLayout() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);
  return (
    <>
      {load ? (
        <Loading />
      ) : (
        <>
         <HomePageTwoHeader />
      <HomePageTwo />
      <Footer className="footer-area mt-110" />
        </>
      )}
    </>
  );
}

export default HomeageTowLayout;
