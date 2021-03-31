import React from 'react';
import './App.css';

import dummyData from './dummyData.js';

import Header from './Header.jsx';
import SecretSpotList from './Components/ListView.jsx';
import MapView from './Components/MapView.jsx';
import NewSpotForm from './Components/NewSpotForm.jsx';
import Footer from './Footer.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretLocations: dummyData,
      canAddLocation: false,
      userCurrentLocation: {},
      isLoaded: false
    }
    this.handleAddLocationButton = this.handleAddLocationButton.bind(this);
    this.getUsersCurrentLocation();
  }

  // component did mount
    // use google map api geolocation to ping for users location
    // once location is received set that as the center of the map and pass that prop down to mapDisplay
    // This should also send a query to database to find secret spots closest to this users location (Have query return ten pins)
    // Pass the secret spots down to ListView and mapDisplay
    // Map will utilize that to generate map markers that will be animated to come down at different times
    // List display will use the spots to generate a scrollable list

  // Get Users Location
  getUsersCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.setState({
            userCurrentLocation: pos,
            isLoaded: true
          })
        }
      );
    } else {
      const galvanizeAustin = {
        lat: 30.265552883674495,
        lng: -97.74968563426717
      }
      this.setState({
        userCurrentLocation: galvanizeAustin,
        isLoaded: true
      })
    }
  }

  // Get secret spots from database
  getSecretSpots() {

  }

  handleAddLocationButton(e) {
    e.preventDefault();
    this.setState({
      canAddLocation: true
    });
  }

  render() {
    if (this.state.isLoaded) {
      return (
        <div>
          <div id="head">
          <Header />
          </div>
          <div id="body">
            <div id="spotlist">
              <SecretSpotList secretLocations={this.state.secretLocations}/>
            </div>
            <div id="spotmap">
              <MapView canAddLocation={this.state.canAddLocation} userLocation={this.state.userCurrentLocation}/>
            </div>
            <div id="spotform">
              <NewSpotForm handleClick={this.handleAddLocationButton}/>
            </div>
          </div>
          <div id="foot">
          <Footer />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          Loading...
        </div>
      )
    }
  }
}

export default App;
