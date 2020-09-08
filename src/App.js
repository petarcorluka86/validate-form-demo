import React, { useState } from 'react';
import './css/App.css';
import validate from 'validate.js';

function App() {
  const [errors,setErrors] = useState({});
  const [values,setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });


  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    setValues({
      ...values,
      [name]: value
    });
    const input = name
    const error = validate({...values, [name]: value},constraints)
    if(error !== undefined) {
      const result = error[input];
      if(result) {
        setErrors({
          ...errors,
          [input]: result
        });
      }
      else {
        setErrors({
          ...errors,
          [input]: false
        });
      }
    }
    else {
      setErrors({});
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const temp = validate(values,constraints);
    if(temp) setErrors(temp);
    else {
      alert("Sucess!");
      window.location.reload();
    }
  }

  return (
    <div className="app">
      <div className="form-container">
        <h1>DEMO FORM</h1>
        <form id="mainForm" autoComplete="off" onSubmit={handleSubmit}>
          <label>
            Full name:
            <input id="fullName" type="text" name="fullName" value={values.fullName} onChange={handleChange} />
            {errors.fullName && <div className="form-error">{errors.fullName[0]}</div>}
          </label>
          <label>
            Email:
            <input id="email" type="text" name="email" value={values.email} onChange={handleChange} />
            {errors.email && <div className="form-error">{errors.email[0]}</div>}
          </label>
          <label>
            Password:
            <input id="password" type="password" name="password" value={values.password} onChange={handleChange} />
            {errors.password && <div className="form-error">{errors.password[0]}</div>}
          </label>
          <label>
            Confirm password:
            <input id="confirmPassword" type="password" name="confirmPassword" value={values.confirmPassword}  onChange={handleChange} />
            {errors.confirmPassword && <div className="form-error">{errors.confirmPassword[0]}</div>}
          </label>
          <button  type="submit">Submit form</button>
        </form>
      </div>
    </div>
  );
}

const constraints = {
  fullName: {
    presence: {
      allowEmpty: false,
      message: "^This field is required!"
    }
  },
  email: {
    presence: {
      allowEmpty: false,
      message: "^This field is required!"
    },
    email: {
      message: "^This is not a valid email!"
    }
  },
  password: {
    presence: {
      allowEmpty: false,
      message: "^This field is required!"
    },
    length: {
      minimum: 6,
      message: "^Password needs to be at least 6 characters!"
    }
  },
  confirmPassword: {
    presence: {
      allowEmpty: false,
      message: "^This field is required!"
    },
    equality: {
      attribute: "password",
      message: "^Password doesn't match."
    }
  }
};


export default App;
