import React from 'react';
import axios from 'axios';
import './App.css';

import Header from './Header.jsx';
import SecretSpotList from './Components/ListView.jsx';
import MapView from './Components/MapView.jsx';
import TemporaryForm from './Components/TemporaryForm.jsx';
import Footer from './Footer.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secretLocations: [],
      canAddLocation: false,
      userCurrentLocation: {},
      isLoaded: false
    }

  }

  componentDidMount() {
    this.getUsersCurrentLocation();
  }

  // Get Users Location
  getUsersCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          this.getSecretSpots(pos);
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
      })
    }
  }

  getSecretSpots(userLocation) {
    console.log(userLocation);

    axios.get(`http://localhost:3001/secretSpots`, {
      params: userLocation
    })
    .then((response) => {
      let secretLocations = response.data;
      this.setState({
        secretLocations: secretLocations,
        isLoaded: true
      })
    })
    .catch((err) => {
      console.log(err);
    })
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
              <MapView userLocation={this.state.userCurrentLocation} secretLocations={this.state.secretLocations}/>
            </div>
            <div id="temporary-form">
              <TemporaryForm />
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
