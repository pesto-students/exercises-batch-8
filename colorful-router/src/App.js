import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './styles/App.css';
import ColorList from './components/ColorList';
import Color from './components/Color';
import NewColor from './components/NewColor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: 'red',
          hex: '#FF0000',
        },
        {
          name: 'green',
          hex: '#00FF00',
        },
        {
          name: 'blue',
          hex: '#0000FF',
        },
      ],
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState({ colors: [newColor, ...this.state.colors] });
  }

  render() {
    const colorListComponent = () => (
      <ColorList colors={this.state.colors} />
    );
    const newColorComponent = () => (
      <NewColor addColor={this.handleAdd} />
    );
    const colorComponent = () => (
      <Color colors={this.state.colors} />
    );

    return (
      <div>
        <Router>
          <Switch>
            <Route exact render={() => colorListComponent()} path="/" />
            <Route path="/new" render={() => newColorComponent()} />
            <Route path="/:color" component={() => colorComponent()} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
