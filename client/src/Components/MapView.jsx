import React from 'react';
import APIKEY from '../config.js';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

class MapView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      center: {
        lat: 30,
        lng: 98
      },
      containerStyle: {
        width: '100%',
        height: '500px',
      },
    }

    this.handleMapClick = this.handleMapClick.bind(this);
  }

  handleMapClick(event) {
    if (this.props.canAddLocation) {
      console.log('Clicked!')
      console.log(event.latLng.toJSON())
      // the above returns {lat: 30.01783796995174, lng: 97.76585388183595}
      // on map click after clicking Add New Location

      // add marker to map

      // add warning to assure it is the correct spot

      // if yes display modal to submit new location 
    }
  }

  render() {
    return (
      <LoadScript
        //googleMapsApiKey={APIKEY}
      >
        <GoogleMap
          mapContainerStyle={this.state.containerStyle}
          center={this.state.center}
          zoom={10}
          onClick={this.handleMapClick}

        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default MapView;