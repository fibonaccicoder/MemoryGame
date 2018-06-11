
import React, { Component } from "react";
import PicCards from "./components/picCards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import imagecards from './imagecards.json';
import "./App.css";


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src= className="App-logo" alt="logo" /> */}
          <h1 className="App-title">MEMORY GAME</h1>
        </header>
        <p className="App-intro">
          Click on images to earn points, but don't click on any more than once!        </p>
      </div>
    );
  }
}

export default App;
