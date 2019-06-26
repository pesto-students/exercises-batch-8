/* eslint-disable react/no-unused-state */

import React from 'react';
import PropTypes from 'prop-types';

function withMouse(Component) {
  class WithMouse extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        x: 0,
        y: 0,
      };
      this.handleMouseMovement = this.handleMouseMovement.bind(this);
    }

    handleMouseMovement(event) {
      const { clientX, clientY } = event;
      this.setState({
        x: clientX,
        y: clientY,
      });
    }

    render() {
      return (
        <div style={{ height: '100%' }} onMouseMove={this.handleMouseMovement}>
          <Component mouse={this.state} {...this.props} />
        </div>
      );
    }
  }
  WithMouse.displayName = `withMouse(${Component.displayName || Component.name})`;
  return WithMouse;
}

class App extends React.Component {
  render() {
    const { mouse } = this.props;

    return (
      <div className="container">
        {mouse ? (
          <h1>
            The mouse position is (
              {mouse.x}, {mouse.y}
            )
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
    y: PropTypes.number.isRequired,
  }).isRequired,
};

const AppWithMouse = withMouse(App);

export default AppWithMouse;
