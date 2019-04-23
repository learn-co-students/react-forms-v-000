// Code ControlledInput Component Here

class ControlledInput extends React.Component {
  state = {
    value: '',
  }
 
  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
    console.log(this.state.value)
  }
 
  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }
  
  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }
  
  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

ReactDOM.render(
  <div><ControlledInput/></div>,
  document.getElementById('root')
);
