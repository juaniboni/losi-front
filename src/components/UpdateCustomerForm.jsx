import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";
import { setUser } from "../redux/customerReducer";
import "./UpdateCustomerForm.css";

const UpdateCustomerForm = () => {
    
  const user = useSelector((state) => state.customer.user); 
  
  const  customerId  = useParams();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    phone: "",
  });

  // Populate form with user's current information
  useEffect(() => {
    if (user) {
      setFormData({
        firstname: user.customer.firstname,
        lastname: user.customer.lastname,
        email: user.customer.email,
        address: user.customer.address,
        phone: user.customer.phone,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `http://losi-back-deploy-two.vercel.app/customers/${user.customer.id}`,
        formData
      );
      console.log("Customer information updated successfully:", response.data);
      dispatch(setUser({ user: response.data.customer, token: user.token }));
    } catch (error) {
      console.error("Error updating customer information:", error);
      // Handle error
    }
  };

  return (
    <div className="update-container">
      <h2>Update Customer Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Information</button>
      </form>
    </div>
  );
};

export default UpdateCustomerForm;
