import React from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    submittedData: [],
  };

  /*handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
    console.log(event.target.name);
    console.log(event.target.value);
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };*/

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  listOfSubmissions = () => {
    return this.state.submittedData.map((data, index) => {
      return (
        <div key={index}>
          <span>{data.firstName}</span> <span>{data.lastName}</span>
        </div>
      );
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      firstName: "",
      lastName: "",
      submittedData: [
        ...this.state.submittedData,
        {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
        },
      ],
    });
  };

  render() {
    return (
      <div>
        <Form
          formData={this.state}
          handleSubmit={this.handleSubmit}
          listOfSubmissions={this.listOfSubmissions}
          handleChange={this.handleChange}
        />
        <DisplayData formData={this.state} />
      </div>
    );
  }
}

export default ParentComponent;
