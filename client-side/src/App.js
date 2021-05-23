import React from "react";
// import "./App.css";
import Header from "./components/Header/Header.js";
// import TinderCards from "./TinderCards";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons.js";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <TinderCards /> */}
      <SwipeButtons />
    </div>
  );
}

export default App;