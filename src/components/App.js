import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    };
    this.createText = this.createText.bind(this);
  }

  createText() {
    this.setState({ isShow: true });
  }

  render() {
    return (
      <div id="main">
        <button id="click" onClick={this.createText}></button>
        {this.state.isShow && (
          <p id="para">
            Hello, I've learnt to use the full-stack evaluation tool. This makes
            me so happy
          </p>
        )}
        {/* Do not remove this main div!! */}
      </div>
    );
  }
}

export default App;
