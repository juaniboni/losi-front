import React, { useState } from "react";
import { Link } from "react-router-dom";
// import LoginSignupModal from "./LoginSignupModal";
import CartArticle from "./CartArticle"; // Importa el componente CartArticle

import { useSelector } from "react-redux"; // Asegúrate de importar correctamente useSelector

import "./Cart.css";

const Cart = ({ cartOpen, toggleCart }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleCheckout = () => {
    openModal();
  };

  const cartItems = useSelector((state) => state.cart.items);
  
  const calculateSubtotal = () => {
    let subtotal = 0;
    cartItems.forEach((item) => {
      subtotal += item.price * item.quantity;
    });
    return subtotal;
  };

  return (
    <>
      {isModalOpen && <LoginSignupModal onClose={closeModal} />}
      <div
        className={`${cartOpen ? "cart-context-shadow" : ""}`}
        onClick={toggleCart}
      ></div>
      <div className={`cart-container ${cartOpen ? "cart-open" : ""}`}>
        <div className="cart-header">
          <h3 className="cart-header-title">CART</h3>
          <p className="cart-header-close" onClick={toggleCart}>
            X
          </p>
        </div>
        {cartOpen && (
          <div className="cart-main">
            {cartItems.length === 0 && (
              <p className="cart-main-empty">No hay nada en tu carrito</p>
            )}
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <CartArticle
                    source={item.photo}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    id={item.id}
                    selectedSize={item.selectedSize}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="cart-subtotal">
          <p>Subtotal ---&gt; ${calculateSubtotal()}</p>
        </div>
        <div className="cart-footer">
          <Link to="/checkOut" onClick={toggleCart}>
          <button className="cart-check">
            <p className="cart-footer-checkout">CHECKOUT</p>
          </button></Link>
        </div>
      </div>
    </>
  );
};

export default Cart;
