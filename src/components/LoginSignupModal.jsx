import React from "react";
import { Link } from "react-router-dom";
import "./LoginSignupModal.css";


const LoginSignupModal = ({ onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="signup-login-container">
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Iniciar sesión o registrarse</h2>
          <button onClick={handleClose} className="modal-close-btn">
            X
          </button>
        </div>
        <div className="modal-body">
          <p>
            Por favor, inicia sesión o regístrate para continuar con el
            proceso de compra.
          </p>
          <div className="login-signup-buttons">
            <Link to={"/login"} className="login-button">
              Iniciar sesión
            </Link>
            <Link to={"/signup"} className="signup-button">
              Registrarse
            </Link>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LoginSignupModal;
