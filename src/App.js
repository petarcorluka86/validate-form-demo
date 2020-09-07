import React, { useRef, useState } from 'react';
import './css/App.css';
import validate from 'validate.js';

function App() {
  const formRef = useRef();
  const [errors,setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const temp = validate(formRef.current,constraints);
    if(temp) setErrors(temp);
    else {
      alert("Sucess!");
      setErrors({});
    }
  };

  return (
    <div className="app">
      <div className="form-container">
        <h1>DEMO FORM</h1>
        <form ref={formRef} id="mainForm" onSubmit={handleSubmit}>
          <label>
            Full name:
            <input id="fullName" type="text" name="fullName"/>
            {errors.fullName && <div className="form-error">{errors.fullName[0]}</div>}
          </label>
          <label>
            Email:
            <input id="email" type="text" name="email"/>
            {errors.email && <div className="form-error">{errors.email[0]}</div>}
          </label>
          <label>
            Password:
            <input id="password" type="password" name="password"/>
            {errors.password && <div className="form-error">{errors.password[0]}</div>}
          </label>
          <label>
            Confirm password:
            <input id="confirmPassword" type="password" name="confirmPassword"/>
            {errors.confirmPassword && <div className="form-error">{errors.confirmPassword[0]}</div>}
          </label>
          <button type="submit">Submit form</button>
        </form>
      </div>
    </div>
  );
}

const constraints = {
  fullName: {
    presence: {
      message: "^This field is required!"
    }
  },
  email: {
    presence: {
      message: "^This field is required!"
    },
    email: {
      message: "^This is not a valid email!"
    }
  },
  password: {
    presence: {
      message: "^This field is required!"
    },
    length: {
      minimum: 6,
      message: "^Password needs to be at least 6 characters!"
    }
  },
  confirmPassword: {
    presence: {
      message: "^This field is required!"
    },
    equality: {
      attribute: "password",
      message: "^Password doesn't match."
    }
  }
};


export default App;
