import React, { useState } from "react";
import "./Form.css";
import FormShipment from "./FormShipment";
import FormSuccess from "./FormSuccess";
import { useHistory } from "react-router-dom";

const ShipmentForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const history = useHistory();

  function submitForm() {
    setIsSubmitted(true);
  }

  function logOut() {
    localStorage.clear();
    history.push("/signup");
  }

  return (
    <>
      <div className="form-container">
        <span className="close-btn" onClick={logOut}>
          ×
        </span>
        <div className="form-content-left">
          <img className="form-img" src="img/img-2.svg" alt="spaceship" />
        </div>
        {!isSubmitted ? (
          <FormShipment submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default ShipmentForm;
