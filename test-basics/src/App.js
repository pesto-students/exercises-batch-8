import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
  }

  toggleState = () => {
    const { on } = this.state;
    this.setState({
      on: !on,
    });
  }

  handleChange = (event) => {
    const { value } = event.target || event.currentTarget;
    this.setState({
      input: value,
    });
  }

  handleStrings = (mayBeString) => {
    return Boolean(typeof mayBeString === 'string' && mayBeString.length);
  }

  render() {
    const { mainColor, on, input } = this.state;
    const appClass = classNames(
      'App',
      { [mainColor]: true },
    );
    return (
      <div className={appClass}>
        <h1>Welcome to React</h1>
        <h2>{input}</h2>
        <input type="text" value={input} onChange={this.handleChange} />
        <br />
        <button type="button" className="btn" onClick={this.toggleState}>Toggle State</button>
        <p className="button-state">{on ? 'Yes!' : 'No!'}</p>
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    const { address, hide } = this.props;
    if (hide) {
      return null;
    }
    return <a href={address}>{address}</a>;
  }
}

Link.propTypes = {
  address: PropTypes.string,
  hide: PropTypes.bool,
};

Link.defaultProps = {
  hide: false,
  address: '',
};

export default App;
