import React from "react";
import "./style.css";

import { Link } from 'react-router-dom'

export default function Log_in_component(){
  function login(){
    var email = document.getElementById('email').value 
    var pass = document.getElementById('pass').value
    firebase.auth().signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      // Signed in

      var user = userCredential.user;
      console.log(email)
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  
  return (
    <>
    
    
    <title>LOG IN</title>
    
    <div className="wrapper ">
      <div className="title">
        LOG IN
      </div>
      <div className="form">
        <div className="inputfield">
          <input type="email" className="input" placeholder="EMAIL" id="email"></input>
        </div>
        <div className="inputfield">
          <input type="password" className="input"  placeholder="PASSWORD" id="pass"></input>
        </div>
        <div className="inputfield">
        <Link to="/signup" style={{ textDecoration: 'none' }}><h2 className="LOOGER"  >DON'T HAVE A ACCOUNT? SIGN UP</h2></Link>
        </div>
      </div>
      <div className="inputfield">
          <button className="sbbtn" onClick={login} >LOGIN</button>
          
         
        </div>

    </div>
    <div className="wrapper" id="wrap">
      <h1 id="USERNAME" className="username">Username: Daksh verma</h1>
          <button className="sbbtn">Lets goo</button>
    </div>
    </>
  )
}



// firebase.firestore().collection("cities").doc("new-city-id").set({
//   name: "Tokyo",
//   country: "Japan"
// })
// .then((docRef) => {
//   console.log("Document written with ID: ");
// })
// .catch((error) => {
//   console.error("Error adding document: ", error);
// });