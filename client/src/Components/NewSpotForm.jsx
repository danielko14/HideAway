import React from 'react';

class NewSpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      descreiption: '',
      founder: '',
      images: [],
      location: null
    }
  }

  //Event handler to handle new submission

  render() {
    return (
      <div>
        <button onClick={this.props.handleClick}>
          Add New Location
        </button>
      </div>
    )
  }
}

export default NewSpotForm;