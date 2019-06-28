import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { on } = this.state;
    this.setState({ on: !on });
  }

  onInputChange(e) {
    const { value: input } = e.currentTarget;
    this.setState({ input });
  }

  // eslint-disable-next-line class-methods-use-this
  handleStrings(string) {
    return Boolean(string);
  }

  render() {
    const { mainColor, on, input } = this.state;
    return (
      <div className="App">
        <h1 className={mainColor}>Welcome to React</h1>

        <p className="button-state">{on ? 'Yes!' : 'No!'}</p>
        <button type="button" onClick={this.onButtonClick}>Click me</button>

        <h2 className="">{input}</h2>
        <input onChange={this.onInputChange} value={input} />
      </div>
    );
  }
}

export class Link extends Component {
  render() {
    const { hide, address } = this.props;
    return hide ? null : <a href={address}>Link</a>;
  }
}
Link.defaultProps = {
  hide: false,
  address: '',
};
Link.propTypes = {
  address: PropTypes.string,
  hide: PropTypes.bool,
};
export default App;
