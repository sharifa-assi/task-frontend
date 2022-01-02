import React, { useState, useEffect } from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./Form.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [waybill, setWaybill] = useState("");
  const [token, setToken] = useState("");

  async function makeShipment() {
    console.warn(name, address, waybill, number);

    const form = new FormData();

    form.append("name", name);
    form.append("address", address);
    form.append("waybill", waybill);
    form.append("phone", number);

    let result = await fetch("http://localhost:8000/api/shipments", {
      method: "POST",

      body: form,
    });
    alert("New shipment has been created!");
  }

  useEffect(() => {
    const tok = localStorage.getItem("token");
    console.log(tok, "token");
  }, []);

  return (
    <div className="form-content-right">
      <form onSubmit={handleSubmit} className="form" noValidate>
        <h1>Enter your shipment details here:</h1>
        <div className="form-inputs">
          <label className="form-label">Name</label>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Address</label>
          <input
            className="form-input"
            type="address"
            name="address"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          {errors.address && <p>{errors.address}</p>}
        </div>
        <div className="form-inputs">
          <label className="form-label">Phone Number</label>
          <input
            className="form-input"
            type="number"
            name="number"
            placeholder="Enter your number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          {errors.number && <p>{errors.number}</p>}
        </div>

        <div className="form-inputs">
          <label className="form-label">Waybill</label>
          <input
            className="form-input"
            type="text"
            name="waybill"
            placeholder="waybill here"
            value={waybill}
            onChange={(e) => setWaybill(e.target.value)}
          />
          {errors.number && <p>{errors.number}</p>}
        </div>

        <button className="form-input-btn" type="submit" onClick={makeShipment}>
          Submit
        </button>
        <span className="form-input-login">
          View my shipments <a href="#">Click here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
