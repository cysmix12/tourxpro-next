import React from "react";
import Footer from "./common/Footer";
import Header from "./common/Header";

function App(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer className="footer-area mt-110" />
    </>
  );
}

export default App;
