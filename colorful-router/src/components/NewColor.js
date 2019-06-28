import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

import '../styles/NewColor.css';

class NewColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      hex: '#ffffff',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const { addColor } = this.props;
    e.preventDefault();
    addColor({ ...this.state });
    this.setState({
      redirect: true,
    });
  }

  render() {
    const { redirect, name, hex } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="new-color">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="name">Color name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter a name for the color"
              onChange={this.handleChange}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="hex">Color value</label>
            <input
              type="color"
              name="hex"
              id="hex"
              onChange={this.handleChange}
              value={hex}
            />
          </div>
          <input type="Submit" value="Add this color" readOnly />
        </form>
      </div>
    );
  }
}

NewColor.propTypes = {
  addColor: PropTypes.func.isRequired,
};

export default NewColor;
