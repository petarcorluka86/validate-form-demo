import React, { useState } from 'react';
import './css/App.css';
import validate from 'validate.js';

function App() {

  const [formData,setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
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
    setValues({...values, [name]: value});
    if(errors[name]){
      const result = validate({...values, [name]: value},constraints)
      if(result !== undefined)
        if(result[name]) setErrors({...errors, [name]: result[name]});
        else setErrors({...errors,[name]: false});
      else setErrors({});
    }
  }
  
  const handleBlur = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    if(values[name] !== ""){
      const result = validate({...values, [name]: value},constraints)
      if(result !== undefined)
        if(result[name]) setErrors({...errors, [name]: result[name]});
        else setErrors({...errors,[name]: false});
      else setErrors({});
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const result = validate(values,constraints);
    if(result) setErrors(result);
    else {
      alert("Sucess!");
      setData();
      window.location.reload();
    }
  }

  const setData = () => {
    localStorage.setItem('formData',JSON.stringify(values));
  }

  const getData = () => {
    setFormData(JSON.parse(localStorage.getItem('formData')));
  }

  return (
    <div className="app">
      <div className="form-container">
        <h1>DEMO FORM</h1>
        <form id="mainForm" autoComplete="off" onSubmit={handleSubmit}>
          <label className={errors.fullName ? "invalid-label" : null}>
            Full name:
            <input className={errors.fullName ? "invalid-input" : null} id="fullName" type="text" name="fullName" value={values.fullName} onChange={handleChange} onBlur={handleBlur}/>
            {errors.fullName && <div className="form-error">{errors.fullName[0]}</div>}
          </label>
          <label className={errors.email ? "invalid-label" : null}>
            Email:
            <input className={errors.email ? "invalid-input" : null} id="email" type="text" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
            {errors.email && <div className="form-error">{errors.email[0]}</div>}
          </label>
          <label className={errors.password ? "invalid-label" : null}>
            Password:
            <input className={errors.password ? "invalid-input" : null} id="password" type="password" name="password" value={values.password} onChange={handleChange}  onBlur={handleBlur}/>
            {errors.password && <div className="form-error">{errors.password[0]}</div>}
          </label>
          <label className={errors.confirmPassword ? "invalid-label" : null}>
            Confirm password:
            <input className={errors.confirmPassword ? "invalid-input" : null} id="confirmPassword" type="password" name="confirmPassword" value={values.confirmPassword}  onChange={handleChange} onBlur={handleBlur} />
            {errors.confirmPassword && <div className="form-error">{errors.confirmPassword[0]}</div>}
          </label>
          <button  type="submit">Submit form</button>
        </form>
      </div>
      <div className="localstorage-info-container">
        <div className="info-table">
          <h1>GET LAST SUBMIT</h1>
          <label>
            Full name:
            <span>{formData.fullName}</span>
          </label>
          <label>
            Email:
            <span>{formData.email}</span>
          </label>
          <label>
            Password:
            <span>{formData.password}</span>
          </label>
          <label>
            Confirm password:
            <span>{formData.confirmPassword}</span>
          </label>
          <button onClick={()=>{getData()}}>Get data</button>
        </div>
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
