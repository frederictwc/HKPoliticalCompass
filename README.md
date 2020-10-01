# Hong Kong political compass

## Description

A political questionnaire for Hong Kong inspired by the [Political Compass Test](https://www.politicalcompass.org/test) that helps you find out what your political ideology is based on a series of MC questions. Click [here](https://hkpoliticalcompass.web.app) to begin your test.

## Installation for development

Install firebase
```
curl -sL https://firebase.tools | bash
```
Login firebase
```
firebase login
```
Launch the site using 
```
firebase deploy
```

## Develop

Theres 2 parts to this project. Website and database

### Website
After installing, go to [firebase](https://firebase.google.com) and create a web project. Follow instructions

### Database

Follow instructions [here](https://firebase.google.com/docs/database/web/start). After creating database, put the following script into your html file
```html
<body>
<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.21.1/firebase-database.js"></script>
<script>
    var firebaseConfig = {
      apiKey: "AIzaSyBvYrAjaChRzpFdxsAzAz1qp-2iZH-vGkM",
      authDomain: "hkpoliticalcompass.firebaseapp.com",
      databaseURL: "https://hkpoliticalcompass.firebaseio.com",
      projectId: "hkpoliticalcompass",
      storageBucket: "hkpoliticalcompass.appspot.com",
      messagingSenderId: "883847575366",
      appId: "1:883847575366:web:82632bd8f78b0600b65747",
      measurementId: "G-EFE7F08XT6"};
    firebase.initializeApp(firebaseConfig);
      function writeData() {
        firebase.database().ref("User").set({
            name: document.getElementById("nameField").value,
            age: document.getElementById("ageField").value
        });
    }
</script>   
<input type = "text" placeholder= "name" id= "nameField">
<input type = "text" placeholder= "name" id= "ageField">
<button onclick = "writeData()">Submit</button>
</body>
```

## Simple Javascript examples

### How to import functions from another file
Lets say you have a file called functions.js.
```javascript
// mymodule.js
function sayHello() {
      console.log("Hello World")
   }

module.exports = {sayHello}
```
And another file called import.js in which you want to import a function to.
```javascript
const importedFunction = require('./functions');
importedFunction.sayHello(); 
```
In a terminal, run 
```node import.js
```
The output will be 
```
Hello World
```