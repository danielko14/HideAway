import React from 'react';
import './App.css';

import Header from './Header.jsx';
import SecretSpotList from './Components/ListView.jsx';
import MapView from './Components/MapView.jsx';
import NewSpotForm from './Components/NewSpotForm.jsx';
import Footer from './Footer.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div id="head">
        <Header />
        </div>
        <div id="body">
          <div id="spotlist">
            <SecretSpotList />
          </div>
          <div id="spotmap">
            <MapView />
          </div>
          <div id="spotform">
            <NewSpotForm />
          </div>
        </div>
        <div id="foot">
        <Footer />
        </div>
      </div>
    )
  }
}

export default App;
