import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Posts from './components/Posts';
import ViewPost from './components/ViewPost';
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" render={() => <Redirect to="/posts" />} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/post/:id" component={ViewPost} />
    </Router>
  );
}

export default App;
