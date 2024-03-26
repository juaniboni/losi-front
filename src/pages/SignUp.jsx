import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux"; // Importando useDispatch
import { setUser } from "../redux/customerReducer";
import "./SignUp.css"; // Importando el archivo CSS
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch(); // Inicializando useDispatch
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "customers",
        formData
      );
      console.log("Signup successful:", response.data);

      // Despachar la acción setUser para guardar los datos del usuario en el estado de Redux
      dispatch(setUser({ user: response.data, token: response.data.token }));
      // Navigate to the home page
      navigate("/home");
    } catch (error) {
      console.error("Signup error:", error);
      // Manejar el fallo de registro si es necesario
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
          className="signup-input"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
          className="signup-input"
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="signup-input"
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="signup-input"
          placeholder="Address"
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="signup-input"
          placeholder="Phone"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="signup-input"
          placeholder="Password"
          required
        />
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
