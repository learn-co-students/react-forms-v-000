import React from 'react';
import Form from './Form'
import DisplayData from './DataDisplay'
 
class ParentComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleChangeEvent = (event) => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }
 
  render() {
    return (
    <div>
      <Form
        formData={this.state}
        handleChangeEvent={this.handleChangeEvent}
      />
      <DisplayData formData={this.state} />
    </div>
    )
  }
}
 
export default ParentComponent;