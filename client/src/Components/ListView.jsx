import React from 'react';
import ListItem from './ListItem.jsx';

const SecretSpotList = ({ secretLocations }) => {

  return secretLocations.map((location) => {
    return (
      <div>
        <ListItem location={location}/>
      </div>
    )
  })
}

export default SecretSpotList;