// Code ControlledInput Component Here

class Form extends Component{
  state = {
    firstName: "John",
    lastName: "Henry"
  }

  render(){
    return(
      <form>
      <input type="text" name="firstName" value={this.state.firstName} onChange={ event => this.handleFirstNameChange(event)}/>
      <input type="text" name="lastName" value={this.state.lastName} onChange={ event => this.handleLastNameChange(event)}/>
      </form>
    )
    }

    handleLastNameChange = event=>{
      this.setState({
        lastName: event.target.value
      })
    }
    handleFirstNameChange = event=>{
      this.setState({
        firstName: event.target.value
      })
    }

}
