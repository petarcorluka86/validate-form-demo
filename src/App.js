import React from 'react';
import './css/App.css';

function App() {
  return (
    <div className="app">
      <div className="form-container">
        <h1>DEMO FORM</h1>
        <form>
          <label>
            Full name:
            <input type="text" name="fullName"/>
          </label>
          <label>
            Email:
            <input type="text" name="email"/>
          </label>
          <label>
            Password:
            <input type="text" name="password"/>
          </label>
          <label>
            Confirm password:
            <input type="text" name="confirmPassword"/>
          </label>
          <button>Submit form</button>
        </form>
      </div>
    </div>
  );
}

export default App;
