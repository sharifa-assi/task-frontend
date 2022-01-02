import React, { useState,useEffect } from "react";
import "./Form.css";
import Shipments from "./Shipments";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }









  return (
    <>
      <div className="form-container">
        <span className="close-btn">×</span>
        <div className="form-content-left">
          <img className="form-img" src="img/img-2.svg" alt="spaceship" />
        </div>

        <Shipments submitForm={submitForm} />
      </div>
    </>
  );
};

export default Form;
