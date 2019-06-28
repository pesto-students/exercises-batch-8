import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  state = {
    on: false,
    input: '',
    mainColor: 'blue',
    message: 'No!',
    organizationName: '',
  };

  handleOnChange = (e) => {
    this.setState({ organizationName: e.currentTarget.value });
  }

  handleStrings = (str) => {
    if (str.length) {
      return true;
    }
    return false;
  }

  render() {
    const {
      mainColor, message, organizationName,
    } = this.state;
    return (
      <div className="App">
        <h1 className={mainColor}>Welcome to React</h1>
        <p className="button-state">{message}</p>
        <button
          type="button"
          onClick={() => {
            this.setState({ message: 'Yes!' });
          }}
        >
          Click Me
        </button>

        <h2>{organizationName}</h2>
        <input
          type="text"
          name="organizationName"
          value={organizationName}
          onChange={this.handleOnChange}
        />
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
    return (
      <a href={address}>Link</a>
    );
  }
}

Link.propTypes = {
  address: PropTypes.string,
  hide: PropTypes.bool,
};

Link.defaultProps = {
  address: '',
  hide: false,
};

export default App;
