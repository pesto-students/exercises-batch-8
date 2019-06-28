import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/Color.css';

const Color = (props) => {
  const { color } = props.location.state;
  return (
    <div className="Color" style={{ backgroundColor: color.hex }}>
      <p>this is {color.name}.</p>
      <p>Isnt it beautiful?</p>
      <p><Link to="/">Go back</Link></p>
    </div>
  );
};

Color.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      color: PropTypes.shape({
        hex: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Color;
