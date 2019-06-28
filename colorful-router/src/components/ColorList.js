/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import '../styles/ColorList.css';

const ColorList = (props) => {
  const handleClick = (color) => {
    const { onClick } = props;
    onClick(color);
  };

  const colorLinks = props.colors.map(color => (
    <li key={color.hex} onClick={() => handleClick(color)}>
      <Link to={`/colors/${color.name}`}>
        {color.name}
      </Link>
    </li>
  ));
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to the Colorful Router.</h1>
        <h1>Add a color</h1>
      </header>
      <div className="App-intro">
        <p>Please select a color.</p>
        <ul>
          {colorLinks}
        </ul>
      </div>
    </div>
  );
};

ColorList.propTypes = {
  onClick: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default ColorList;
