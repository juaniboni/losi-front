import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  removeAllItems,
} from "../redux/cartReducer";
import "./Feedback.css";

function Feedback() {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.customer.user);
  const dispatch = useDispatch();
  const handleRemoveAllItems = () => {
    dispatch(removeAllItems());
  };
  const [loading, setLoading] = useState(true); // Initialize to true
  const [orderError, setOrderError] = useState(false);
  const searchParams = new URLSearchParams(location.search);

  const collectionId = searchParams.get("collection_id");
  const collectionStatus = searchParams.get("collection_status");
  const paymentId = searchParams.get("payment_id");
  const status = searchParams.get("collection_status");
  const externalReference = searchParams.get("external_reference");
  const paymentType = searchParams.get("payment_type");
  const merchantOrderId = searchParams.get("merchant_order_id");
  const preferenceId = searchParams.get("preference_id");
  const siteId = searchParams.get("site_id");
  const processingMode = searchParams.get("processing_mode");
  const merchantAccountId = searchParams.get("merchant_account_id");
  console.log(merchantAccountId);
  console.log(paymentType);

  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "orders",
        {
          customerId: user.customer.id,
          payment_method: "mercadopago",
          shipping_address: user.customer.address,
          collection_id: collectionId,
          collection_status: collectionStatus,
          payment_id: paymentId,
          status: status,
          payment_type: paymentType,
          merchant_order_id: merchantOrderId,
          preference_id: preferenceId,
          merchant_account_id: merchantAccountId,
          cartItems: cartItems.map((item) => ({
            productId: item.id,
            quantity: item.quantity,
            selectedSize: item.selectedSize,
          })),
        }
      );
      console.log("Order created successfully:", response.data);
    } catch (error) {
      console.error("Error creating order:", error.response.data);
      setOrderError(true);
    } finally {
      setLoading(false); // Set loading to false when the process is complete
    }
  };

  useEffect(() => {
    handleCheckout();
    handleRemoveAllItems();
  }, []); // Include variables in the dependency array

  return (
    <div className="error-order">
      {loading ? (
        <p>Loading...</p>
      ) : orderError ? (
        <p>There was an error in your order. Please try again later.</p>
      ) : (
        <>
          <h2>Thank you for your order!</h2>
          <p>
            An email with your order details has been sent to:{" "}
            {user.customer.email}
          </p>
          <Link to="/home">
            <button className="home-button">Go to Home</button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Feedback;
