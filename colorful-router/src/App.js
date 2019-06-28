import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

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
    this.setState((prevState) => {
      return {
        ...prevState,
        colors: [newColor, ...prevState],
      };
    });
  }

  render() {
    const { colors } = this.state;
    const colorListComponent = () => (
      <ColorList colors={colors} />
    );

    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/colors" />} />
            <Route exact path="/colors" component={colorListComponent} />
            <Route exact path="/colors/new" component={NewColor} />
            <Route
              path="/colors/:color"
              exact
              render={(props) => {
                const { match: { params: { color } } } = props;
                const selectedColor = colors.find(c => c.name === color);
                return <Color color={selectedColor} {...this.state} />;
              }}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
