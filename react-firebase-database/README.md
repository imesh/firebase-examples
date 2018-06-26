# React Firebase Database Example

This sample application demonstrates the ability to connect to Firebase databases via a React.js web application

## How to Run

- Create a Firebase account at https://firebase.google.com/

- Obtain credentials from the Firebase console: "Firebase -> Project Settings -> Add Firebase to your web app":

  ````js
  // Initialize Firebase
  var config = {
      apiKey: "apiKey",
      authDomain: "projectId.firebaseapp.com",
      databaseURL: "https://databaseName.firebaseio.com",
      projectId: "projectId",
      storageBucket: "bucket.appspot.com",
      messagingSenderId: "messagingSenderId"
  };
  ````

- Update above credentials in the src/App.js file.

- Install dependencies:
  
  ````bash
  npm install
  ````

- Start the web application:
  
  ````bash
  npm start
  ````

- Log into Firebase console, navigate to the Database section, and create a new entry called "speed" in the Realtime database with a numeric value.

- Now, check the home page and JavaScript console of the above web application. If everything went well, the value entered in the Firebase console should reflect in the web application.

## License
Licensed under Apache 2.0