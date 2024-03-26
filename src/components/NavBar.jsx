import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../redux/customerReducer"; // Import clearUser action
import SearchModal from "./SearchModal";
import "./NavBar.css";
import ModalConfirmLogout from "./ModalConfirmLogout";
import { slide as Menu } from "react-burger-menu";
import LoginSignupModal from "./LoginSignupModal";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  removeAllItems,
} from "../redux/cartReducer";

const Navbar = ({ toggleCart }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchModalOpen, setSearchModalOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch(); // Get dispatch function
  const user = useSelector((state) => state.customer.user);
  const handleRemoveAllItems = () => {
    dispatch(removeAllItems());
  }; // Get user from Redux state

  const handleLogin = () => {
    openModal();
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const openSearchModal = () => {
    setSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setSearchModalOpen(false);
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    // Close the menu when the location changes
    closeMenu();
  }, [location.pathname]);

  const handleLinkClick = () => {
    closeMenu();
  };

  const isIntroPage = location.pathname === "/";
  if (isIntroPage) {
    return null;
  }

  // Function to handle logout
  const handleLogout = () => {
    // Dispatch action to clear user data from Redux state
    dispatch(clearUser());

    dispatch(removeAllItems());
    navigate("/login");
    setShowLogoutModal(false);
  };

  const handleLogoutModalOpen = () => {
    setShowLogoutModal(true);
  };

  return (
    <>
      <nav className="navbar">
        {user && user.customer ? (
          <div className="user-info">
            <p className="welcome-text">Welcome, {user.customer.firstname}!</p>
            <button className="logout-text" onClick={handleLogoutModalOpen}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-login-container">
            <Link className="login-link" to="/login">
              <img
                src="/public/user-icon.jpeg"
                alt=""
                className="nav-cart-icon"
              />
              <p className="login-link">Login</p>
            </Link>
          </div>
        )}
        <div>
          <ul className="nav-list center-links">
            <li className="nav-item">
              <Link to="/home">HOME</Link>
            </li>
            <li className={`nav-item dropdown ${isMenuOpen ? "open" : ""}`}>
              <div className="menu-toggle" onClick={toggleMenu}>
                <span className="nav-span">SHOP</span>
              </div>
              {isMenuOpen && (
                <ul className="dropdown-menu">
                  <li onClick={handleLinkClick}>
                    <Link to="/accessories">ACCESSORIES</Link>
                  </li>
                  <li onClick={handleLinkClick}>
                    <Link to="/tops">TOPS</Link>
                  </li>
                  <li onClick={handleLinkClick}>
                    <Link to="/bottoms">BOTTOMS</Link>
                  </li>
                  <li onClick={handleLinkClick}>
                    <Link to="/decks">DECKS</Link>
                  </li>
                  <li onClick={handleLinkClick}>
                    <Link to="/others">OTHERS</Link>
                  </li>
                </ul>
              )}
            </li>
            <li id="flor" className="nav-item logo">
              <Link to="/">
                <img
                  className="losi-flor"
                  src={`${import.meta.env.VITE_BUKET_URL}losiFlor.png`}
                  alt="logo"
                  style={{ width: "100px", height: "auto" }}
                />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutUs">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link to="/media">MEDIA</Link>
            </li>
          </ul>
        </div>
        <div className="nav-icons">
          <img
            onClick={openSearchModal}
            src={`${import.meta.env.VITE_BUKET_URL}search-icon.png`}
            alt=""
            className="nav-search-icon"
          />
          <Link to="#" onClick={toggleCart}>
            <img
              src={`${import.meta.env.VITE_BUKET_URL}empty-cart-icon.png`}
              alt=""
              className="nav-cart-icon"
            />
          </Link>
        </div>
        {isSearchModalOpen && <SearchModal onClose={closeSearchModal} />}
      </nav>
      <ModalConfirmLogout
        open={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </>
  );
};

export default Navbar;
