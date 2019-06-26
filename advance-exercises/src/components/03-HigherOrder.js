/* eslint-disable import/no-unresolved */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/jsx-filename-extension */
/*
  Exercise:

  Make `withMouse` a "higher-order component" that sends the mouse position
  to the component as props (hint: use `event.clientX` and `event.clientY`).

*/
import React from 'react';
import PropTypes from 'prop-types';

function withMouse(Component) {
  return class A extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mouse: {
          x: 0,
          y: 0,
        },
      };
      this.captureMouseCoordinates = this.captureMouseCoordinates.bind(this);
    }

    captureMouseCoordinates(event) {
      console.log(event.screenX, event.screenY);
      this.setState({
        mouse: {
          x: event.screenX,
          y: event.screenY,
        },
      });
    }

    render() {
      const { mouse } = this.state;
      return (
        <div onMouseMove={this.captureMouseCoordinates}>
          <Component mouse={mouse} />
        </div>
      );
    }
  };
}

class App extends React.Component {
  render() {
    const { mouse } = this.props;

    return (
      <div className="container">
        {mouse ? (
          <h1>
            The mouse position is (
            {mouse.x}
,
            {' '}
            {mouse.y}
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
