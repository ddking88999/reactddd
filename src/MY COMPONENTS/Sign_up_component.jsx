



import React from "react";
import "./style.css";
import "./main.js";
import { Link } from 'react-router-dom'



export default function Sign_up_component(){
  function signup(){
    var p = document.getElementById('pass').value
    var cp = document.getElementById('CPa').value
    var email = document.getElementById('email').value
    
      if (cp == p&&p.length > 6&&email.length >8){
        firebase.auth().createUserWithEmailAndPassword(email, p)
        .then((userCredential) => {
          // Signed in 
          var user = userCredential.user;
          console.log(email)
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
          alert(errorMessage)
        });
      }
      else{
        alert('the fields dont meat the requirement')
      }
  }

  return (
    
    <>
    <title>REGISTER || FOR FREE</title>
    
    <div className="wrapper">
      <div className="title">
        REGISTER
      </div>
      <div className="form">
      <div className="inputfield">
          <input type="text" className="input" placeholder="USERNAME"></input>
        </div>
        <div className="inputfield">
          <input type="email" className="input" placeholder="EMAIL" id="email"></input>
        </div>
        <div className="inputfield">
          <input type="password" className="input"  placeholder="PASSWORD" id="pass"></input>
        </div>
        <div className="inputfield">
          <input type="password" className="input"  placeholder="CONFIRM PASSWORD" id="CPa"></input>
        </div>
        <div className="inputfield">
        <Link to="/login" style={{ textDecoration: 'none' }}><h2 className="LOOGER">ALREADY HAVE A ACCOUNT ? SIGN UP</h2></Link>
        </div>
      </div>
      <div className="inputfield">
          <button className="sbbtn" onClick={signup}>REGISTER</button>
        </div>
    </div>
    
    </>
  )
}