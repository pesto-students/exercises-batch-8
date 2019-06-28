import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import './styles/App.css';
import ColorList from './components/ColorList';
import NotFound from './components/NotFound';
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
    const { colors } = this.state;
    this.setState({ colors: [newColor, ...colors] });
  }

  render() {
    const { colors } = this.state;
    const colorListComponent = () => <ColorList colors={colors} />;

    const renderColorComponent = ({ location: { state }, match: { params } }) => {
      if (state && state.color) {
        return <Color color={state.color} />;
      }
      const colorName = params.color;
      const colorSelected = colors.find(color => color.name === colorName);
      if (colorSelected) {
        return <Color color={colorSelected} />;
      }
      return <Redirect to="/" />;
    };

    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/colors" />} />
          <Route exact path="/colors" component={colorListComponent} />
          <Route exact path="/colors/new" render={() => <NewColor addColor={this.handleAdd} />} />
          <Route exact path="/colors/:color" render={renderColorComponent} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
