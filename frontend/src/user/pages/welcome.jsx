
// import React from 'react'
 import React from "react";
import "./welcome.css";
import { useNavigate } from "react-router-dom";
import Header from "../components/header";


const Welcome= () => {
  const navigate = useNavigate();
  return (
   

    

    <div className="welcome-container">
      <Header />
      <div className="welcome-card">
        <h1>🎉 Appointment Confirmed!</h1>
        <p>
          Thank you for booking your appointment with us.
          <br />
          Our team will contact you soon with further details.
        </p>

        <div className="success-icon">✔</div>

        <button className="home-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

  

export default Welcome