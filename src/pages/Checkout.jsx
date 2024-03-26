import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  removeAllItems,
} from "../redux/cartReducer";
import "./Checkout.css";
import axios from "axios";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

const Checkout = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  initMercadoPago("TEST-3dda8b04-ef81-418b-a762-e962fcd52381", {
    locale: "es-UY",
  });
  const cartItems = useSelector((state) => state.cart.items);
  const user = useSelector((state) => state.customer.user);
  const dispatch = useDispatch();
  const [paymentMethod, setPaymentMethod] = useState("Mercado Pago");
  const [shippingAddress, setShippingAddress] = useState(
    user ? user.customer.address : ""
  );
  const [showInfo, setShowInfo] = useState(true);
  const [total, setTotal] = useState(null);

  const handleShowInfo = () => {
    setShowInfo(false);
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    return subtotal;
  };

  const handleRemoveFromCart = (id, selectedSize) => {
    dispatch(removeFromCart({ id, selectedSize }));
  };

  const handleIncrementQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleRemoveAllItems = () => {
    dispatch(removeAllItems());
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };
  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleShippingAddressChange = (e) => {
    setShippingAddress(e.target.value);
  };

  const createPreference = async () => {
    try {
      const response = await axios.post(
        import.meta.env.VITE_API_URL + "create_preference",
        {
          customerId: user.customer.id, // Assuming you have the customer ID in your user object
          payment_method: paymentMethod,
          shipping_address: shippingAddress,
          items: cartItems.map((item) => ({
            id: item.id,
            title: item.name,
            quantity: item.quantity,
            unit_price: item.price,
            selectedSize: item.selectedSize,
          })),
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
      throw new Error("Error creating preference");
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
      // Aquí puedes llamar a handleCheckout()
      // handleCheckout();
    }
  };

  return (
    <div className="checkout-page-container">
      <>
        <div className="checkout-items">
          <h2 className="cart-items">Cart Items</h2>
          {cartItems.map((item) => (
            <div key={item.id}>
              <div className="checkout-item-container ">
                <div className="checkout-item-text">
                  <p>{item.name}</p>
                  <p>Size: {item.selectedSize}</p>
                  <p>Quantity:{item.quantity}</p>
                  <div className="checkout-article-body-options-counter-action">
                    <p
                      onClick={() =>
                        handleRemoveFromCart(item.id, item.selectedSize)
                      }
                    >
                      Remove
                    </p>
                  </div>
                </div>
                <img src={item.photo} className="checkout-item-image" alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="customer-info">
          <div className="payment-info">
            <h2>Payment Information</h2>
            <form>
              <label>
                Payment Method:
                <select
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                  style={{
                    marginLeft: "10px",
                    padding: "2px",
                    fontFamily: "Inter Tight",
                    fontSize: "14px",
                  }}
                >
                  <option value="Mercado Pago">Mercado Pago</option>
                  <option value="Paypal">Paypal</option>
                  <option value="Credit Card">Credit Card</option>
                </select>
              </label>
              <label>
                Shipping Address:
                <input
                  type="text"
                  value={shippingAddress}
                  onChange={handleShippingAddressChange}
                />
              </label>
              <div className="cart-subtotal-checkout">
                <p>Total ---&gt; ${calculateSubtotal()}</p>
              </div>
            </form>
          </div>
          <button className="btn-buy" onClick={handleBuy}>
            Buy
          </button>
          {preferenceId && (
            <Wallet
              initialization={{ preferenceId: preferenceId }}
              onSubmit={() => console.log("hacer dispatch")}
              customization={{ texts: { valueProp: "smart_option" } }}
            />
          )}
        </div>
      </>
    </div>
  );
};

export default Checkout;
