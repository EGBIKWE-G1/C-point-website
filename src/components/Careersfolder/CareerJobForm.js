import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import "./Active.css";
const CareerJobForm = () => {
  const [signcareer, setSignupcareer] = useState("");
  const [isSubmitted, setIsubmitted] = useState(false);
  const handleCareerChange = (e) => {
    setSignupcareer(e.target.value);
  };
  const handleCareerSubmit = (event) => {
    setIsubmitted(false);
    event.preventDefault();
    console.log(signcareer);
    setSignupcareer("");
    setIsubmitted(true);
  };
  useEffect(() => {
    const id = setTimeout(() => {
      setIsubmitted(false);
    }, 3000);
    return () => {
      clearInterval(id);
    };
  }, [isSubmitted]);

  return (
    <div className="bk-jobform">
      <Container>
        <div className="form-border">
          <p className="stay-updated">
            Stay updated on available jobs with the Canary weekly newsletter!
          </p>
          <form onSubmit={handleCareerSubmit}>
            <div className="btn-input-container">
              <input
                name="fillform"
                type="text"
                id="input-field-signup-boxshadow"
                className="input-field-signup"
                onChange={handleCareerChange}
                value={signcareer}
                required
                placeholder="Email address"
              />
              <button type="submit" className="btn-signup">
                Sign Up
              </button>
            </div>
          </form>
        </div>
        {isSubmitted && (
          <p className="success-message">Thank you! Signup successful </p>
        )}
      </Container>
    </div>
  );
};

export default CareerJobForm;
