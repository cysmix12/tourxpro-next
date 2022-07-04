import React, { useEffect, useState } from "react";
import Footer from "../common/Footer";
import HomePageThreeHeader from "../common/HomePageThreeHeader";
import Loading from "../common/Loading";
import HomePage3 from "../pages/homeThree/HomePage3";

function HomethreeLayout() {
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
          <HomePageThreeHeader />
          <HomePage3 />
          <Footer className="footer-area" />
        </>
      )}
    </>
  );
}

export default HomethreeLayout;
