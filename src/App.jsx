import { useState } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./App.css";
import Video from "./pages/Video";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";
import Category from "./pages/Category";
import ScrollToTop from "./components/ScrollToTop";
import Checkout from "./pages/Checkout";
import Signup from "./pages/SignUp";
import SearchModal from "./components/SearchModal";
import LoginPage from "./pages/LoginPage";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import { useSelector } from "react-redux";
import Feedback from "./components/Feedback";
import ErrorComponent from "./components/Error";
import Media from "./pages/Media";
function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const token = useSelector((state) => state.customer.token);
  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <>
      <Cart cartOpen={cartOpen} toggleCart={toggleCart} />
      <NavBar toggleCart={toggleCart} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Video />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/product/:id"
          element={<ProductDetails toggleCart={toggleCart} />}
        />
        <Route path="/:categoryName" element={<Category />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route
          path="/checkOut"
          element={token ? <Checkout /> : <Navigate to="/login" />}
        />
        <Route
          path="/feedback"
          element={token ? <Feedback /> : <Navigate to="/login" />}
        />
        <Route
          path="/error"
          element={token ? <ErrorComponent /> : <Navigate to="/login" />}
        />
        <Route path="/signUp" element={<Signup />} />
        <Route path="/search" element={<SearchModal />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/reset/:token" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </>
  );
}

export default App;
