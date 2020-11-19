import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    const names = ["ashwin", "ajay", "utwej", "naveen", "anirudh", "harsha"];
    return (
      <div id="main">
        <ol key="relativeList">
          {names.map((name, index) => (
            <li key={`relativeListItem${index + 1}`}>{name}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
