import React from 'react';
import { Marker } from '@react-google-maps/api';

const MarkerSetter = ({ locations }) => {
  return locations.map((location) => {
    console.log(location.location)
    return (
      <div key={location.id}>
        <Marker
          position={location.location}
        />
      </div>
    )
  })
}

export default MarkerSetter;