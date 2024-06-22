import React, { useRef } from "react";
import Header from "./Header";
import HeroComponent from "./HeroComponent";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";
import Component5 from "./Component5";
import Footer from "./Footer";

function home() {
  return (
    <div style={{fontFamily: 'sans-serif',
        padding: '1em',
        backgroundColor: 'rgb(184, 228, 198)'}}>
    <Header />
      <br />
      <HeroComponent />
      <br />
      <Component2 />
      <br />
      <Component3 />
      <br />
      <Component4 />
      <br />
      <Component5 />
      <br />
      <Footer />
    </div>
  )
}

export default home