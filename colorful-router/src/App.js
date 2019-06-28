import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
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
    const { colors } = this.state;
    const colorListComponent = () => (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/colors" />
          <Route exact path="/colors">
            <ColorList colors={colors} />
          </Route>
          <Route path="/colors/new" render={(props) => <NewColor addColor={this.handleAdd} { ...props }></NewColor>} />
          <Route
            path="/colors/:name"
            render={({ match, ...rest }) => {
              {
                let id = match.params.name;
                id = Number(id);
                if (Number.isNaN(id) || id > colors.length) {
                  return (<div>Not found</div>);
                }
              }
              return <Color color={colors[match.params.name]} {...rest} />; }
            }
          />
        </Switch>
      </Router>
    );

    return (
      colorListComponent()
    );
  }
}

export default App;
