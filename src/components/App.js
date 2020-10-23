import React, { Component, useState } from "react";
// import "../styles/App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.renderParagraph = () => {
      this.setState({
        para: (
          <p id="para">
            "Hello, I've learnt to use the full-stack evaluation tool. This
            makes me so happy"
          </p>
        ),
        display: true
      });
    };
  }

  render() {
    return (
      <>
        <div id="main">
          <button onClick={this.renderParagraph} id="click"></button>
          {this.state.para}
        </div>
      </>
    );
  }
}

export default App;
