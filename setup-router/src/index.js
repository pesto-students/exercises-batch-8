import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";

import registerServiceWorker from "./registerServiceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";

const routing = (
  <Router>
    <div>
      <Route path="/" component={App} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
registerServiceWorker();
