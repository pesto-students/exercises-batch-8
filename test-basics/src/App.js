import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  // eslint-disable-next-line react/sort-comp, class-methods-use-this
  handleStrings(string) {
    return Boolean(string);
  }

  constructor(props) {
    super(props);
    this.state = {
      on: false,
      input: '',
      mainColor: 'blue',
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onButtonClick() {
    this.setState((state) => {
      return {
        ...state,
        on: !state.on,
      };
    });
  }

  onInputChange(e) {
    this.setState((state) => {
      return {
        ...state,
        input: e.currentTarget.value,
      };
    });
  }

  render() {
    const { on, input, mainColor } = this.state;
    return (
      <div className="App">
        <h1 className={mainColor}>Welcome to React</h1>
        <button
          type="button"
          onClick={this.onButtonClick}
          className="button-state"
        >
          {on ? 'Yes!' : 'No!'}
        </button>
        <h2>{input || ''}</h2>
        <input type="text" onChange={this.onInputChange} />
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    const { hide, address } = this.props;
    return hide ? null : <a href={address}>{address}</a>;
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
