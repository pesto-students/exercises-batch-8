import React from "react";
import PropTypes from "prop-types";

// Create a new form context
const FormContext = React.createContext();
/**
 * Provider State of the form goes here
 */
class FormContextProvider extends React.Component {
  state = {
    firstName: "",
    lastName: ""
  };

  handleChange = (input, value) =>
    this.setState({ ...this.state, [input]: value });
  handleSubmit = event => {
    event.preventDefault();
    const { firstName, lastName } = this.state;
    console.log(`The user details are ${firstName} ${lastName}`);
  };
  render() {
    return (
      <FormContext.Provider
        value={{
          state: this.state,
          handleChange: this.handleChange,
          handleSubmit: this.handleSubmit
        }}
      >
        {this.props.children}
      </FormContext.Provider>
    );
  }
}

class Form extends React.Component {
  static propTypes = {
    children: PropTypes.shape().isRequired
  };
  render() {
    return <div>{this.props.children}</div>;
  }
}

/**
 * Consumers code goes here
 */

class SubmitButton extends React.Component {
  static propTypes = {
    children: PropTypes.shape().isRequired
  };
  render() {
    return (
      <FormContext.Consumer>
        {context => {
          const { handleSubmit } = context;
          return <button onClick={handleSubmit}>{this.props.children}</button>;
        }}
      </FormContext.Consumer>
    );
  }
}

class TextInput extends React.Component {
  render() {
    return (
      <FormContext.Consumer>
        {context => {
          const { state } = context;
          const { name, placeholder } = this.props;
          return (
            <input
              type="text"
              name={name}
              placeholder={placeholder}
              value={state[name]}
              onChange={(event, input = name) =>
                context.handleChange(input, event.target.value)
              }
            />
          );
        }}
      </FormContext.Consumer>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

class Context extends React.Component {
  handleSubmit = () => {
    alert("YOU WIN!");
  };

  render() {
    return (
      <div>
        <h1>
          This isn&#39;t even my final <code>&lt;Form/&gt;</code>!
        </h1>

        <FormContextProvider>
          <Form onSubmit={this.handleSubmit}>
            <p>
              <TextInput name="firstName" placeholder="First Name" />{" "}
              <TextInput name="lastName" placeholder="Last Name" />
            </p>
            <p>
              <SubmitButton>Submit</SubmitButton>
            </p>
          </Form>
        </FormContextProvider>
      </div>
    );
  }
}

export default Context;
