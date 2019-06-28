import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  constructor() {
    super();
    this.state = {
      on: false,
      input: '',
      mainColor: 'blue',
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }
  onButtonClick() {
    this.setState({ ...this.state, pIsYes: !this.state.pIsYes });
  }
  onInputChange(e) {
    this.setState({ ...this.state, input: e.currentTarget.value });
  }
  // eslint-disable-next-line class-methods-use-this
  handleStrings(string) {
    return Boolean(string);
  }
  render() {
    return (
      <div className="App">
        <h1 className={this.state.mainColor}>Welcome to React</h1>
        <p className="button-state">{this.state.pIsYes ? 'Yes!' : 'No!'}</p>
        <button onClick={this.onButtonClick}>Click me</button>
        <h2 className="">{this.state.input}</h2>
        <input onChange={this.onInputChange} value={this.state.input} />
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    return this.props.hide ? null : <a href={this.props.address}>Link</a>;
  }
}

export default App;
