import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import "./App.css";

class App extends Component {
  render() {
    const name = "john doe";
    return (
      <div className="navbar bg-primary">
        <Navbar />
      </div>
    );
  }
}

export default App;
