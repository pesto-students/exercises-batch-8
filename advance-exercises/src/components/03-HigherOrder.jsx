/*
  Exercise:

  Make `withMouse` a "higher-order component" that sends the mouse position
  to the component as props (hint: use `event.clientX` and `event.clientY`).

*/
import React from 'react';
import PropTypes from 'prop-types';

function withMouse(Component) {
  return class extends React.Component {
    constructor() {
      super();
      this.state = { mouse: { x: '0', y: '0' } };
      this.handleMouseMove = this.handleMouseMove.bind(this);
    }

    handleMouseMove(e) {
      this.setState({ mouse: { x: e.clientX, y: e.clientY } });
    }

    render() {
      return (
        <div onMouseMove={this.handleMouseMove}>
          <Component mouse={this.state.mouse} />
        </div>
      );
    }
  };
}

const App = (props) => {
  const { mouse } = props;
  return (
    <div className="container">
      {mouse ? (
        <h1>
          The mouse position is ({mouse.x}, {mouse.y})
        </h1>
      ) : (
        <h1>We don&#39;t know the mouse position yet :(</h1>
      )}
    </div>
  );
};

App.propTypes = {
  mouse: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
  }).isRequired,
};

const AppWithMouse = withMouse(App);

export default AppWithMouse;
