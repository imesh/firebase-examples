import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      speed: 0
    }
    // Initialize Firebase
    var config = {
      apiKey: "apiKey",
      authDomain: "projectId.firebaseapp.com",
      databaseURL: "https://databaseName.firebaseio.com",
      projectId: "projectId",
      storageBucket: "bucket.appspot.com",
      messagingSenderId: "messagingSenderId"
    };
    firebase.initializeApp(config);
  }

  componentDidMount() {
    const speedRef = firebase.database().ref('speed');
    speedRef.on('value', snap => {
      console.log('---> Reading speed value: ' + snap.val());
      this.setState({
        speed: snap.val()
      });
    });

    const user = {
      username: 'foo',
      email: 'foo@bar.org',
      profile_picture : 'https://foo/profile/image'
    }
    console.log('---> Writing new JSON document: ' + JSON.stringify(user));
    firebase.database().ref('users/' + '1').set(user, 
      function(error) {
        if (error) {
          console.log('---> Error: ' + error);
        } else {
          console.log('---> Data saved successfully!');
        }
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Speed: {this.state.speed}</h1>
      </div>
    );
  }
}

export default App;
