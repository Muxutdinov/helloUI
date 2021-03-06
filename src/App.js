import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Introo from "./components/Introo";
import Develop from "./components/Develop";
import Dojust from "./components/Dojust";
import LastComp from "./components/LastComp";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Introo />
      <Develop />
      <Dojust />
      <LastComp />
    </div>
  );
};

export default App;
