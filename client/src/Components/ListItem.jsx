import React from 'react';

const ListItem = ({ location }) => {

  return (
    <div id="single-location">
      <img id="location-image" alt="unavailable"></img>
      <h3>
        {location.name}
      </h3>
      <p>
        {location.description}
      </p>
    </div>
  )
}

export default ListItem