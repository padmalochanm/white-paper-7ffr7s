import "./styles.css";
import React, { useRef } from "react";
import Header from "./components/Header";
import HeroComponent from "./components/HeroComponent";
import Component2 from "./components/Component2";
import Component3 from "./components/Component3";
import Component4 from "./components/Component4";
import Component5 from "./components/Component5";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
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
  );
}

export default App;
