import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';

import '../styles/App.css';

export default class Navbar extends Component {
  render() {
    return (
      <ul className="nav">
        {/* FIXME: 'active' class name should be on li and not on 'a' */}
        <li><NavLink to="/" component={Home}> Home</NavLink></li>
        <li><NavLink to="/about" component={About}> About Us</NavLink></li>
        <li><NavLink to="/contact" component={Contact}> Contact</NavLink></li>
      </ul>
    );
  }
}
