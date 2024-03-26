import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/customerReducer";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loggedInUser, setLoggedInUser] = useState(null);
  const user = useSelector((state) => state.customer.user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "tokens/customer",
        formData
      );
      // Assuming the server responds with user data and token upon successful login
      const { user, token } = response.data;

      // Dispatch action to update Redux state with user data and token
      dispatch(setUser({ user: response.data, token: response.data.token }));
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error (e.g., display error message to the user)
    }
  };

  return (
    <div className="login-container">
      <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link className="sign-up-link" to="/signup">
            Sign Up
          </Link>
        </p>
        <p>
          Forgot your password?{" "}
          <Link className="forgot-link" to="/forgot-password">
            Reset it here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
