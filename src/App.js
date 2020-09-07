import React from 'react';
import './css/App.css';
import validate from 'validate.js';

const constraints = {
  fullName: {
    presence: true
  },
  email: {
    presence: true,
    email: true
  },
  password: {
    presence: true,
    length: {
      minimum: 6
    }
  },
  confirmPassword: {
    presence: true,
    equality: {
      attribute: "password",
      message: "Password does not match."
    }
  }
};

function App() {
  return (
    <div className="app">
      <div className="form-container">
        <h1>DEMO FORM</h1>
        <form id="mainForm">
          <label>
            Full name:
            <input id="fullName" type="text" name="fullName"/>
          </label>
          <label>
            Email:
            <input id="email" type="text" name="email"/>
          </label>
          <label>
            Password:
            <input id="password" type="password" name="password"/>
          </label>
          <label>
            Confirm password:
            <input id="confirmPassword" type="password" name="confirmPassword"/>
          </label>
          <button type="submit">Submit form</button>
        </form>
      </div>
    </div>
  );
}

validate(document.getElementById("mainForm"),constraints);

export default App;
