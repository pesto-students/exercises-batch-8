/*
  Q1:

  Implement a radio group form control with the API found in <CompoundComponents> (Line 69).

  - Clicking a <RadioOption> should update the value of <RadioGroup>
  - The selected <RadioOption> should pass the correct value to its <RadioIcon>
  - The `defaultValue` should be set on first render.

  - Implement an `onChange` prop that communicates the <RadioGroup>'s state
    back to the parent so it can use it to render
  - Implement keyboard controls on the <RadioGroup>
    - Hint: Use tabIndex='0' on the <RadioOption>s so the keyboard will work
    - Enter and space bar should select the option
    - Arrow right, arrow down should select the next option
    - Arrow left, arrow up should select the previous option
*/

import React from 'react';
import PropTypes from 'prop-types';

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    const { defaultValue } = this.props;
    this.state = {
      selected: defaultValue,
    }

    this.onChange = this.onChange.bind(this);
  }

  static propTypes = {
    defaultValue: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  };

  onChange(value) {
    this.setState({
      selected: value,
    })
  }

  render() {
    const { selected } = this.state;
    const { children } = this.props;
    return React.Children.map(children, (child) => React.cloneElement(child, { selected, onChange: this.onChange }));
  }
}

class RadioOption extends React.Component {
  static propTypes = {
    value: PropTypes.string,
    selected: PropTypes.string,
    children: PropTypes.string.isRequired,
  };

  render() {
    const { value, children, selected, onChange } = this.props;
    return (
      <span onClick={() => onChange(value)}>
        <RadioIcon isSelected={selected === value} /> {children} &nbsp;
      </span>
      
    );
  }
}

class RadioIcon extends React.Component {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <div
        style={{
          borderColor: this.props.isSelected ? 'red' : '#ccc',
          borderWidth: 3,
          borderStyle: this.props.isSelected ? 'inset' : 'outset',
          height: 16,
          width: 16,
          display: 'inline-block',
          cursor: 'pointer',
          background: this.props.isSelected ? 'rgba(0, 0, 0, 0.05)' : '',
        }}
      />
    );
  }
}

class CompoundComponents extends React.Component {
  render() {
    return (
      <div>
        <h1>♬ It is about time that we all turned off the radio ♫</h1>

        <RadioGroup defaultValue="fm">
          <RadioOption value="am">AM</RadioOption>
          <RadioOption value="fm">FM</RadioOption>
          <RadioOption value="tape">Tape</RadioOption>
          <RadioOption value="aux">Aux</RadioOption>
        </RadioGroup>
      </div>
    );
  }
}

export default CompoundComponents;
