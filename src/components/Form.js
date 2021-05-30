// import React from 'react';

// class Form extends React.Component {
//   state = {
//     firstName: "John",
//     lastName: "Henry",
//     submittedData: []
//   }

//   handleFirstNameChange = event => {
//     this.setState({
//       firstName: event.target.value
//     })
//   }

//   handleLastNameChange = event => {
//     this.setState({
//       lastName: event.target.value
//     })
//   }

//   handleSubmit = event => {
//     event.preventDefault()
//     let formData = { firstName: this.state.firstName, lastName: this.state.lastName }
//     let dataArray = this.state.submittedData.concat(formData)
//     this.setState({submittedData: dataArray})
//   }

//   // listOfSubmissions = () => {
//   //   return this.state.submittedData.map(data => {
//   //     return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
//   //   })
//   // }
//   listOfSubmissions = () => {
//     return this.state.submittedData.map(data => {
//       return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
//     })
//   }

//   render() {
//     return (
//       <div>
//         {/* add onSubmit */}
//         <form onSubmit={event => this.handleSubmit(event)}>
//           {/* use event listener OnChange to fire setState */}
//           <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
//           <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
//           {/* add submit button */}
//           <input type="submit" />
//         </form>
//         {/* don't forget to call this as a function! */}
//         {this.listOfSubmissions()}
//       </div>
//     )
//   }
// }

// export default Form;

// src/components/Form
import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            // onChange={event => this.props.handleFirstNameChange(event)}
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.firstName}
          />
          <input
            type="text"
            // onChange={event => this.props.handleLastNameChange(event)}
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.lastName}
          />
          {/* need to re-establish event handler */}
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Form;
