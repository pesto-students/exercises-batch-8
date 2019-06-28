import React, { Component } from "react";

import "./styles/App.css";

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  constructor() {
    super();
    this.buttonClicked = this.buttonClicked.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  state = {
    on: false,
    input: "",
    mainColor: "blue"
  };

  onInputChange(event) {
    this.setState({ input: event.currentTarget.value });
  }

  buttonClicked() {
    this.setState({ on: !this.state.on });
  }

  handleStrings(string) {
    return string.length > 0;
  }

  render() {
    return (
      <div className="App">
        <h1 className={this.state.mainColor}>Welcome to React</h1>
        <button className="button-state" onClick={this.buttonClicked}>
          {this.state.on ? "Yes!" : "No!"}
        </button>
        <h2>{this.state.input}</h2>
        <input type="text" onChange={this.onInputChange} />
        <Link address="www.google.com" hide false />
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    const isHide = this.props.hide;
    if (isHide) {
      return null;
    }
    return <a href={this.props.address}>{this.props.address}</a>;
  }
}

export default App;
