import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './styles/App.css';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
