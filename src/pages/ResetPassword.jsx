import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./ResetPassword.css";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const token = window.location.pathname.split("/").pop(); // Extract token from URL
      const response = await axios.patch(
        import.meta.env.VITE_API_URL + `customers/password-reset/${token}`,
        {
          password: password,
        }
      );
      setMessage(response.data.message);

      // Redirect to login page after successful password reset
      if (response.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      setMessage("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Password Reset</h2>
      <form onSubmit={handleSubmit}>
        <label>
          New Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>

        <button type="submit">Reset Password</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default ResetPassword;
