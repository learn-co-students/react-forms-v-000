import React from 'react';

class ControlledInput extends React.Component {
  state = {
    firstName: '',
    lastName: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }

 
  render() {
    return (
      <div>  
        <h1>FORM</h1>
        <form onSubmit={event => this.handleSubmit(event)}> 
          First Name: <input type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}/>
          <br></br>

          Last Name: <input type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.handleChange}/>
        </form>
      </div>
      
    );
  }
}

export default ControlledInput;