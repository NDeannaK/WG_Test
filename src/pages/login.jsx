import React, { useState } from 'react';
import ReactDOM from "react-dom";
import "../styles/login.css";
import db from './db';
import { redirect } from 'react-router-dom';


function login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [Dhours, setDHours] = useState(0);

  // User Login info
  const database = db;

  const errors = {
    uname: "invalid username",
    pass: "invalid password",
    hours: "invalid number (must be between 0-8)"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass, hours } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } 
      else if(hours.value > 8 || hours.value < 0){
        //Invalid hours
        setErrorMessages({ name: "hours", message: errors.hours });
      }
      else {
        setDHours(hours.value);
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    const refreshPage = () => {
        location.reload();
    };

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit} action='mailto:nurdeannakamarozaman@gmail.com' method="POST" enctype="text/plain">
        <div className="input-container">
          <label>Username: </label>
          <input type="text" name="uname" required placeholder='user1' />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password: &nbsp;</label>
          <input type="password" name="pass" required placeholder='pass1'/>
          {renderErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Daily Hours: </label>
          <input type="number" name="hours" required placeholder='(between 0-8)'/>
          {renderErrorMessage("hours")}
        </div>
        <div className="button-container">
            <button className='submit-btn' type="submit" value="Send">Submit</button>
        </div>
      </form>
    </div>
  );

  const successmsg = (
    <div className="success-cont">
        <div>User hours is successfully logged in</div>
        <h2 className='num'>Daily Hours: {Dhours}</h2>
        <button className='refresh-btn' onClick={refreshPage} >Log again</button>
    </div>
  );

  return (
    <div className="log-hours">
      <div className="login-form">
        <div className="title">Log your Hours</div>
        {isSubmitted ?  successmsg : renderForm}
      </div>
    </div>
  );
}

export default login;