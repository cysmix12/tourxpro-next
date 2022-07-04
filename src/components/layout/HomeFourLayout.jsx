import React, { useEffect, useState } from "react";
import HomeFour from "../pages/homeFour/HomeFour";
import Footer from "../common/Footer";
import Loading from "../common/Loading";
import HeaderFour from "../pages/homeFour/HeaderFour";

function HomeFourLayout() {
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
          <HeaderFour />
          <HomeFour />
          <Footer className="footer-area" />
        </>
      )}
    </>
  );
}

export default HomeFourLayout;
