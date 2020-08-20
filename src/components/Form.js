import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let formData = {firstName: this.state.firstName, lastName: this.state.lastName }
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray})
  }

    listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" onChange={this.handleFirstNameChange} value={this.state.firstName}/>
            <input type="text" onChange={this.handleLastNameChange} value={this.state.lastName}/>
            <input type="submit"/>
          </form>
          {/* note you have to add the brackets to see it in the DOM */}
          {this.listOfSubmissions()}
        </div>
      )
    }
}

export default Form;
