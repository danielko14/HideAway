import React from 'react';

const ListItem = ({ location }) => {

  return (
    <div id="single-location">
      <div>
      <img id="location-image" alt="unavailable"></img>
      </div>
      <h3>
        {location.name}
      </h3>
      <p>
        {location.description}
      </p>
      <div id="favorite">
      <span className="material-icons" id="favorite-span">
      favorite_border
      </span>
      </div>
      <div id="pet-friendly">
      <span className="material-icons" id="pet-friendly-span">
      pets
      </span>
      </div>
      <div id="difficulty">
      <span className="material-icons" id="difficulty-span">
      star_outline
      </span>
      </div>
    </div>
  )
}

export default ListItem