/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles/App.css';

/* eslint-disable react/no-multi-comp, react/no-unused-state */
class App extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleStrings = string => Boolean(string);
  }

  state = {
    on: false,
    input: '',
    mainColor: 'blue',
  }

  handleInputChange = (event) => {
    this.setState({
      input: event.currentTarget.value,
    });
  };

  render() {
    const { mainColor, input, on } = this.state;

    return (
      <div className={mainColor}>
        <h1>Welcome to React</h1>
        <h2>{input}</h2>
        <input type="text" value={input} onChange={this.handleInputChange} />
        <p className="button-state">{on ? 'Yes!' : 'No!'}</p>
        <button
          type="button"
          onClick={() => this.setState({ on: !on })}
        >
Click me!

        </button>

      </div>
    );
  }
}

export class Link extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const { address, hide, children } = this.props;
    if (hide) {
      return null;
    }
    return <a href={address}>{ children}</a>;
  }
}
Link.propTypes = {
  address: PropTypes.string.isRequired,
  hide: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
};
export default App;
