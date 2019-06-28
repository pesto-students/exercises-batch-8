import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./styles/App.css";
import ColorList from "./components/ColorList";
import NewColor from "./components/NewColor";
import Color from "./components/Color";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: [
        {
          name: "red",
          hex: "#FF0000"
        },
        {
          name: "green",
          hex: "#00FF00"
        },
        {
          name: "blue",
          hex: "#0000FF"
        }
      ]
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(newColor) {
    this.setState({ colors: [newColor, ...this.state.colors] });
  }
  render() {
    const colorListComponent = props => (
      <ColorList {...props} colors={this.state.colors} />
    );
    const newColorComponent = props => (
      <NewColor {...props} addColor={this.handleAdd} />
    );
    return (
      <Switch>
        <Route exact path="/colors" render={colorListComponent} />
        <Route exact path="/colors/new" render={newColorComponent} />
        <Route
          exact
          path="/colors/:color"
          render={props => {
            const { color: colorName } = props.match.params;
            const currentColorIndex = this.state.colors.findIndex(
              color => color.name === colorName
            );
            return <Color color={this.state.colors[currentColorIndex]} />;
          }}
        />
        <Redirect to="/colors" />
      </Switch>
    );
  }
}

export default App;
