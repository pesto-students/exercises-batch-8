import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" render={() => (<Redirect to="/home" />)} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
