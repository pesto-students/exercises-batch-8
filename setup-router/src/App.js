import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error404 from './components/Error404';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <Router>

        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Error404} />
        </Switch>

      </Router>
    );
  }
}

export default App;
