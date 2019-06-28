import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
  }

  handleClick = () => {
    this.setState({ ...this.state, on: !this.state.on });
  }

  handleChange = (e) => {
    this.setState({ ...this.state, input: e.currentTarget.value });
  }

  handleStrings = str => str.length > 0;

  render() {
    const { input, on, mainColor } = this.state;
    return (
      <div className="App">
        <h1 className={mainColor}>Welcome to React</h1>

        <p className="button-state">{on ? 'Yes!' : 'No!'}</p>
        <button onClick={this.handleClick}>Click me</button>

        <h2>{input}</h2>
        <input type="text" value={input} onChange={this.handleChange} />
      </div>
    );
  }
}


export class Link extends Component {
  render() {
    const { address, hide } = this.props;
    return hide ? null : <a href={address}>link</a>;
  }
}

Link.propTypes = {
  address: PropTypes.string.isRequired,
  hide: PropTypes.bool.isRequired,
};

export default App;
