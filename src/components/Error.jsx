import React from "react";
import { Link } from "react-router-dom";
import "./Error.css"

function ErrorComponent() {
  return (
    <div className="error-container">
      <h2>There was a problem with your order. Please try again.</h2>
      <Link to="/home">
        <button className="home-button">Go to Home</button>
      </Link>
    </div>
  );
}

export default ErrorComponent;