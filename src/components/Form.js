import React from 'react'

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="firstName" value={this.props.formData.firstName} onChange={event=> this.props.handleChange(event)}></input>
          <input type="text" name="lastName" value={this.props.formData.lastName} onChange={event=> this.props.handleChange(event)}></input>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default Form;