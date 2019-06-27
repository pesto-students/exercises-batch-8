import React, { Component } from 'react';

import '../styles/App.css';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        <li className="active">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    );
  }
}