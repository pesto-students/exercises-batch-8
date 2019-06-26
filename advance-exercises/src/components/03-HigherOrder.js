/*
  Exercise:

  Make `withMouse` a "higher-order component" that sends the mouse position
  to the component as props (hint: use `event.clientX` and `event.clientY`).

*/
import React from "react";
import PropTypes from "prop-types";

function withMouse(Component) {
  return class extends React.Component {
    state = {
      x: 0,
      y: 0
    };
    handleMouseMove = event => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    };
    render() {
      return (
        <Component
          {...this.props}
          mouse={this.state}
          handleMouseMove={this.handleMouseMove}
        />
      );
    }
  };
}

class App extends React.Component {
  render() {
    const { mouse, handleMouseMove } = this.props;

    return (
      <div className="container" onMouseMove={handleMouseMove}>
        {mouse ? (
          <h1>
            The mouse position is ({mouse.x}, {mouse.y})
          </h1>
        ) : (
          <h1>We don&#39;t know the mouse position yet :(</h1>
        )}
      </div>
    );
  }
}

App.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
  }).isRequired
};

const AppWithMouse = withMouse(App);

export default AppWithMouse;
