import React, { useState, useEffect } from "react";
import "./Featured.css";
import FeaturedItem from "./FeaturedItem";
import axios from "axios";
import { Link } from "react-router-dom";

const Featured = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from your backend API
    const fetchProducts = async () => {
      try {
        console.log("This is the fetch for the products");
        const response = await axios.get(
          import.meta.env.VITE_API_URL + "products/featured"
        );
        console.log("Products fetched successfully:", response.data);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  console.log("lista de featured items:", products);
  return (
    <div className="featured-featured">
      <h2 className="featured-title">FEATURED PRODUCTS</h2>
      <div className="featured-container">
        {products.map((product) => (
          <Link to={`/product/${product.id}`}>
            <FeaturedItem
              key={product.id}
              imageSrc={
                product.photo.startsWith("https")
                  ? product.photo
                  : import.meta.env.VITE_API_URL + `${product.photo}`
              }
              description={`${product.name}\n$${product.price}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Featured;
