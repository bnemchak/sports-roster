import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import MyNavbar from '../components/MyNavbar/MyNavbar';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
      </div>
    );
  }
}

export default App;
