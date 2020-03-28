import React from "react";

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="firstName"
          onChange={this.handleChange}
          value={this.state.firstName}
        />
        <input
          type="text"
          name="lastName"
          onChange={this.handleChange}
          value={this.state.lastName}
        />
      </form>
    );
  }
}

export default Form;
