/* eslint-disable import/no-unresolved */
import React, { Component, Fragment } from 'react';

import { BrowserRouter as Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
      </Fragment>
    );
  }
}

export default App;
