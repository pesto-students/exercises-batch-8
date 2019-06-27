import React from "react";
import PropTypes from "prop-types";

const FormContext = React.createContext();

class Form extends React.Component {
  static propTypes = {
    children: PropTypes.shape().isRequired
  };

  constructor(props) {
    super(props);
    this.state = {};
    this.updateFormData = this.updateFormData.bind(this);
    this.submit = this.submit.bind(this);
  }

  updateFormData(data) {
    this.setState({ data: data });
  }

  submit() {
    this.props.onSubmit(this.state.data);
  }

  render() {
    return (
      <FormContext.Provider
        value={{
          formData: this.state.formData,
          updateFormData: this.updateFormData,
          submit: this.submit
        }}
      >
        <div>{this.props.children}</div>;
      </FormContext.Provider>
    );
  }
}

class SubmitButton extends React.Component {
  static propTypes = {
    children: PropTypes.shape().isRequired
  };
  render() {
    return (
      <FormContext.Consumer>
        {({ submit }) => (
          <button onClick={submit}>{this.props.children}</button>
        )}
      </FormContext.Consumer>
    );
  }
}

class TextInput extends React.Component {
  render() {
    return (
      <FormContext.Consumer>
        {({ updateFormData }) => {
          return (
            <input
              type="text"
              name={this.props.name}
              placeholder={this.props.placeholder}
              onChange={event =>
                updateFormData({ [this.props.name]: event.target.value })
              }
            />
          );
        }}
      </FormContext.Consumer>
    );
  }
}

class Context extends React.Component {
  handleSubmit = formData => {
    alert(formData.firstName);
  };

  render() {
    return (
      <div>
        <h1>
          This isn&#39;t even my final <code>&lt;Form/&gt;</code>!
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <p>
            <TextInput name="firstName" placeholder="First Name" />{" "}
            <TextInput name="lastName" placeholder="Last Name" />
          </p>
          <p>
            <SubmitButton>Submit</SubmitButton>
          </p>
        </Form>
      </div>
    );
  }
}

export default Context;
