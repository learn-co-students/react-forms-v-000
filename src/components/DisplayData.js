import React from 'react'

class DisplayData extends React.Component {
    render() {
        return(
            <div>
                <h3>{this.props.formData.firstName}</h3>
                <h3>{this.props.formData.lastName}</h3>
            </div>
        )
    }
}

export default DisplayData