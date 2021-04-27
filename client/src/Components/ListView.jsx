import React from 'react';
import ListItem from './ListItem.jsx';

const SecretSpotList = ({ secretLocations }) => {

  return secretLocations.map((location) => {
    return (
      <div key={location.id}>
        <ListItem location={location}/>
      </div>
    )
  })
}

export default SecretSpotList;