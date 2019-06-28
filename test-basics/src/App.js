import React, { Component } from 'react';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
    message: 'No!',
  };

  handleClick = () => this.setState({ message: 'Yes!' });

  handleInputChange = event => this.setState({ input: event.currentTarget.value });

  handleStrings = str => str.length > 0;
  render() {
    const { input, mainColor, message } = this.state;
    return (
      <div className="App">
        <h1 className={mainColor}>Welcome to React</h1>
        <button type="button" onClick={this.handleClick}>Click Me</button>
        <p className="button-state">{message}</p>
        <input type="text" name="test" onChange={this.handleInputChange} />
        <h2>{input}</h2>
        <Link address="www.google.com" />
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { address, hide } = this.props;
    return hide ? null : <a href={address}>Link</a>;
  }
}

export default App;
