import React from 'react';
import APIKEY from '../config.js';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import MarkerSetter from './MarkerSetter.jsx';

class MapView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      center: this.props.userLocation,
      containerStyle: {
        width: '60%',
        height: '500px',
      },
    }

    this.handleMapClick = this.handleMapClick.bind(this);
  }

  handleMapClick(MapMouseEvent) {
    console.log(MapMouseEvent.latLng.toJSON());

  }

  placeMarker(position) {
   
  }

  render() {
    return (
      <LoadScript
        googleMapsApiKey={APIKEY}
      >
        <GoogleMap
          mapContainerStyle={this.state.containerStyle}
          center={this.state.center}
          zoom={10}
          onClick={this.handleMapClick}
        >
          { /* Child components, such as markers, info windows, etc. */ }
        <MarkerSetter locations={this.props.secretLocations}/>
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }
}

export default MapView;