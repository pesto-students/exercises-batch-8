import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/Color.css';

const Color = (props) => {
  const { colors } = props;
  const color = colors.find(colorInstance => colorInstance.name === props.match.params.color);
  return (
    <div className="Color" style={{ backgroundColor: color.hex }}>
      <p>this is {color.name}.</p>
      <p>Isnt it beautiful?</p>
      <p><Link to="/">Go back</Link></p>
    </div>
  );
};

Color.propTypes = {
  colors: PropTypes.shape([{
    hex: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }]).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ color: PropTypes.string.isRequired }),
  }).isRequired,
};

export default withRouter(Color);
