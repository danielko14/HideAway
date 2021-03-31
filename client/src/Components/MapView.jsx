import React from 'react';
//import APIKEY from '../config.js';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

class MapView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      center: this.props.userLocation,
      containerStyle: {
        width: '100%',
        height: '500px',
      },
    }

    this.handleMapClick = this.handleMapClick.bind(this);
  }

  handleMapClick(event) {
    console.log(event.latLng.toJSON());
  }

  render() {
    return (
      <LoadScript
        //googleMapsApiKey={APIKEY}
      >
        <GoogleMap
          mapContainerStyle={this.state.containerStyle}
          center={this.state.center}
          zoom={12}
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