import React from 'react';

class Form extends React.Component {
  // state = {
  //   firstName: "John",
  //   lastName: "Henry",
  //   submittedData: []
  // }
  //
  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }
  //
  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  // handleSubmit = event => {
  //   event.preventDefault()
  //   let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
  //   let dataArray = this.state.submittedData.concat(formData)
  //   this.setState({ submittedData: dataArray})
  // }

  // listOfSubmissions = () => {
  //   return this.state.submittedData.map(data => {
  //     return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
  //   })
  // }
  // "{this.listOfSubmissions()}"

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="firstName" onChange={event => this.props.handleNameChange(event)} value={this.props.formData.firstName} />
          <input type="text" name="lastName" onChange={event => this.props.handleNameChange(event)} value={this.props.formData.lastName} />
          <button type="submit">Submit</button>
        </form>

      </div>
    )
  }
}

export default Form;
