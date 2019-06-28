import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

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
      colorClicked: '',
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState({ colors: [newColor, ...this.state.colors] });
  }

  handleColorClick = (color) => {
    this.setState({ colorClicked: color });
  }

  render() {
    const { colors, colorClicked } = this.state;
    const colorListComponent = () => (
      <ColorList colors={colors} onClick={this.handleColorClick} />
    );

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/colors" render={() => colorListComponent()} />
          <Route
            path="/colors/new"
            render={routeProps => (
              <NewColor addColor={this.handleAdd} {...routeProps} />
            )}
          />
          <Route
            path={`/colors/${colorClicked.name}`}
            render={routeProps => (
              <Color color={colorClicked} {...routeProps} />
            )}
          />
          <Redirect to="/colors" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
