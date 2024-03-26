import React from "react";
import "./ProductCategories.css";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  return (
    <div className="photo-links-container">
      <Link className="photo-link" to={"/tops"}>
        <img src="/public/ppp.jpg" alt="Tops" />
        <span className="text-overlay">TOPS</span>
      </Link>
      <Link className="photo-link" to={"/bottoms"}>
        <img src="/public/4pants.jpg" alt="Bottoms" />
        <span className="text-overlay">BOTTOMS</span>
      </Link>
      
    </div>
  );
};

export default ProductCategories;
