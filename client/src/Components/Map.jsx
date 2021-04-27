import React from 'react';
import Loader from '@googlemaps/js-api-loader';
import APIKEY from '../config.js';

// const Map = () => {
//   let map;
//   const loader = new Loader({
//     apiKey: APIKEY,
//     version: 'weekly'
//   })
//   return (
//     <div id="map">
//       {loader.load().then(async() => {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: { lat: -34.397, lng: 150.644 },
//           zoom: 8,
//         })
//       })}
//     </div>
//   )
// }

export default Map;