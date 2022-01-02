import React, { useState, useEffect } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      history.push("/makeshipment");
    }
  }, []);

  const login = async () => {
    console.warn(email, password);
    let item = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    history.push("/makeshipment");
  };

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>My Shipments:</h1>
        <div className="form-inputs">
          <label className="form-label">Email</label>
        </div>
        <div className="form-inputs">
          <label className="form-label">Password</label>
        </div>

        <button className="form-input-btn" type="submit" onClick={login}>
          Create New
        </button>
       
      </form>
    </div>
  );
};

export default FormSignup;
